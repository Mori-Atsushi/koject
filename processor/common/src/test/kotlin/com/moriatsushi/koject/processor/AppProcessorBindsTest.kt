package com.moriatsushi.koject.processor

import com.moriatsushi.koject.processor.assert.assertCompileSucceed
import com.moriatsushi.koject.processor.compiletesting.KotlinCompilationFactory
import com.tschuchort.compiletesting.SourceFile
import java.io.File
import org.junit.Before
import org.junit.Rule
import org.junit.Test
import org.junit.rules.TemporaryFolder

class AppProcessorBindsTest {
    @get:Rule
    val tempFolder: TemporaryFolder = TemporaryFolder()

    private val compilationFactory = KotlinCompilationFactory()
    private lateinit var folder: File

    @Before
    fun setup() {
        folder = tempFolder.newFolder()
    }

    @Test
    fun compile() {
        val complication = compilationFactory.create(folder)
        complication.sources = listOf(inputCode)
        val result = complication.compile()

        assertCompileSucceed(result)
    }

    private val inputCode = SourceFile.kotlin(
        "Test.kt",
        """
                package com.testpackage

                import com.moriatsushi.koject.Binds
                import com.moriatsushi.koject.Provides

                @Binds
                @Provides
                class SampleImpl: Sample

                interface Sample
            """,
    )
}
