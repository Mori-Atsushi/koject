package com.moriatsushi.koject.processor.factory

import com.moriatsushi.koject.processor.analytics.primaryConstructorWithParameters
import com.moriatsushi.koject.processor.code.AnnotationSpecFactory
import com.moriatsushi.koject.processor.code.Names
import com.moriatsushi.koject.processor.code.applyCommon
import com.moriatsushi.koject.processor.symbol.ProviderDeclaration
import com.squareup.kotlinpoet.ANY
import com.squareup.kotlinpoet.FileSpec
import com.squareup.kotlinpoet.FunSpec
import com.squareup.kotlinpoet.KModifier
import com.squareup.kotlinpoet.LambdaTypeName
import com.squareup.kotlinpoet.ParameterSpec
import com.squareup.kotlinpoet.TypeSpec
import com.squareup.kotlinpoet.ksp.addOriginatingKSFile

internal class FactoryFileSpecFactory {
    fun create(provider: ProviderDeclaration): FileSpec {
        val factoryName = Names.factoryNameOf(provider.identifier)
        return FileSpec.builder(
            packageName = Names.factoryPackageName,
            fileName = factoryName,
        ).apply {
            applyCommon()
            addType(createClassSpec(provider))
        }.build()
    }

    private fun createClassSpec(provider: ProviderDeclaration): TypeSpec {
        val factoryName = Names.factoryNameOf(provider.identifier)
        val constructorSpec = createConstructorSpec(provider)
        val createFunSpec = createCreateFunSpec(provider)
        val internalAnnotationSpec =
            AnnotationSpecFactory.createInternal()
        val assistantIDAnnotationSpec =
            AnnotationSpecFactory.createAssistantID(provider.identifier)

        return TypeSpec.classBuilder(factoryName).apply {
            primaryConstructorWithParameters(
                constructorSpec,
                setOf(KModifier.PRIVATE),
            )
            addFunction(createFunSpec)
            addAnnotation(internalAnnotationSpec)
            addAnnotation(assistantIDAnnotationSpec)

            addOriginatingKSFile(provider.containingFile)
        }.build()
    }

    private fun createConstructorSpec(provider: ProviderDeclaration): FunSpec {
        return FunSpec.constructorBuilder().apply {
            provider.dependencies.forEach {
                val providerName = Names.providerNameOf(it.identifier)
                val parameter = ParameterSpec.builder(
                    providerName,
                    LambdaTypeName.get(returnType = ANY),
                ).apply {
                    addAnnotation(
                        AnnotationSpecFactory.createAssistantID(it.identifier),
                    )
                }.build()
                addParameter(parameter)
            }
        }.build()
    }

    private fun createCreateFunSpec(provider: ProviderDeclaration): FunSpec {
        return FunSpec.builder("create").apply {
            val params = provider.dependencies.joinToString(",") {
                val providerName = Names.providerNameOf(it.identifier)
                "\n$providerName() as ${it.asTypeName()}"
            }
            returns(ANY)
            addStatement("return ${provider.asTypeName()}($params\n)")
        }.build()
    }
}
