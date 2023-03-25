"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1501],{3905:(e,o,t)=>{t.d(o,{Zo:()=>p,kt:()=>k});var n=t(7294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function i(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?i(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function s(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),l=function(e){var o=n.useContext(c),t=o;return e&&(t="function"==typeof e?e(o):a(a({},o),e)),t},p=function(e){var o=l(e.components);return n.createElement(c.Provider,{value:o},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},u=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(t),u=r,k=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return t?n.createElement(k,a(a({ref:o},p),{},{components:t})):n.createElement(k,a({ref:o},p))}));function k(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=u;var s={};for(var c in o)hasOwnProperty.call(o,c)&&(s[c]=o[c]);s.originalType=e,s[m]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2599:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=t(7462),r=(t(7294),t(3905));const i={sidebar_position:1},a="Setup",s={unversionedId:"setup",id:"setup",title:"Setup",description:"Multiplatform",source:"@site/docs/setup.mdx",sourceDirName:".",slug:"/setup",permalink:"/koject/docs/setup",draft:!1,editUrl:"https://github.com/Mori-Atsushi/koject/tree/main/docs/docs/setup.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",next:{title:"Core",permalink:"/koject/docs/core/"}},c={},l=[{value:"Multiplatform",id:"multiplatform",level:2},{value:"Single platform",id:"single-platform",level:2},{value:"Library module",id:"library-module",level:2},{value:"Multiplatform",id:"multiplatform-1",level:3},{value:"Single platform",id:"single-platform-1",level:3},{value:"Android",id:"android",level:2},{value:"Compose",id:"compose",level:2},{value:"Version Catalog",id:"version-catalog",level:2}],p={toc:l},m="wrapper";function d(e){let{components:o,...t}=e;return(0,r.kt)(m,(0,n.Z)({},p,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setup"},"Setup"),(0,r.kt)("h2",{id:"multiplatform"},"Multiplatform"),(0,r.kt)("p",null,"You need to enable ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/google/ksp"},"KSP"),".\nAdd according to the platforms you need."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="build.gradle.kts"',title:'"build.gradle.kts"'},'plugins {\n    kotlin("multiplatform")\n+    id("com.google.devtools.ksp") version "<ksp-version>"\n}\n\nkotlin {\n    android()\n    jvm()\n    js(IR) {\n        nodejs()\n        browser()\n    }\n    ios()\n\n    sourceSets {\n        val commonMain by getting {\n            dependencies {\n+                implementation("com.moriatsushi.koject:koject-core:1.3.0")\n            }\n        }\n    }\n}\n\ndependencies {\n    // Add it according to your targets.\n+    val processor = "com.moriatsushi.koject:koject-processor-app:1.3.0"\n+    add("kspAndroid", processor)\n+    add("kspJvm", processor)\n+    add("kspJs", processor)\n+    add("kspIosX64", processor)\n+    add("kspIosArm64", processor)\n}\n')),(0,r.kt)("h2",{id:"single-platform"},"Single platform"),(0,r.kt)("p",null,"Inject can also be used on a single platform."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="build.gradle.kts"',title:'"build.gradle.kts"'},'plugins {\n    kotlin("<target>")\n+    id("com.google.devtools.ksp") version "<ksp-version>"\n}\n\ndependencies {\n+    implementation("com.moriatsushi.koject:koject-core:1.3.0")\n+    ksp("com.moriatsushi.koject:koject-processor-app:1.3.0")\n}\n')),(0,r.kt)("h2",{id:"library-module"},"Library module"),(0,r.kt)("p",null,"In the library module, use ",(0,r.kt)("inlineCode",{parentName:"p"},"koject-processor-lib")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"koject-processor-app")," to prevent container generation in the library module."),(0,r.kt)("p",null,"To enable the collection of transitive dependencies, set the ",(0,r.kt)("inlineCode",{parentName:"p"},"moduleName")," property."),(0,r.kt)("h3",{id:"multiplatform-1"},"Multiplatform"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="build.gradle.kts"',title:'"build.gradle.kts"'},'dependencies {\n    // Add it according to your targets.\n-    val processor = "com.moriatsushi.koject:koject-processor-app:1.3.0"\n+    val processor = "com.moriatsushi.koject:koject-processor-lib:1.3.0"\n    add("kspAndroid", processor)\n    add("kspJvm", processor)\n    add("kspJs", processor)\n    add("kspIosX64", processor)\n    add("kspIosArm64", processor)\n}\n\n+ ksp {\n+     arg("moduleName", project.name) \n+ }\n')),(0,r.kt)("h3",{id:"single-platform-1"},"Single platform"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="build.gradle.kts"',title:'"build.gradle.kts"'},'dependencies {\n    implementation("com.moriatsushi.koject:koject-core:1.3.0")\n-    ksp("com.moriatsushi.koject:koject-processor-app:1.3.0")\n+    ksp("com.moriatsushi.koject:koject-processor-lib:1.3.0")\n}\n\n+ ksp {\n+     arg("moduleName", project.name) \n+ }\n')),(0,r.kt)("h2",{id:"android"},"Android"),(0,r.kt)("p",null,"For Android applications, additional functionality is available by adding the following packages."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'dependencies {\n    // Inject Application / Context (Recommended)\n    implementation("com.moriatsushi.koject:koject-android-core:1.3.0")\n    // Activity support\n    implementation("com.moriatsushi.koject:koject-android-activity:1.3.0")\n    // Fragment support\n    implementation("com.moriatsushi.koject:koject-android-fragment:1.3.0")\n    // ViewModelFactory only\n    implementation("com.moriatsushi.koject:koject-android-viewmodel:1.3.0")\n}\n')),(0,r.kt)("h2",{id:"compose"},"Compose"),(0,r.kt)("p",null,"If you are using ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/jetpack/compose"},"Jetpack Compose")," or ",(0,r.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/lp/compose-mpp/"},"Compose Multiplatform"),", the following package is available."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'dependencies {\n    implementation("com.moriatsushi.koject:koject-compose-core:1.3.0")\n}\n')),(0,r.kt)("p",null,"To inject Android ViewModel into Composable, use the following package. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'dependencies {\n    // Inject ViewModel into Composable (Android only)\n    implementation("com.moriatsushi.koject:koject-compose-viewmodel:1.3.0")\n}\n')),(0,r.kt)("h2",{id:"version-catalog"},"Version Catalog"),(0,r.kt)("p",null,"Copy the following snippets if you are using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.gradle.org/current/userguide/platforms.html"},"gradle verion catalog"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="libs.versions.toml"',title:'"libs.versions.toml"'},'[versions]\nkoject = "1.3.0"\n\n[libraries]\nkoject-core = { group = "com.moriatsushi.koject", name = "koject-core", version.ref = "koject" }\nkoject-test = { group = "com.moriatsushi.koject", name = "koject-test", version.ref = "koject" }\nkoject-processor-app = { group = "com.moriatsushi.koject", name = "koject-processor-app", version.ref = "koject" }\nkoject-processor-lib = { group = "com.moriatsushi.koject", name = "koject-processor-lib", version.ref = "koject" }\nkoject-android-core = { group = "com.moriatsushi.koject", name = "koject-android-core", version.ref = "koject" }\nkoject-android-activity = { group = "com.moriatsushi.koject", name = "koject-android-activity", version.ref = "koject" }\nkoject-android-fragment = { group = "com.moriatsushi.koject", name = "koject-android-fragment", version.ref = "koject" }\nkoject-android-viewmodel = { group = "com.moriatsushi.koject", name = "koject-android-viewmodel", version.ref = "koject" }\nkoject-compose-core = { group = "com.moriatsushi.koject", name = "koject-compose-core", version.ref = "koject" }\nkoject-compose-viewmodel = { group = "com.moriatsushi.koject", name = "koject-compose-viewmodel", version.ref = "koject" }\n')))}d.isMDXComponent=!0}}]);