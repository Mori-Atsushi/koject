"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2782],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>j});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var m=r.createContext({}),s=function(e){var t=r.useContext(m),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},d=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},l="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,m=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),l=s(o),p=n,j=l["".concat(m,".").concat(p)]||l[p]||h[p]||i;return o?r.createElement(j,c(c({ref:t},d),{},{components:o})):r.createElement(j,c({ref:t},d))}));function j(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,c=new Array(i);c[0]=p;var a={};for(var m in t)hasOwnProperty.call(t,m)&&(a[m]=t[m]);a.originalType=e,a[l]="string"==typeof e?e:n,c[1]=a;for(var s=2;s<i;s++)c[s]=o[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},1054:(e,t,o)=>{o.d(t,{$h:()=>g,BQ:()=>S,E:()=>E,GU:()=>U,Hc:()=>i,IQ:()=>M,Kj:()=>N,N8:()=>Q,NR:()=>s,O$:()=>I,Or:()=>x,Pc:()=>j,Q4:()=>F,TD:()=>C,UK:()=>A,Uf:()=>y,Vi:()=>Z,Vn:()=>v,Zf:()=>m,_P:()=>d,dK:()=>z,eG:()=>c,eh:()=>P,f3:()=>k,kJ:()=>T,m:()=>p,oX:()=>K,pn:()=>D,pt:()=>f,q:()=>a,q0:()=>V,qK:()=>l,ql:()=>u,s7:()=>q,tB:()=>h,tQ:()=>w,wn:()=>b,yc:()=>O});var r=o(7294);const n=e=>{let{children:t,href:o}=e;return r.createElement("a",{href:`/koject/api${o}`,target:"_blank"},r.createElement("code",null,t))},i=()=>r.createElement(n,{href:"/koject-core/com.moriatsushi.koject/-provides/index.html"},"@Provides"),c=()=>r.createElement(n,{href:"/koject-core/com.moriatsushi.koject/-singleton/index.html"},"@Singleton"),a=()=>r.createElement(n,{href:"/koject-core/com.moriatsushi.koject/-qualifier/index.html"},"@Qualifier"),m=()=>r.createElement(n,{href:"/koject-core/com.moriatsushi.koject/-named/index.html"},"@Named"),s=()=>r.createElement(n,{href:"/koject-core/com.moriatsushi.koject/-binds/index.html"},"@Binds"),d=()=>r.createElement(n,{href:"/koject-core/com.moriatsushi.koject/start.html"},"Koject.start()"),l=()=>r.createElement(n,{href:"/koject-core/com.moriatsushi.koject/-koject/stop.html"},"Koject.stop()"),h=()=>r.createElement(n,{href:"/koject-core/com.moriatsushi.koject/inject.html"},"inject()"),p=()=>r.createElement(n,{href:"/koject-core/com.moriatsushi.koject/lazy-inject.html"},"lazyInject()"),j=()=>r.createElement(n,{href:"/koject-core/com.moriatsushi.koject.extras/-koject-extras/index.html"},"KojectExtras"),u=()=>r.createElement(n,{href:"/koject-core/com.moriatsushi.koject.extras/-koject-extras-message/index.html"},"@KojectExtrasMessage"),f=()=>r.createElement(n,{href:"/koject-core/com.moriatsushi.koject.component/-component-extras/index.html"},"ComponentExtras"),k=()=>r.createElement(n,{href:"/koject-core/com.moriatsushi.koject.error/-missing-extras-exception/index.html"},"MissingExtrasException"),g=()=>r.createElement(n,{href:"/koject-test/com.moriatsushi.koject.test/run-test.html"},"Koject.runTest()"),v=()=>r.createElement(n,{href:"/koject-test/com.moriatsushi.koject.test/start-test.html"},"Koject.startTest()"),y=()=>r.createElement(n,{href:"/koject-test/com.moriatsushi.koject.test/-test-provides/index.html"},"@TestProvides"),E=()=>r.createElement(n,{href:"/android/koject-android-core/com.moriatsushi.koject.android/application.html"},"application()"),w=()=>r.createElement(n,{href:"/android/koject-android-viewmodel/com.moriatsushi.koject.android.viewmodel/-view-model-component/index.html"},"@ViewModelComponent"),x=()=>r.createElement(n,{href:"/android/koject-android-viewmodel/com.moriatsushi.koject.android.viewmodel/-view-model-coroutine-scope/index.html"},"@ViewModelCoroutineScope"),b=()=>r.createElement(n,{href:"/android/koject-android-activity/com.moriatsushi.koject/inject.html"},"ComponentActivity.inject()"),C=()=>r.createElement(n,{href:"/android/koject-android-activity/com.moriatsushi.koject/lazy-inject.html"},"ComponentActivity.lazyInject()"),O=()=>r.createElement(n,{href:"/android/koject-android-activity/com.moriatsushi.koject.android.activity/-activity-component/index.html"},"@ActivityComponent"),T=()=>r.createElement(n,{href:"/android/koject-android-activity/com.moriatsushi.koject.android.activity/-activity-context/index.html"},"@ActivityContext"),K=()=>r.createElement(n,{href:"/android/koject-android-activity/com.moriatsushi.koject.android.activity/-activity-context/index.html"},"@ActivityCoroutineScope"),M=()=>r.createElement(n,{href:"/android/koject-android-activity/com.moriatsushi.koject.android.activity/lazy-view-models.html"},"ComponentActivity.lazyViewModels()"),P=()=>r.createElement(n,{href:"/android/koject-android-activity/com.moriatsushi.koject.android.activity/inject-view-models.html"},"ComponentActivity.injectViewModels()"),I=()=>r.createElement(n,{href:"/android/koject-android-fragment/com.moriatsushi.koject/inject.html"},"Fragment.inject()"),D=()=>r.createElement(n,{href:"/android/koject-android-fragment/com.moriatsushi.koject/lazy-inject.html"},"Fragment.lazyInject()"),A=()=>r.createElement(n,{href:"/android/koject-android-fragment/com.moriatsushi.koject.android.fragment/-fragment-component/index.html"},"@FragmentComponent"),z=()=>r.createElement(n,{href:"/android/koject-android-fragment/com.moriatsushi.koject.android.fragment/-fragment-coroutine-scope/index.html"},"@FragmentCoroutineScope"),S=()=>r.createElement(n,{href:"/android/koject-android-fragment/com.moriatsushi.koject.android.fragment/-fragment-view-coroutine-scope/index.html"},"@FragmentViewCoroutineScope"),V=()=>r.createElement(n,{href:"/android/koject-android-fragment/com.moriatsushi.koject.android.fragment/lazy-view-models.html"},"Fragment.lazyViewModels()"),F=()=>r.createElement(n,{href:"/android/koject-android-fragment/com.moriatsushi.koject.android.fragment/inject-view-models.html"},"Fragment.injectViewModels()"),N=()=>r.createElement(n,{href:"/compose/koject-compose-core/com.moriatsushi.koject.compose/remember-inject.html"},"rememberInject()"),U=()=>r.createElement(n,{href:"/compose/koject-compose-viewmodel/com.moriatsushi.koject.compose.viewmodel/inject-view-model.html"},"injectViewModel()"),Z=()=>r.createElement(n,{href:"/compose/koject-compose-core/com.moriatsushi.koject.compose/-compose-component/index.html"},"@ComposeComponent"),q=()=>r.createElement(n,{href:"/compose/koject-compose-core/com.moriatsushi.koject.compose/-compose-coroutine-scope/index.html"},"@ComposeCoroutineScope"),Q=()=>r.createElement(n,{href:"/compose/koject-compose-core/com.moriatsushi.koject.compose/-compose-context/index.html"},"@ComposeContext")},3955:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var r=o(7462),n=(o(7294),o(3905));o(1054);const i={slug:"test-test-test",title:"Koject v1.3.0 - Writing Test Code with DI Containers",authors:"atsushi",image:"/blog/2023-03-25/ogp.png"},c="Koject v1.3.0 - Writing Test Code with DI Containers",a={permalink:"/koject/blog/test-test-test",editUrl:"https://github.com/Mori-Atsushi/koject/tree/main/docs/blog/2023-03-25-test-test-test.mdx",source:"@site/blog/2023-03-25-test-test-test.mdx",title:"Koject v1.3.0 - Writing Test Code with DI Containers",description:"In continuous software development, test code plays an important role.",date:"2023-03-25T00:00:00.000Z",formattedDate:"March 25, 2023",tags:[],readingTime:4.855,hasTruncateMarker:!0,authors:[{name:"Mori Atsushi",title:"Koject owner",url:"https://github.com/Mori-Atsushi",imageURL:"https://github.com/mori-atsushi.png",key:"atsushi"}],frontMatter:{slug:"test-test-test",title:"Koject v1.3.0 - Writing Test Code with DI Containers",authors:"atsushi",image:"/blog/2023-03-25/ogp.png"},nextItem:{title:"Koject v1.2.0 - What are Android components?",permalink:"/koject/blog/android-components"}},m={authorsImageUrls:[void 0]},s=[],d={toc:s},l="wrapper";function h(e){let{components:t,...i}=e;return(0,n.kt)(l,(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(8323).Z,width:"2400",height:"840"})),(0,n.kt)("p",null,"In continuous software development, test code plays an important role.\nKoject v1.3.0 added support for testing.\nThis article introduces the reasons for using a DI container in testing, how to write test code using Koject, and another new feature added in Koject v1.3.0."))}h.isMDXComponent=!0},8323:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/banner-247d1e22c584e691abcf151e30ceb846.png"}}]);