package com.moriatsushi.koject

import com.moriatsushi.koject.internal.ExtrasImpl
import com.moriatsushi.koject.internal.Identifier

/**
 * Create [Extras]
 */
@ExperimentalKojectApi
class ExtrasBuilder internal constructor() {
    private val map = mutableMapOf<Identifier, () -> Any>()

    /**
     * Provide at runtime
     *
     * @param qualifier Qualifier for identification.
     *   Specify the instantiation of the annotation with [Qualifier].
     * @param builder How to create an instance
     */
    inline fun <reified T : Any> provides(
        qualifier: Any? = null,
        noinline builder: () -> T,
    ) {
        val identifier = Identifier.of<T>(qualifier)
        provides(identifier, builder)
    }

    /**
     * Provide at runtime
     *
     * @param name [Named] Qualifier.
     * @param builder How to create an instance
     */
    inline fun <reified T : Any> provides(
        name: String,
        noinline builder: () -> T,
    ) {
        provides(Named(name), builder)
    }

    @PublishedApi
    internal fun provides(identifier: Identifier, builder: () -> Any) {
        map[identifier] = builder
    }

    internal fun build(): Extras {
        return if (map.isNotEmpty()) {
            ExtrasImpl(map)
        } else {
            Extras.empty
        }
    }
}

/**
 * Create [Extras]
 */
@ExperimentalKojectApi
fun buildExtras(builder: (ExtrasBuilder.() -> Unit)? = null): Extras {
    return if (builder == null) {
        Extras.empty
    } else {
        ExtrasBuilder().apply { builder() }.build()
    }
}
