@file:OptIn(ExperimentalKojectApi::class)

package com.moriatsushi.koject.internal

import com.moriatsushi.koject.ExperimentalKojectApi
import com.moriatsushi.koject.Extras

@InternalKojectApi
interface Factory {
    fun create(extras: Extras): Any
}
