## uni-ai：让你的App快速接入AI

> 不管你的App是原生开发，还是基于某个跨端框架，都可以试试uni-ai。
> uni-ai 让你的 App 1 天接入 DeepSeek等AI模型，2 天上线全平台原生 AI 聊天功能！

在 AI时代，每个App都在思考AI化。

内置AI聊天（AI问答）成为众多App的基本需求。但当你准备动手打造一个像 ChatGPT、DeepSeek 那样流畅的AI客户端时，很快就会发现，技术挑战层出不穷，比如：webview 集成AI聊天虽然快捷，但体验相比原生，着实有差距。
 
如果不基于webview，采用原生开发，那么需要在Android、iOS、鸿蒙等平台解决如下问题：
  
1. 流式网络请求：大模型流式返回的token，需要在手机端流式接收。
2. 缺少全平台效果一致的markdown解析器
3. markdown流式解析复杂：传统应用场景下 markdown 解析都是全文解析。而随着 ai 的发展，流式回复的内容越来越长，需要持续跟踪上下文状态，判断当前内容是否在代码块/表格/列表等元素中，解析速度必须跟上流式传输速度，否则会明显卡顿；
4. 全编程语言代码高亮：当AI回复编程语言时，几十种编程语言的代码如何高亮？当代码内容逐token更新时，如何局部重绘避免整体闪烁？
5. table的解析渲染：table对原生历来就是挑战。虽然大模型返回的表格不会特别大。但仍然要处理动态计算表格宽度，根据响应内容调整列宽，还需处理emoji/中文混合排版等情况。
6. 流式网络、流式markdown解析、流式排版，全程流式，且不能影响用户的UI操作，比如流式期间滚动操作不能掉帧。
7. 开发量大，尤其是鸿蒙平台缺少成熟库。

以上问题，在每个平台都很难，如果要全平台支持，就更难。如果在全平台都保持高性能，那难度和工作量真是让人却步。
 
所以，DCloud提供了 uni-ai x。上述问题全部解决且开源免费。

### 什么是uni-ai x？

  uni-ai x是一个开源、免费、全平台支持的原生 AI 聊天套件，基于DCloud 的新一代跨平台原生框架uni-app x开发，故Android、iOS、鸿蒙、Web、微信小程序全支持，一套代码、多端运行。

uni-ai在Web平台支持响应式布局：

 
在下载运行源码前，您可以安装apk到手机上，亲身体验下它的效果（demo不能连接计费模型）

uni-ai x成功解决上述痛点：

全平台一致的markdown流式渲染器
纯原生的体验而非webview
高性能的流式网络、流式markdown解析、流式排版，不卡滚动等用户交互。
动态响应宽度的原生表格
几十种编程语言高亮
开源、免费

除上述痛点外，uni-ai x还有更多完善的特性：

多屏适配与主题适配：适配 PC 浏览器宽屏和移动设备，适配pad、折叠屏，并提供浅色和暗黑两种主题模式
消息与会话管理。支持多轮对话和历史会话管理，具备会话切换、删除、自动创建等功能，提供完整的 AI 聊天体验
内置了uniCloud的AI能力，可以免开发直接接入deepseek、阿里通义、minimax、GPT-4、讯飞ifly。当然也可以不使用uniCloud，切换到自己的AI服务器。
uniCloud的AI能力，支持客户端安全直连大模型，大幅减少服务器压力和成本。否则在流式响应期间，服务器需要持续消耗。
内置了uni-id，自带账户体系。当然也可以不使用uni-id，接入已有的账户体系。
可以把uni-ai x当做独立的AI客户端，它具备DeepSeek客户端的极高仿真度；也可以把uni-ai x当做一个SDK，接入到已有的App中，成为一个AI聊天模块。不管是原生App还是其他跨平台框架开发的App，都可以以原生SDK接入的方式接入uni-ai x。uni-app x开发的App也可以接入。但uni-app开发的App需接入基于webview的uni-ai，而不是本次推出的uni-ai x。
开源可定制：前后端代码全开源，便于二次开发，适合各种 AI 应用场景

 uni-ai x全部代码开源，源码托管地址：gitcode.com、
github.com

