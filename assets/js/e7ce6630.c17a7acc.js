"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[668],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,k=u["".concat(p,".").concat(f)]||u[f]||m[f]||l;return r?n.createElement(k,o(o({ref:t},s),{},{components:r})):n.createElement(k,o({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5765:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const l={},o=void 0,i={type:"mdx",permalink:"/koject/",source:"@site/src/pages/index.mdx",description:"Koject - DI Container Library for Kotlin Multiplatform",frontMatter:{}},p=[{value:"Features",id:"features",level:2},{value:"Documents",id:"documents",level:2},{value:"Examples",id:"examples",level:2},{value:"Related libraries",id:"related-libraries",level:2}],c={toc:p},s="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"Koject - DI Container Library for Kotlin Multiplatform")),(0,a.kt)("h1",{id:"koject"},"Koject"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/multiplatform.html"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Kotlin-Multiplatform-%237f52ff?logo=kotlin",alt:null})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/com.moriatsushi.koject/koject-core"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/maven-central/v/com.moriatsushi.koject/koject-core",alt:null})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Mori-Atsushi/koject/blob/main/LICENSE"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/github/license/mori-atsushi/koject",alt:null}))),(0,a.kt)("p",null,"Koject is a DI Container Library for Kolin Multiplatform using KSP."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun main() {\n    Koject.start()\n\n    val controller = inject<Controller>()\n}\n\n@Singleton\n@Provides\nclass Api\n\n@Singleton\n@Provides\nfun provideDB(): DB {\n    return DB.create()\n}\n\n@Binds\n@Singleton\n@Provides\nclass RepositoryImpl(\n    private val api: Api,\n    private val db: DB,\n): Repository\n\ninterface Repository\n\n@Provides\nclass Controller(\n    private val repository: Repository\n)\n")),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Support ",(0,a.kt)("a",{parentName:"li",href:"https://kotlinlang.org/docs/multiplatform.html"},"Kotlin Multiplatform")),(0,a.kt)("li",{parentName:"ul"},"Easy provide with annotations"),(0,a.kt)("li",{parentName:"ul"},"Check dependency graph at compile time"),(0,a.kt)("li",{parentName:"ul"},"Code generation with ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/google/ksp"},"KSP")),(0,a.kt)("li",{parentName:"ul"},"Support multi-module project")),(0,a.kt)("h2",{id:"documents"},"Documents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/setup"},"Setup")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/core"},"Core"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/core/basic"},"Start Koject")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"docs/core/qualifier"},"Qualifier")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/core/binds"},"Binds")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/android"},"Android")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/compose"},"Compose"))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Mori-Atsushi/koject/tree/main/examples/kmm"},"Koject TODO (KMM)"))),(0,a.kt)("h2",{id:"related-libraries"},"Related libraries"),(0,a.kt)("p",null,"Koject is inspired by the following libraries."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/google/dagger"},"google/dagger")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/InsertKoinIO/koin"},"InsertKoinIO/koin")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/evant/kotlin-inject"},"evant/kotlin-inject")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/mars885/hilt-binder"},"mars885/hilt-binder"))))}u.isMDXComponent=!0}}]);