# Koject  [🚧 Work in progress 🚧]
Koject is a DI Container library for Kotlin Multiplatform.

```kotlin
fun main() {
    Koject.start()

    val controller = inject<Controller>()
}

@Singleton
@Provides
class Api

@Singleton
@Provides
fun provideDB(): DB {
    return DB.create()
}

@Singleton
@Provides
class Repository(
    private val api: Api,
    private val db: DB,
)

@Provides
class Controller(
    private val repository: Repository
)
```

## Features

* Support [Kotlin Multiplatform](https://kotlinlang.org/docs/multiplatform.html)
* Easy provide with annotations
* Code generation with [KSP](https://github.com/google/ksp)
* Support multi-module project

## Setup
### Multiplatform

You need to enable KSP.

<details open><summary>build.gradle.kts</summary>

```diff
plugins {
    kotlin("multiplatform")
+    id("com.google.devtools.ksp") version "<ksp-version>"
}

kotlin {
    android()
    jvm()
    js(IR) {
        nodejs()
        browser()
    }
    ios()

    sourceSets {
        val commonMain by getting {
            dependencies {
+                implementation("com.moriatsushi.koject:koject-core:1.0.0-alpha05")
            }
        }
    }
}

dependencies {
    // Add it according to your targets.
+    val processor = "com.moriatsushi.koject:koject-processor-app:1.0.0-alpha05"
+    add("kspAndroid", processor)
+    add("kspJvm", processor)
+    add("kspJs", processor)
+    add("kspIosX64", processor)
+    add("kspIosArm64", processor)
}
```
</details>

### Single platform

Inject can also be used on a single platform.

<details><summary>build.gradle.kts</summary>

```diff
plugins {
    kotlin("<target>")
+    id("com.google.devtools.ksp") version "<ksp-version>"
}

dependencies {
+    implementation("com.moriatsushi.koject:koject-core:1.0.0-alpha05")
+    ksp("com.moriatsushi.koject:koject-processor-app:1.0.0-alpha05")
}
```

</details>

### Library module
Use `koject-processor-lib` to avoid generating `Container` in library modules.

<details open><summary>build.gradle.kts (Multiplatform)</summary>

```diff
dependencies {
    // Add it according to your targets.
-    val processor = "com.moriatsushi.koject:koject-processor-app:1.0.0-alpha05"
+    val processor = "com.moriatsushi.koject:koject-processor-lib:1.0.0-alpha05"
    add("kspAndroid", processor)
    add("kspJvm", processor)
    add("kspJs", processor)
    add("kspIosX64", processor)
    add("kspIosArm64", processor)
}
```

</details>

<details><summary>build.gradle.kts (single platform)</summary>

```diff
dependencies {
    implementation("com.moriatsushi.koject:koject-core:1.0.0-alpha05")
-    ksp("com.moriatsushi.koject:koject-processor-app:1.0.0-alpha05")
+    ksp("com.moriatsushi.koject:koject-processor-lib:1.0.0-alpha05")
}
```

</details>

## Usage
Add `@Provides` annotation to the class you want to provide.

```kotlin
@Provides
class Repository

@Provides
class Controller(
    private val repository: Repository
)
```

You can get an instance using `inject` after calling `Koject.start()`.

```kotlin
fun main() {
    Koject.start()

    val controller = inject<Controller>()
}
```

### Provide from functions
Any types can be provided from top-level functions with a `@Provides` annotation. This is useful when provide outside modules classes.

```kotlin
@Provides
fun provideDB(): DB {
    return DB.create()
}
```

You can also provide from object functions.

```kotlin
object DBFactory {
    @Provides
    fun create(): DB {
        return DB.create()
    }
}
```

### Singleton Scope
By adding the `@Singleton` annotation, the instance will be created only once and reused within the application.

```kotlin
@Singleton
@Provides
class Api

@Singleton
@Provides
fun provideDB(): DB {
    return DB.create()
}
```

Note that you can't inject a normally scope type into a singleton scope type.

```kotlin
@Provides
class NormalScope

@Singleton
@Provides
class SingletonScope(
    // cannot inject!
    private val normal: NormalScope
)
```

### Qualifier
When you want to provide the same type, you can use `@Qualifier` annotations to distinguish between them.

First, define qualifier annotations with `@Qualifier`.

```kotlin
@Qualifier
@Retention(AnnotationRetention.BINARY)
annotation class ID1

@Qualifier
@Retention(AnnotationRetention.BINARY)
annotation class ID2
```

Then, specify the qualifier annotations when providing.

```kotlin
@ID1
@Provide
fun provideDB1(): DB {
    DB.create("id1")
}

@ID1
@Provide
fun provideDB2(): DB {
    DB.create("id2")
}
```

Finally, you can use the qualifiers  to inject the instances you need.

```kotlin
class Repository(
    @ID1
    val db1: DB,
    @ID2
    val db2: DB
)
```
```kotlin
val db1 = inject<DB>(DB1())
val db2 = inject<DB>(DB2())
```

You can also use a `@Named` qualifier that distinguish by string.

```kotlin
@Named("db1")
@Provide
fun provideDB1(): DB {
    DB.create("id1")
}

@Named("db2")
@Provide
fun provideDB2(): DB {
    DB.create("id2")
}
```
```kotlin
class Repository(
    @Named("db1")
    val db1: DB,
    @Named("db2")
    val db2: DB
)
```
```kotlin
val db1 = inject<DB>("db1")
val db2 = inject<DB>("db2")
```


## TODO
This library is incomplete and the following features will be added later.

- [x] [Allow provide from function #18](https://github.com/Mori-Atsushi/koject/issues/18)
- [x] [Support singleton #19](https://github.com/Mori-Atsushi/koject/issues/19)
- [x] [Allow provide same types #20](https://github.com/Mori-Atsushi/koject/issues/20)
- [ ] [Make type binding easier #21](https://github.com/Mori-Atsushi/koject/issues/21)
- [ ] [Make compile-time error messages easier to understand #22](https://github.com/Mori-Atsushi/koject/issues/22)
- [ ] [Add example projects #29](https://github.com/Mori-Atsushi/koject/issues/29)
- [ ] [Complete documentation #27](https://github.com/Mori-Atsushi/koject/issues/27)
