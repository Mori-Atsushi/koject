@file:OptIn(ExperimentalKojectApi::class)

package com.moriatsushi.koject.processor.container

import com.moriatsushi.koject.ExperimentalKojectApi
import com.moriatsushi.koject.Extras
import com.moriatsushi.koject.ExtrasBuilder
import com.moriatsushi.koject.Koject
import com.moriatsushi.koject.processor.code.AnnotationSpecFactory
import com.moriatsushi.koject.processor.code.AnnotationSpecFactory.createExperimental
import com.moriatsushi.koject.processor.code.Names
import com.moriatsushi.koject.processor.code.applyCommon
import com.squareup.kotlinpoet.FileSpec
import com.squareup.kotlinpoet.FunSpec
import com.squareup.kotlinpoet.KModifier
import com.squareup.kotlinpoet.LambdaTypeName
import com.squareup.kotlinpoet.MemberName
import com.squareup.kotlinpoet.ParameterSpec
import com.squareup.kotlinpoet.UNIT
import com.squareup.kotlinpoet.asTypeName

internal class StartFileSpecFactory {
    fun create(): FileSpec {
        val packageName = Names.rootPackageName
        val containerName = Names.containerClassName

        val startFunSpec = FunSpec.builder("start").apply {
            receiver(Koject::class)
            addStatement("start(extras = %T.empty)", Extras::class.asTypeName())
            addAnnotation(AnnotationSpecFactory.createOptInExperimental())
        }.build()

        val extrasParameter = ParameterSpec.builder(
            "extras",
            Extras::class.asTypeName(),
        ).defaultValue("%T.empty", Extras::class.asTypeName()).build()

        val experimentalStartFunSpec1 = FunSpec.builder("start").apply {
            receiver(Koject::class)
            addParameter(extrasParameter)
            addStatement("val container = %T(extras)", containerName)
            addStatement("%T._start(container)", Koject::class.asTypeName())
            addAnnotation(AnnotationSpecFactory.createOptInInternal())
            addAnnotation(createExperimental())
        }.build()

        val extrasBuilderParameter = ParameterSpec.builder(
            "extras",
            LambdaTypeName.get(
                receiver = ExtrasBuilder::class.asTypeName(),
                returnType = UNIT,
            ),
        ).addModifiers(KModifier.CROSSINLINE).build()

        val experimentalStartFunSpec2 = FunSpec.builder("start").apply {
            receiver(Koject::class)
            addModifiers(KModifier.INLINE)
            addParameter(extrasBuilderParameter)
            addStatement(
                "start(%M(extras))",
                MemberName("com.moriatsushi.koject", "buildExtras"),
            )
            addAnnotation(createExperimental())
        }.build()

        return FileSpec.builder(packageName, "_Start").apply {
            applyCommon()
            addFunction(startFunSpec)
            addFunction(experimentalStartFunSpec1)
            addFunction(experimentalStartFunSpec2)
        }.build()
    }
}
