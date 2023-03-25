"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3352],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>j});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)o=c[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)o=c[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var m=r.createContext({}),s=function(e){var t=r.useContext(m),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},l="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,c=e.originalType,m=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),l=s(o),p=n,j=l["".concat(m,".").concat(p)]||l[p]||h[p]||c;return o?r.createElement(j,i(i({ref:t},d),{},{components:o})):r.createElement(j,i({ref:t},d))}));function j(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=o.length,i=new Array(c);i[0]=p;var a={};for(var m in t)hasOwnProperty.call(t,m)&&(a[m]=t[m]);a.originalType=e,a[l]="string"==typeof e?e:n,i[1]=a;for(var s=2;s<c;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},6688:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>s});var r=o(7462),n=(o(7294),o(3905));o(1054);const c={slug:"android-components",title:"Koject v1.2.0 - Android\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u8ffd\u52a0",authors:"atsushi",image:"/blog/2023-03-18/ogp.png"},i="Koject v1.2.0 - Android\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u8ffd\u52a0",a={permalink:"/koject/blog/jp/android-components",editUrl:"https://github.com/Mori-Atsushi/koject/tree/main/docs/blog-jp/2023-03-18-android-components.mdx",source:"@site/blog-jp/2023-03-18-android-components.mdx",title:"Koject v1.2.0 - Android\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u8ffd\u52a0",description:"Koject 1.1.0\u3067Android\u306e\u30b5\u30dd\u30fc\u30c8\u304c\u5f37\u5316\u3055\u308c\u305f\u3070\u304b\u308a\u3067\u3059\u304c\u3001Koject 1.2.0\u3067\u306f\u3055\u3089\u306b\u8907\u6570\u306e\u6a5f\u80fd\u304c\u8ffd\u52a0\u3055\u308c\u3066\u3044\u307e\u3059\u3002",date:"2023-03-18T00:00:00.000Z",formattedDate:"March 18, 2023",tags:[],hasTruncateMarker:!0,authors:[{name:"Mori Atsushi",title:"Koject owner",url:"https://github.com/Mori-Atsushi",imageURL:"https://github.com/mori-atsushi.png",key:"atsushi"}],frontMatter:{slug:"android-components",title:"Koject v1.2.0 - Android\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u8ffd\u52a0",authors:"atsushi",image:"/blog/2023-03-18/ogp.png"},prevItem:{title:"Koject v1.3.0 - DI\u30b3\u30f3\u30c6\u30ca\u3092\u4f7f\u3063\u305f\u30c6\u30b9\u30c8\u30b3\u30fc\u30c9\u3092\u66f8\u3053\u3046",permalink:"/koject/blog/jp/test-test-test"},nextItem:{title:"Koject v1.1.0 - Android\u306e\u30b5\u30dd\u30fc\u30c8\u5f37\u5316",permalink:"/koject/blog/jp/android-support"}},m={authorsImageUrls:[void 0]},s=[],d={toc:s},l="wrapper";function h(e){let{components:t,...c}=e;return(0,n.kt)(l,(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(7566).Z,width:"1800",height:"630"})),(0,n.kt)("p",null,"Koject 1.1.0\u3067",(0,n.kt)("a",{parentName:"p",href:"/blog/jp/android-support"},"Android\u306e\u30b5\u30dd\u30fc\u30c8\u304c\u5f37\u5316"),"\u3055\u308c\u305f\u3070\u304b\u308a\u3067\u3059\u304c\u3001Koject 1.2.0\u3067\u306f\u3055\u3089\u306b\u8907\u6570\u306e\u6a5f\u80fd\u304c\u8ffd\u52a0\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001v1.2.0\u306e\u5229\u7528\u65b9\u6cd5\u3068\u3001\u8ffd\u52a0\u3055\u308c\u305f\u4e3b\u306a\u6a5f\u80fd\u306b\u3064\u3044\u3066\u7d39\u4ecb\u3057\u307e\u3059\u3002"))}h.isMDXComponent=!0},1054:(e,t,o)=>{o.d(t,{$h:()=>g,BQ:()=>S,E:()=>E,GU:()=>U,Hc:()=>c,IQ:()=>A,Kj:()=>N,N8:()=>Q,NR:()=>s,O$:()=>T,Or:()=>b,Pc:()=>j,Q4:()=>F,TD:()=>O,UK:()=>D,Uf:()=>y,Vi:()=>Z,Vn:()=>v,Zf:()=>m,_P:()=>d,dK:()=>I,eG:()=>i,eh:()=>P,f3:()=>k,kJ:()=>K,m:()=>p,oX:()=>M,pn:()=>z,pt:()=>f,q:()=>a,q0:()=>V,qK:()=>l,ql:()=>u,s7:()=>q,tB:()=>h,tQ:()=>x,wn:()=>w,yc:()=>C});var r=o(7294);const n=e=>{let{children:t,href:o}=e;return r.createElement("a",{href:`/koject/api${o}`,target:"_blank"},r.createElement("code",null,t))},c=()=>r.createElement(n,{href:"/koject-core/com.moriatsushi.koject/-provides/index.html"},"@Provides"),i=()=>r.createElement(n,{href:"/koject-core/com.moriatsushi.koject/-singleton/index.html"},"@Singleton"),a=()=>r.createElement(n,{href:"/koject-core/com.moriatsushi.koject/-qualifier/index.html"},"@Qualifier"),m=()=>r.createElement(n,{href:"/koject-core/com.moriatsushi.koject/-named/index.html"},"@Named"),s=()=>r.createElement(n,{href:"/koject-core/com.moriatsushi.koject/-binds/index.html"},"@Binds"),d=()=>r.createElement(n,{href:"/koject-core/com.moriatsushi.koject/start.html"},"Koject.start()"),l=()=>r.createElement(n,{href:"/koject-core/com.moriatsushi.koject/-koject/stop.html"},"Koject.stop()"),h=()=>r.createElement(n,{href:"/koject-core/com.moriatsushi.koject/inject.html"},"inject()"),p=()=>r.createElement(n,{href:"/koject-core/com.moriatsushi.koject/lazy-inject.html"},"lazyInject()"),j=()=>r.createElement(n,{href:"/koject-core/com.moriatsushi.koject.extras/-koject-extras/index.html"},"KojectExtras"),u=()=>r.createElement(n,{href:"/koject-core/com.moriatsushi.koject.extras/-koject-extras-message/index.html"},"@KojectExtrasMessage"),f=()=>r.createElement(n,{href:"/koject-core/com.moriatsushi.koject.component/-component-extras/index.html"},"ComponentExtras"),k=()=>r.createElement(n,{href:"/koject-core/com.moriatsushi.koject.error/-missing-extras-exception/index.html"},"MissingExtrasException"),g=()=>r.createElement(n,{href:"/koject-test/com.moriatsushi.koject.test/run-test.html"},"Koject.runTest()"),v=()=>r.createElement(n,{href:"/koject-test/com.moriatsushi.koject.test/start-test.html"},"Koject.startTest()"),y=()=>r.createElement(n,{href:"/koject-test/com.moriatsushi.koject.test/-test-provides/index.html"},"@TestProvides"),E=()=>r.createElement(n,{href:"/android/koject-android-core/com.moriatsushi.koject.android/application.html"},"application()"),x=()=>r.createElement(n,{href:"/android/koject-android-viewmodel/com.moriatsushi.koject.android.viewmodel/-view-model-component/index.html"},"@ViewModelComponent"),b=()=>r.createElement(n,{href:"/android/koject-android-viewmodel/com.moriatsushi.koject.android.viewmodel/-view-model-coroutine-scope/index.html"},"@ViewModelCoroutineScope"),w=()=>r.createElement(n,{href:"/android/koject-android-activity/com.moriatsushi.koject/inject.html"},"ComponentActivity.inject()"),O=()=>r.createElement(n,{href:"/android/koject-android-activity/com.moriatsushi.koject/lazy-inject.html"},"ComponentActivity.lazyInject()"),C=()=>r.createElement(n,{href:"/android/koject-android-activity/com.moriatsushi.koject.android.activity/-activity-component/index.html"},"@ActivityComponent"),K=()=>r.createElement(n,{href:"/android/koject-android-activity/com.moriatsushi.koject.android.activity/-activity-context/index.html"},"@ActivityContext"),M=()=>r.createElement(n,{href:"/android/koject-android-activity/com.moriatsushi.koject.android.activity/-activity-context/index.html"},"@ActivityCoroutineScope"),A=()=>r.createElement(n,{href:"/android/koject-android-activity/com.moriatsushi.koject.android.activity/lazy-view-models.html"},"ComponentActivity.lazyViewModels()"),P=()=>r.createElement(n,{href:"/android/koject-android-activity/com.moriatsushi.koject.android.activity/inject-view-models.html"},"ComponentActivity.injectViewModels()"),T=()=>r.createElement(n,{href:"/android/koject-android-fragment/com.moriatsushi.koject/inject.html"},"Fragment.inject()"),z=()=>r.createElement(n,{href:"/android/koject-android-fragment/com.moriatsushi.koject/lazy-inject.html"},"Fragment.lazyInject()"),D=()=>r.createElement(n,{href:"/android/koject-android-fragment/com.moriatsushi.koject.android.fragment/-fragment-component/index.html"},"@FragmentComponent"),I=()=>r.createElement(n,{href:"/android/koject-android-fragment/com.moriatsushi.koject.android.fragment/-fragment-coroutine-scope/index.html"},"@FragmentCoroutineScope"),S=()=>r.createElement(n,{href:"/android/koject-android-fragment/com.moriatsushi.koject.android.fragment/-fragment-view-coroutine-scope/index.html"},"@FragmentViewCoroutineScope"),V=()=>r.createElement(n,{href:"/android/koject-android-fragment/com.moriatsushi.koject.android.fragment/lazy-view-models.html"},"Fragment.lazyViewModels()"),F=()=>r.createElement(n,{href:"/android/koject-android-fragment/com.moriatsushi.koject.android.fragment/inject-view-models.html"},"Fragment.injectViewModels()"),N=()=>r.createElement(n,{href:"/compose/koject-compose-core/com.moriatsushi.koject.compose/remember-inject.html"},"rememberInject()"),U=()=>r.createElement(n,{href:"/compose/koject-compose-viewmodel/com.moriatsushi.koject.compose.viewmodel/inject-view-model.html"},"injectViewModel()"),Z=()=>r.createElement(n,{href:"/compose/koject-compose-core/com.moriatsushi.koject.compose/-compose-component/index.html"},"@ComposeComponent"),q=()=>r.createElement(n,{href:"/compose/koject-compose-core/com.moriatsushi.koject.compose/-compose-coroutine-scope/index.html"},"@ComposeCoroutineScope"),Q=()=>r.createElement(n,{href:"/compose/koject-compose-core/com.moriatsushi.koject.compose/-compose-context/index.html"},"@ComposeContext")},7566:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/banner-ad7697f1a86ee926742691349d6e917e.png"}}]);