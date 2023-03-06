@file:OptIn(ExperimentalKojectApi::class)

package com.moriatsushi.koject.integrationtest.app

import com.moriatsushi.koject.ExperimentalKojectApi
import com.moriatsushi.koject.Koject
import com.moriatsushi.koject.inject
import com.moriatsushi.koject.start
import kotlin.test.AfterTest
import kotlin.test.Test
import kotlin.test.assertEquals

class DynamicTest {
    @AfterTest
    fun clear() {
        Koject.stop()
    }

    @Test
    fun successInject_class() {
        Koject.start()

        val value = inject<DynamicClass> {
            provides { "runtime-string-class" }
        }
        assertEquals("runtime-string-class", value.id)
    }

    @Test
    fun successInject_interface() {
        Koject.start()

        val value = inject<DynamicInterface> {
            provides { "runtime-string-interface" }
        }
        assertEquals("runtime-string-interface", value.id)
    }

    @Test
    fun successInject_holder() {
        Koject.start()

        val holder = inject<DynamicHolder> {
            provides { "runtime-string" }
        }

        assertEquals("runtime-string", holder.value1.id)
        assertEquals("runtime-string", holder.value2.id)
    }
}
