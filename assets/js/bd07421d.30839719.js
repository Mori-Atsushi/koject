"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[674],{2925:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"first-stable-release","metadata":{"permalink":"/koject/blog/jp/first-stable-release","editUrl":"https://github.com/Mori-Atsushi/koject/tree/main/docs/blog-jp/2023-03-04-first-stable-release.md","source":"@site/blog-jp/2023-03-04-first-stable-release.md","title":"Koject 1.0.0\u3092\u516c\u958b\u3057\u307e\u3057\u305f\uff01","description":"\u3053\u306e\u5ea6\u3001Kotlin Multiplatform\u5411\u3051\u306e\u65b0\u3057\u3044DI\u30b3\u30f3\u30c6\u30ca\u30e9\u30a4\u30d6\u30e9\u30ea\u300cKoject\u300d\u3092\u516c\u958b\u3057\u307e\u3057\u305f\u3002","date":"2023-03-04T00:00:00.000Z","formattedDate":"March 4, 2023","tags":[],"hasTruncateMarker":true,"authors":[{"name":"Mori Atsushi","title":"Koject owner","url":"https://github.com/Mori-Atsushi","imageURL":"https://github.com/mori-atsushi.png","key":"atsushi"}],"frontMatter":{"slug":"first-stable-release","title":"Koject 1.0.0\u3092\u516c\u958b\u3057\u307e\u3057\u305f\uff01","authors":"atsushi","image":"/blog/2023-03-04/ogp.png"}},"content":"![](/blog/2023-03-04/banner.png)\\n\\n\u3053\u306e\u5ea6\u3001Kotlin Multiplatform\u5411\u3051\u306e\u65b0\u3057\u3044DI\u30b3\u30f3\u30c6\u30ca\u30e9\u30a4\u30d6\u30e9\u30ea\u300c**Koject**\u300d\u3092\u516c\u958b\u3057\u307e\u3057\u305f\u3002\\n\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001DI\u30b3\u30f3\u30c6\u30ca\u306e\u5f79\u5272\u3068\u300c**Koject**\u300d\u306e\u7279\u5fb4\u306b\u3064\u3044\u3066\u7d39\u4ecb\u3057\u307e\u3059\u3002\\n\\n\x3c!--truncate--\x3e\\n\\n[**Read in English \u2192**](/blog/first-stable-release)\\n\\n## DI\u30b3\u30f3\u30c6\u30ca\u306e\u5f79\u5272\\nDI\u30b3\u30f3\u30c6\u30ca\uff08Dependency Injection Container\uff09\u306e\u5f79\u5272\u3092\u7406\u89e3\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u307e\u305aDependency Injection\u306b\u3064\u3044\u3066\u77e5\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\\nDependency Injection\u306f\u3001\u30af\u30e9\u30b9\u9593\u306e\u4f9d\u5b58\u95a2\u4fc2\u3092\u5916\u90e8\u304b\u3089\u6ce8\u5165\u3059\u308b\u3053\u3068\u3067\u3001**\u30c6\u30b9\u30c8\u306e\u5bb9\u6613\u6027\u3084\u30b3\u30fc\u30c9\u306e\u6c4e\u7528\u6027\u3092\u5411\u4e0a\u3055\u305b\u308b**\u624b\u6cd5\u3067\u3059\u3002\\n\\n### Dependency Injection\u3067\u30c6\u30b9\u30c8\u5bb9\u6613\u6027\u3092\u4e0a\u3052\u308b\\n\u52d5\u753b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3092\u884c\u3046\u30b9\u30de\u30db\u30a2\u30d7\u30ea\u3092\u4f8b\u306b\u8003\u3048\u3066\u307f\u307e\u3059\u3002\\n\u30ed\u30fc\u30ab\u30eb\u306b\u3042\u308b\u52d5\u753b\u3092\u9078\u629e\u3057\u3001\u30b5\u30fc\u30d0\u30fc\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u304c\u5b8c\u4e86\u3057\u305f\u5f8c\u3001OS\u306e\u901a\u77e5\u3092\u8868\u793a\u3057\u307e\u3059\u3002\\n\\n\u52d5\u753b\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b`VideoUploader`\u30af\u30e9\u30b9\u3068\u901a\u77e5\u3092\u8868\u793a\u3059\u308b`NotificationManager`\u30af\u30e9\u30b9\u3092\u4f7f\u3063\u3066\u3001`VideoUploadService`\u3092\u5b9f\u88c5\u3057\u3066\u307f\u307e\u3059\u3002\\n\\n```kotlin\\nclass VideoUploadService {\\n    fun upload(video: Video) {\\n        val result = VideoUploader().upload(video)\\n        if (result.isSucceeded) {\\n            NotificationManager()\\n                .showNotification(\\"\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u5b8c\u4e86\\")\\n        } else {\\n            NotificationManager()\\n                .showNotification(\\"\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u5931\u6557\\")\\n        }\\n    }\\n}\\n```\\n\\n`VideoUploadService`\u306e\u4e2d\u3067`VideoUploader`\u3068 `NotificationManager`\u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u3053\u3068\u3092\u3001`VideoUploadService`\u304c`VideoUploader`\u3068`NotificationManager` \u306b\u76f4\u63a5\u4f9d\u5b58\u3057\u3066\u3044\u308b\u3068\u8a00\u3044\u307e\u3059\u3002\\n\\n`VideoUploader`\u306f\u30b5\u30fc\u30d0\u30fc\u3068\u901a\u4fe1\u3057\u3001`NotificationManager`\u306fOS\u306e\u901a\u77e5\u3092\u8868\u793a\u3057\u307e\u3059\u3002\\n\u3053\u306e\u3088\u3046\u306a\u5916\u90e8\u3068\u30a2\u30af\u30bb\u30b9\u3059\u308b\u30af\u30e9\u30b9\u306b\u76f4\u63a5\u4f9d\u5b58\u3059\u308b\u3068\u3001\u30c6\u30b9\u30c8\u6642\u306b\u3082\u5916\u90e8\u3068\u306e\u901a\u4fe1\u304c\u767a\u751f\u3057\u3001\u4e0d\u5b89\u5b9a\u306b\u306a\u3063\u305f\u308a\u6642\u9593\u304c\u304b\u304b\u308b\u3068\u3044\u3046\u554f\u984c\u304c\u751f\u3058\u307e\u3059\u3002\\n\\nDependency Injection\u306f\u3001\u3053\u3046\u3044\u3063\u305f\u30af\u30e9\u30b9\u3092**\u5916\u5074\u304b\u3089\u6e21\u3057\u3066\u3042\u3052\u308b**\u3068\u3044\u3046\u8003\u3048\u65b9\u3067\u3059\u3002\\n\u5148\u7a0b\u306e\u4f8b\u3092Dependency Injection\u3092\u4f7f\u3063\u3066\u66f8\u304d\u76f4\u3059\u3068\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002\\n\\n```kotlin\\nclass VideoUploadService(\\n    private val videoUploader: VideoUpaloder,\\n    private val notificationManager: NotificationManager,\\n) {\\n    fun upload(video: Video) {\\n        val result = videoUploader.upload(video)\\n        if (result.isSucceeded) {\\n            notificationManager\\n                .showNotification(\\"\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u5b8c\u4e86\\")\\n        } else {\\n            notificationManager\\n                .showNotification(\\"\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u5931\u6557\\")\\n        }\\n    }\\n}\\n```\\n\\n\u5fc5\u8981\u306a\u30af\u30e9\u30b9\u306f\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u3067\u6e21\u3059\u3088\u3046\u306b\u3057\u307e\u3057\u305f\u3002\\n\u3053\u308c\u3092**\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf \u30a4\u30f3\u30b8\u30a7\u30af\u30b7\u30e7\u30f3**\u3068\u8a00\u3044\u307e\u3059\u3002\\n\\n\u3053\u3046\u3059\u308b\u3053\u3068\u3067\u3001`VideoUpaloder`\u3084`NotificationManager`\u3092\u5916\u90e8\u3068\u30a2\u30af\u30bb\u30b9\u304c\u767a\u751f\u3057\u306a\u3044\u3088\u3046\u306a\u507d\u7269\u306b\u5dee\u3057\u66ff\u3048\u3066\u30c6\u30b9\u30c8\u3092\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u3002\\n\\n```kotlin\\nclass VideoUploadServiceTest {\\n    private val videoUploader = \\n        FakeVideoUploader()\\n    private val notificationManager = \\n        FakeNotificationManager()\\n    private val videoUploadService =\\n        VideoUploadService(videoUploader, notificationManager)\\n\\n    @Test\\n    fun test() {\\n        val video = Video(\\"test.mp4\\")\\n        videoUploadService.upload(video)\\n        /* ... */\\n    }\\n}\\n```\\n\\n\u307e\u305f\u3001Dependency Injection\u306e\u8003\u3048\u65b9\u306b\u5f93\u3046\u3053\u3068\u3067\u3001\u5404\u30af\u30e9\u30b9\u306e\u95a2\u4fc2\u304c\u660e\u78ba\u306b\u306a\u308a\u307e\u3059\u3002\\n\u4eca\u56de\u3082`VideoUploadService`\u304c`VideoUpaloder`\u3068`NotificationManager`\u306b\u95a2\u9023\u3057\u3066\u3044\u308b\u3053\u3068\u304c\u3001\u30b3\u30fc\u30c9\u3092\u5168\u3066\u8aad\u307e\u306a\u304f\u3066\u3082\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u304b\u3089\u7406\u89e3\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\\n\\n### Dependency Injection\u3067\u6c4e\u7528\u6027\u3092\u4e0a\u3052\u308b\\n\\n\u6c4e\u7528\u6027\u306e\u89b3\u70b9\u304b\u3089\u3082Dependency Injection\u306f\u6709\u52b9\u3067\u3059\u3002\\n\\n\u5148\u7a0b\u306e\u52d5\u753b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092Android/iOS\u306e\u4e21\u65b9\u3067\u5b9f\u88c5\u3059\u308b\u969b\u3001\u901a\u77e5\u306e\u8868\u793a\u65b9\u6cd5\u306fAndroid\u3068iOS\u3067\u7570\u306a\u308a\u307e\u3059\u3002\\n\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u3067 `NotificationManager` \u3092\u6e21\u305b\u308b\u3088\u3046\u306b\u3057\u305f\u5834\u5408\u3001Android\u5411\u3051\u3068iOS\u5411\u3051\u3067 `NotificationManager` \u3060\u3051\u5dee\u3057\u66ff\u3048\u308c\u3070\u3088\u304f\u3001`VideoUploadService`\u306f\u5171\u901a\u3067\u4f7f\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\\n\\n```kotlin\\n// for Android\\nval videoUploadService = VideoUploadService(\\n    videoUpaloder = VideoUpaloder(),\\n    notificationManager = AndroidNotificationManager(),\\n)\\n```\\n\\n```kotlin\\n// for iOS\\nval videoUploadService = VideoUploadService(\\n    videoUpaloder = VideoUpaloder(),\\n    notificationManager = IOSNotificationManager(),\\n)\\n```\\n\\n\u3053\u306e\u3088\u3046\u306b\u3001Dependency Injection\u306e\u30d1\u30bf\u30fc\u30f3\u306b\u5f93\u3046\u3053\u3068\u3067\u3001\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3084\u5229\u7528\u30b1\u30fc\u30b9\u306b\u5408\u308f\u305b\u3066**\u540c\u3058\u30b3\u30fc\u30c9\u3092\u6c4e\u7528\u7684\u306b\u4f7f\u3046\u3053\u3068\u304c\u3067\u304d\u308b**\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002\\n\\n### DI\u30b3\u30f3\u30c6\u30ca\u3067\u4f9d\u5b58\u89e3\u6c7a\u3092\u307e\u3068\u3081\u308b\\n\u3053\u308c\u307e\u3067\u7d39\u4ecb\u3057\u3066\u304d\u305f\u3068\u304a\u308a\u3001Dependency Injection\u306b\u306f\u8907\u6570\u306e\u30e1\u30ea\u30c3\u30c8\u304c\u3042\u308a\u307e\u3059\u3002\\n\u3057\u304b\u3057\u3001\u5404\u30af\u30e9\u30b9\u306f\u5229\u7528\u6642\u306b\u5168\u3066\u306e\u4f9d\u5b58\u95a2\u4fc2\u3092\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u3001\u4f9d\u5b58\u95a2\u4fc2\u304c\u5897\u3048\u3066\u304f\u308b\u3068\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u751f\u6210\u306b\u82e6\u52b4\u3057\u307e\u3059\u3002\\n\\n```kotlin\\nval storageApi = StorageApi(Dispatchers.IO)\\nval videoUpaloder = VideoUpaloder(storageApi)\\nval notificationManager = NotificationManager(context)\\nval videoUploadService = VideoUploadService(\\n    videoUpaloder,\\n    notificationManager,\\n)\\n```\\n\\n\u3053\u308c\u3092\u89e3\u6c7a\u3057\u3066\u304f\u308c\u308b\u306e\u304cDI\u30b3\u30f3\u30c6\u30ca\u3067\u3059\u3002\\nDI\u30b3\u30f3\u30c6\u30ca\u306f\u5fc5\u8981\u306a\u4f9d\u5b58\u95a2\u4fc2\u3092\u81ea\u52d5\u7684\u306b\u6574\u7406\u3057\u3001\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u751f\u6210\u3057\u3066\u304f\u308c\u308b\u6a5f\u80fd\u3092\u6301\u3063\u3066\u3044\u307e\u3059\u3002\\n\\nKoject\u3067\u306f\u3001\u30af\u30e9\u30b9\u5ba3\u8a00\u6642\u306b`@Provides`\u30a2\u30ce\u30c6\u30fc\u30b7\u30e7\u30f3\u3092\u3064\u3051\u308b\u3053\u3068\u3067DI\u30b3\u30f3\u30c6\u30ca\u306b\u767b\u9332\u3067\u304d\u3001`inject()` \u95a2\u6570\u3092\u4f7f\u3063\u3066\u5fc5\u8981\u306a\u4f9d\u5b58\u95a2\u4fc2\u3092\u89e3\u6c7a\u3057\u305f\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002\\n\\n```kotlin\\n@Provides\\nclass VideoUpaloder\\n\\n@Provides\\nclass NotificationManager\\n\\n@Provides\\nclass VideoUploadService(\\n    private val videoUploader: VideoUpaloder,\\n    private val notificationManager: NotificationManager,\\n) {\\n    /* ... */\\n}\\n```\\n\\n```kotlin\\nKoject.start()\\n\\nval videoUploadService = inject<VideoUploadService>()\\n```\\n\\nKoject\u3092\u4f7f\u3046\u3053\u3068\u3067\u3001\u8907\u96d1\u306a\u30b3\u30fc\u30c9\u3092\u66f8\u304f\u3053\u3068\u306a\u304f\u3001Dependency Injection\u306e\u6069\u6075\u3092\u53d7\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\\n\\n## Koject\u306e\u7279\u5fb4\\nKoject\u306fKotlin Multiplatform\u5411\u3051\u306e\u65b0\u3057\u3044DI\u30b3\u30f3\u30c6\u30ca\u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u3059\u3002\\n\u4ee5\u4e0b\u306b\u4e3b\u306a\u7279\u5fb4\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002\\n\\n### \u30a2\u30ce\u30c6\u30fc\u30b7\u30e7\u30f3\u3067\u7c21\u5358\u306b\u914d\u5e03\\nKoject\u306f\u8907\u6570\u306e\u30a2\u30ce\u30c6\u30fc\u30b7\u30e7\u30f3\u3092\u4f7f\u3063\u3066\u7c21\u5358\u306b\u5229\u7528\u3067\u304d\u307e\u3059\u3002\\n\\n\u30af\u30e9\u30b9\u5ba3\u8a00\u6642\u306b `@Provides` \u30a2\u30ce\u30c6\u30fc\u30b7\u30e7\u30f3\u3092\u3064\u3051\u3001DI\u30b3\u30f3\u30c6\u30ca\u306b\u767b\u9332\u3057\u307e\u3059\u3002\\n\\n```kotlin\\n@Provides\\nclass Repository\\n\\n@Provides\\nclass Controller(\\n    private val repository: Repository\\n)\\n```\\n\\n\u767b\u9332\u3057\u305f\u30af\u30e9\u30b9\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306f\u3001`Koject.start()`\u3092\u547c\u3073\u51fa\u3057\u305f\u5f8c\u3001`inject()`\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u7528\u3057\u3066\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002\\n\\n```kotlin\\nfun main() {\\n    Koject.start()\\n\\n    val controller = inject<Controller>()\\n}\\n```\\n\\n\u3053\u306e\u5834\u5408\u3001`inject<Controller>()`\u3092\u547c\u3073\u51fa\u3059\u3053\u3068\u3067\u3001Koject\u304c`Controller`\u306e\u30d7\u30e9\u30a4\u30de\u30ea\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u3068`@Provides`\u30a2\u30ce\u30c6\u30fc\u30b7\u30e7\u30f3\u304c\u3064\u3044\u305f\u4f9d\u5b58\u95a2\u4fc2\u3092\u4f7f\u7528\u3057\u3066\u3001`Controller`\u30af\u30e9\u30b9\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3057\u3066\u304f\u308c\u307e\u3059\u3002\\n\\n#### Singleton\u3067\u914d\u5e03\u3059\u308b\\n\\n`@Provids`\u30a2\u30ce\u30c6\u30fc\u30b7\u30e7\u30f3\u3068\u5408\u308f\u305b\u3066`@Singleton`\u30a2\u30ce\u30c6\u30fc\u30b7\u30e7\u30f3\u3092\u3064\u3051\u308b\u3053\u3068\u3067\u3001\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u4f5c\u6210\u3092\u4e00\u5ea6\u306e\u307f\u306b\u9650\u5b9a\u3057\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5168\u4f53\u3067\u518d\u5229\u7528\u3059\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002\\n\u3053\u308c\u306f\u3001\u4f5c\u6210\u306b\u30b3\u30b9\u30c8\u304c\u304b\u304b\u308b\u4f9d\u5b58\u95a2\u4fc2\u3084\u3001\u8907\u6570\u306e\u30af\u30e9\u30b9\u3067\u5171\u6709\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u4f9d\u5b58\u95a2\u4fc2\u306b\u7279\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002\\n\\n```kotlin\\n@Singleton\\n@Provides\\nclass Api\\n\\n@Singleton\\n@Provids\\nclass Repository(\\n    private val api: Api,\\n)\\n```\\n\\n\u3053\u306e\u5834\u5408\u3001Koject\u306f`Api`\u30af\u30e9\u30b9\u3068`Repository`\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u305d\u308c\u305e\u308c1\u3064\u3060\u3051\u4f5c\u6210\u3057\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5168\u4f53\u3067\u305d\u308c\u3089\u3092\u518d\u5229\u7528\u3059\u308b\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002\\n\\n#### \u30b9\u30fc\u30d1\u30fc\u30bf\u30a4\u30d7\u3068\u3057\u3066\u914d\u5e03\u3059\u308b\\nDI\u30d1\u30bf\u30fc\u30f3\u3092\u5b9f\u8df5\u3059\u308b\u969b\u3001\u3057\u3070\u3057\u3070\u5b9f\u88c5\u30af\u30e9\u30b9\u3092\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u7b49\u306e\u30b9\u30fc\u30d1\u30fc\u30af\u30e9\u30b9\u3068\u3057\u3066\u4f7f\u7528\u3057\u307e\u3059\u3002\\nKoject\u3067\u306f\u3001`@Binds` \u30a2\u30ce\u30c6\u30fc\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u7c21\u5358\u306b\u30b9\u30fc\u30d1\u30fc\u30bf\u30a4\u30d7\u3068\u3057\u3066\u914d\u5e03\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\\n\\n\u4ee5\u4e0b\u306f\u3001`Repository`\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u306e\u5b9f\u88c5\u30af\u30e9\u30b9\u3067\u3042\u308b`RepositoryImpl`\u3092\u3001`@Binds`\u30a2\u30ce\u30c6\u30fc\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066`Repository`\u3068\u3057\u3066\u63d0\u4f9b\u3059\u308b\u4f8b\u3067\u3059\u3002\\n\\n```kotlin\\n@Binds\\n@Provides\\nclass RepositoryImpl: Repository\\n\\ninterface Repository\\n```\\n\\n#### \u8a73\u7d30\u306a\u5229\u7528\u65b9\u6cd5\\n\\n\u3088\u308a\u8a73\u7d30\u306a\u5229\u7528\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306f[\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8](/docs/usage)\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002\\n\\n### Kotlin Multiplatform\u306b\u5bfe\u5fdc\\nKoject\u306fKotlin Multiplatform\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u307e\u3059\u3002\\n\u4f9d\u5b58\u30b0\u30e9\u30d5\u306f\u305d\u308c\u305e\u308c\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u6bce\u306b\u4f5c\u6210\u3055\u308c\u3001\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306b\u3088\u3063\u3066\u30af\u30e9\u30b9\u3092\u5dee\u3057\u66ff\u3048\u308b\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u3002\\n\\n\u5404\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306b\u5408\u308f\u305b\u305f[\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u65b9\u6cd5](/docs/setup)\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002\\n\\n### \u30b3\u30f3\u30d1\u30a4\u30eb\u6642\u306e\u4f9d\u5b58\u30b0\u30e9\u30d5\u306e\u78ba\u8a8d\\nKoject\u306f[KSP](https://github.com/google/ksp)\u3092\u4f7f\u3063\u305f\u30b3\u30fc\u30c9\u751f\u6210\u306b\u3088\u3063\u3066\u52d5\u4f5c\u3057\u307e\u3059\u3002\\n\u4f9d\u5b58\u30b0\u30e9\u30d5\u306f\u30b3\u30f3\u30d1\u30a4\u30eb\u6642\u306b\u4f5c\u6210\u3055\u308c\u3001\u8db3\u308a\u306a\u3044\u4f9d\u5b58\u95a2\u4fc2\u3084\u91cd\u8907\u3057\u305f\u914d\u5e03\u304c\u3042\u3063\u305f\u5834\u5408\u306f\u30b3\u30f3\u30d1\u30a4\u30eb\u6642\u306b\u30a8\u30e9\u30fc\u306b\u306a\u308a\u307e\u3059\u3002\\n\u30b3\u30f3\u30d1\u30a4\u30eb\u6642\u306b\u78ba\u8a8d\u3067\u304d\u308b\u3053\u3068\u3067\u3001\u5b9f\u884c\u6642\u306e\u4e88\u671f\u305b\u306c\u30a8\u30e9\u30fc\u3092\u9632\u3050\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\\n\\n```kotlin\\n// @Provides\u306a\u3057\\nclass Repository\\n\\n@Provides\\nclass Controller(\\n    private val repository: Repository\\n)\\n```\\n\\n![](/blog/2023-03-04/compile-error.png)\\n\\n\u73fe\u5728\u3001Koject\u306f`inject()`\u3067\u547c\u3073\u51fa\u3057\u3066\u3044\u308b\u30af\u30e9\u30b9\u304c\u914d\u5e03\u3055\u308c\u3066\u3044\u308b\u304b\u306f\u78ba\u8a8d\u3057\u3066\u304a\u3089\u305a\u3001\u4ee5\u4e0b\u306f\u5b9f\u884c\u6642\u30a8\u30e9\u30fc\u306b\u306a\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\\n\\n```kotlin\\n// @Provides\u306a\u3057\\nclass SampleClass\\n\\nfun main() {\\n    Koject.start()\\n\\n    val controller = inject<SampleClass>() // NotProvidedException!!\\n}\\n```\\n\\n## \u4eca\u5f8c\u306e\u4e88\u5b9a\\nKoject\u306f\u307e\u3060\u8a95\u751f\u3057\u305f\u3070\u304b\u308a\u3067\u3059\u3002\\n\u3088\u308a\u4fbf\u5229\u306a\u30e9\u30a4\u30d6\u30e9\u30ea\u306b\u3059\u308b\u305f\u3081\u3001\u4eca\u5f8c\u306f\u4ee5\u4e0b\u306e\u30b5\u30dd\u30fc\u30c8\u5f37\u5316\u3092\u4e88\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002\\n\\n* Android\u5411\u3051\u306e\u30b5\u30dd\u30fc\u30c8\u5f37\u5316 [#25](https://github.com/Mori-Atsushi/koject/issues/25) [#52](https://github.com/Mori-Atsushi/koject/issues/52)\\n* \u30c6\u30b9\u30c8\u6642\u306e\u30b5\u30dd\u30fc\u30c8\u5f37\u5316 [#85](https://github.com/Mori-Atsushi/koject/issues/85)\\n\\n\u305d\u306e\u4ed6\u306b\u3082\u6c17\u3065\u3044\u305f\u3053\u3068\u304c\u3042\u308c\u3070\u3001[Issue](https://github.com/Mori-Atsushi/koject/issues) \u304b\u3089\u304a\u6c17\u8efd\u306b\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u304f\u3060\u3055\u3044\u3002"}]}')}}]);