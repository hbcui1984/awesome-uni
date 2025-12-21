# uni-app，你的最佳vibe coding搭子

AI写代码的能力，在飞速发展。

上半年，还感慨于AI在IDE里猜你要写的代码越来越准，下半年突然发现没必要让AI猜了，AI Chat已经可以vibe coding了。

只要把需求给AI写清楚，好的AI已经可以搞定常规业务代码了，尤其是web平台。一些库的翻译、胶水代码生成，也特别的方便。

*   略懂技术的产品经理和运营，现在可以完成简单应用了。
*   只懂1门技术的工程师，现在可以变成全栈了。
    
当然在vibe coding这个新时代，开发者们有了新的痛点，需要新的解决方案。

## 1、虽然90%可以vibe，剩下的10%会卡你商用
    
vibe coding就是你无需关注代码写的具体是什么，你写需求指挥AI就好了。
    
在做原型时，这几乎没有问题了。
    
但如果真的要商用上线一个应用，你会在和AI交锋数轮仍不达预期后，明白一个道理，还是得能看懂AI写的代码。
    
这时技术栈的重要性就体现出来了。
    
![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/WgZOZA8d0b5YdqLX/img/54abafd8-b6e3-4483-8a53-0c0d9dccf5f9.png)
    
如果当初开始vibe coding时，不指定技术栈，AI高概率会给你生成基于react框架的代码，或者做App的话使用各平台的原生编程语言。
    
因为在美国那边，最流行的框架确实是react，而不是易用性更高的vue。
    
但学习react需要更高的门槛，招聘相应的维护工程师也更昂贵。在中国更广泛的是vue。
    
如果在做app时，ai给你生成了各个平台的原生语言，那学习和维护更是噩梦。
    
所以，uni-app的易用性、多端1套代码的优势就非常明显了。
    
你只需要了解最简单的编程语言js、最简单的响应式框架vue，就能搞定那AI搞不定的10%。
    
![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/WgZOZA8d0b5YdqLX/img/d0cddb8f-e057-4f63-bc2a-a9d36db4aa36.png)
    
## 2、虽然代码可以让AI生成，但服务器部署运维会卡你商用
    
当你兴奋地用AI写好代码后，突然发现自己不懂服务器。怎么购买？怎么部署？怎么运维？数据量上来后怎么扩容？被攻击时怎么防护？
    
![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/WgZOZA8d0b5YdqLX/img/ee088e57-50e1-489a-889e-332fee8d3609.png)
    
其实uniCloud就是专门解决这类问题的。uniCloud是一个基于js的serverless云服务，让云资源像用电一样方便，它自动处理伸缩扩容、自动处理安全防护。它是无可争议的最简单的云资源使用方案。
    
但是如果在开始vibe coding时没选好技术栈，AI写下了php、java等服务器代码，那你在学习掌握和运维方面都会头疼。
    
![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/WgZOZA8d0b5YdqLX/img/6110c438-240a-4043-a0e6-b06e51c45074.png)
    
而uni-app 和 uniCloud，互相搭配效果更佳。一门js语言，解决全部客户端，以及服务器。
    
所以vibe coding的时候，一定要记得先告诉AI：客户端框架选用uni-app，服务器框架选用uniCloud。
    
## 3、鸿蒙App的开发好伴侣
    
鸿蒙App使用ArkTS开发，而国外优秀的AI Coding工具，都不太擅长鸿蒙开发。
    
但每个AI，都擅长uni-app开发。而uni-app可以一套代码直接编译到鸿蒙。
    
![image](https://static.dingtalk.com/media/lQDPM5x4m0G3bzPNA1HNBpiwj7YEFSIBZxoJIAvbOpk0AA_1688_849.jpg)
    
这导致一个有趣的现象，uni-app成为了鸿蒙的AI开发最佳伴侣。实际上，鸿蒙应用商店中，uni-app已经成为贡献应用数量最多的跨平台开发框架。
    
## 4、全流程AI自动化
    
AI写好代码，能自动运行、提取手机日志、查报错、然后自修复吗？

AI能自动写自动化测试脚本并执行吗？

这些高自动化场景，uni-app 已通过丰富的 MCP 协议与 CLI 命令实现 — AI 可直接调用，全流程无需手动介入。

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/WgZOZA8d0b5YdqLX/img/90783c99-315c-41f7-a565-50ecadc4fc15.png)