### 为什么 uni-ai x 能做到这些？

uni-ai x的底层基于uni-app x原生跨端框架、uniCloud云开发框架。使用uni-ai x，需要了解这些技术。

uni-app x 是 DCloud 的新一代原生跨平台框架，开发者使用UTS语言编写App代码，UTS是类似TS的语言，但它在原生平台会编译为原生语言。UTS语言在不同平台会编译为不同目标语言：

- Web/小程序平台：编译为JavaScript
- Android平台：编译为Kotlin
- iOS平台：编译为Swift
- 鸿蒙平台：编译为ArkTS

uni-ai x的客户端部分，正是基于uni-app x，所以编写一套代码，就可以全平台覆盖。更多uni-app x的介绍，详见：uni-app-x

uni-ai x里还集成了uniCloud云开发，从客户端到服务器，提供了整套源码。uniCloud是基于js的serverless云服务。除了基本的数据库、云函数、云存储，还提供了AI能力集成、uni-id账户体系等。更多uniCloud的介绍，详见：uniCloud
当然，uniCloud是可选的，您也可以不使用uniCloud，改用自己的服务器。

### uni-ai x 如何集成？

如果你的App本来就是基于uni-app x开发的，那集成uni-ai x非常简单，只需从DCloud插件市场下载uni-ai x插件到自己的uni-app x项目工程即可，uni-ai x是一个标准的uni_modules插件。
如果你的App是基于原生开发，或者使用的是业内其它跨端框架，那么集成uni-ai x，主要有4步：
(1) 在uni-ai x 插件页面，点击“使用 HBuilderX 导入示例项目”
(2) 如使用uniCloud，需根据文档注册并配置相关的AI服务 key
(3) 在HBuilderX中导出应用原生资源，生成一批kotlin/swift/arkTS/js代码及相关图片字体等附件资源
(4) 在你的原生工程中，引入uni-app x 原生SDK，合并入上一步导出的应用原生资源，整体运行编译。
 
参考资料：
- uni-ai x插件地址为：[DCloud 插件市场](https://ext.dcloud.net.cn/plugin?name=uni-ai-x)
- uni-app x 原生SDK集成及下载参考：[uni-app x 原生SDK](https://doc.dcloud.net.cn/uni-app-x/native/)

### App如何AI化？

您可能早就想在App中引入AI能力，但又不知道如何把AI与App现有业务结合。下面列举部分常见的AI使用场景。

1. 餐饮推荐：

用户：我想请同事吃饭，2人是回族；
AI：预算多少？
用户：人均150元
AI：好的，如下是给你推荐的餐馆/菜品。。。

2. 购物助手：

```sh
用户：我想买一个华为Mate 70 Pro，黑色；
AI：内存要求多大？
用户：512G
AI：对到货时间有要求吗？
用户：越快越好
AI：如下是支持京东物流、且符合您需求的商品清单
```

3. CRM培训：

销售新人：客户抱怨“太贵了”，该怎么回复？
AI教练：您对比过哪些同类产品呢？

4. 生活工具

用户：明天出差深圳，需要带什么东西？
AI：几点到达深圳？
用户：下午3点。
AI：明日深圳气温28℃→推荐透气衣物；明日下午3点在深圳机场附近有暴雨预警→提醒带伞；

5. 旅行助手

用户：计划暑假带孩子到新疆玩，帮我做个攻略。
AI：你想自驾还是报团？
用户：自驾
AI：预计几天时间？
用户：5天
AI：其它问题，多轮问答
 

 
还有很多场景，像客服、教育、医疗等，都需要AI基于多轮对话获取完整信息，从而给用户提供更精准的服务。
你的App是什么业务场景，你是如何使用AI的？也欢迎在评论区留言参与讨论。
 
欢迎大家使用uni-ai x，更欢迎大家 star、fork、提issue，共同完善这个开源项目！
开源地址：[https://github.com/dcloudio/uni-ai-x](https://github.com/dcloudio/uni-ai-x)

技术交流群：更多问题欢迎加入uni-ai官方交流群。此群非微信群，而是DCloud的uni-im群。

手机端请使用 DCloud App扫码，或点击链接：uni-im 交流群