过去，大量开发者陷入低效开发循环：频繁在IDE、浏览器控制台、AI工具间切换，重复执行“改代码→查日志→粘贴至AI”的机械操作，既枯燥又极度耗时！

如今，HBuilderX CLI 彻底终结这一低效模式：日志自动提取和分析，AI实时掌握项目全量上下文，开发迭代效率直接翻倍！

尤其是在uts开发中，由于强类型约束造成很多历史代码无法通过编译。

有了全自动，就可以让AI来把传统的js/ts 代码转换为uts代码了。

#### 自动分析日志、自动修复报错

1.  在HBuilderX中新建uni-app项目 
2.  将项目先运行起来，比如运行到浏览器、小程序或App
3.  在项目根目录启动AI交互终端，确保AI可获取项目全量上下文；
4.  向AI发送指令，完成Web端功能开发与日志校验，例如：
    

```text
请在 /pages/index/index.vue 实现商品列表功能，
完成后执行HBuilderX CLI命令获取日志，
`C:\hbuilderx\hx_alpha\cli.exe logcat web --browser Chrome --project yourprojectname`。
若检测到日志报错，请根据报错自动修复，
修复后重新读取日志，循环迭代优化直至没有报错。
```

以上cli命令的用法详见教程：[https://hx.dcloud.net.cn/cli/logcat-web](https://hx.dcloud.net.cn/cli/logcat-web)

实际开发中，可以把各种运行命令整理到package.json中，

在uts开发中，自修复这个功能尤其方便。

把uts和ts的几十条差异发给AI，[https://doc.dcloud.net.cn/uni-app-x/uts/uts\_diff\_ts.html](https://doc.dcloud.net.cn/uni-app-x/uts/uts_diff_ts.html)；然后让AI自动提取Android平台的日志进行自修复。你就可以喝着咖啡坐等AI把js/ts转换为uts了。

#### 截图对比与自动化测试

若仅靠日志无法定位界面问题，可通过“uni-app自动化测试插件”实现截图对比与全量测试：

1.  插件安装：在插件市场搜索“uni-app自动化测试插件”，点击导入即可完成安装；
2.  向AI发送指令：
    

```text
请基于以下规范，实现测试用例自动生成、Web/Android/iOS多端测试执行，
并支持全流程迭代优化——测试后自动返回含未通过用例标注的报告，
持续优化代码直至所有用例全部通过：
1. 页面深度分析：
   精准提取组件/事件、交互流程、API调用逻辑及输入输出关键节点；
2. 全面测试用例生成：
   覆盖功能测试、渲染效果验证、API接口测试、边界场景验证及页面跳转逻辑测试；
3. 标准化执行规范：
   测试文件统一命名为 *.test.js（需与对应页面文件同级存放），严格遵循Jest语法规范，确保各测试用例相互独立、无依赖；
4. 多端测试运行命令：
   - Web端测试：npm run test:web -- --browser 浏览器名；
   - Android端测试：npm run test:app-android；
   - iOS端测试：npm run test:app-ios
```

无需手动编写测试用例、反复调试代码！用AI实现跨端测试全自动化，将精力聚焦核心功能开发，让跨端测试高效又省心，即刻体验！

## 5、总结：

AI是高效的“代码生成器”，但不是“多端开发解决方案”。不应该用AI把ts代码编译为js，因为ts编译器才是专业稳定做这事的角色。

AI的智能搭配专业跨平台工具，才能最大化开发者的投入产出比。

**uni-app 和 uniCloud，会成为你vibe coding的最佳伙伴。**
