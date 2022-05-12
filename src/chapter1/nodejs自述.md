# 为什么要学习nodejs
我是一个前端工程师，而nodejs是服务端的东西，我为什么要学习它？

面试的时候，面试官会问，咱们是前端工程师，为什么要学习nodejs这种后端的东西呢？
你的回答：
* mock数据
* 甩锅
* 要做项目（不太明白你的意思，做项目写前端代码就行了呀，为什么要写后端代码？）
* 想成为全栈工程师？（成为全栈工程师可以去学习目前市面上流行的服务端语言像：java、php、C++等，他们都已经很成熟了，用这些语言去开发就行了呀，为什么还要学习nodejs）

nodejs ***并不是一门靠谱*** 的后端语言，当然node在处理高并发的问题上确实略胜一筹，但是它有一个致命的缺陷就是计算能力很糟糕，在面对大量计算时捉襟见肘。

说实话，单纯的使用nodejs来开发服务端，目前市场上还有很少有公司这么干的，都是nodejs和java、php、C++等配合使用。

现在来回答，为什么要学习node：

现在前端写代码，早已不是使用原生的html，css，js的那个刀耕火种的年代了。现在写代码都是建立在一个工程上面来进行的。

写代码一上来不是创建一个目录，然后在创建html，css，js，然后就开始撸代码了，而是`npm init`、`npm install`、`vue init`、`vue create`等等等等。

以前写的代码叫项目，而现在写的代码叫工程。这个工程就建立在node之上。比如使用vue，使用react来写代码，这些代码是根本无法直接在浏览器中运行的，它需要通过像webpack这样的打包工具来帮助我们把代码进行编译转化，转化成可以在浏览器中运行的代码，而webpack这类工具就是基于nodejs来实现的

所以我们学习node，主要是理解前端工程化上面的一些东西，如果不会nodejs，那就不可能理解npm是什么，也更不可能理解webpack的底层是什么。当在一些工程化比较深的项目中遇到问题时就可能解决不了了。

***所以，nodejs，前端工程师必须学习，但是学习它并不是让你成为全栈工程师，既能写前端，又能写服务端（太高看自己了吧）。最重要的目的是：理解前端的工程化，掌握工程化底层的实现原理。***

面试时，你会nodejs，但是不要把面试官向：“你会nodejs，你可以开发后端”这个方向上去引导。因为实际上你只会一些node的基本语法，知道一些node的核心模块，会一些node的api，而这些知识是根本无法支撑你去编写服务端的。因为服务端有太多的门道去探索。例如：1. 缓存（mamecache、redis）；2. 数据库的选型（mysql、DB2、oracle）3. cookie；4. session。这些都是很深的学问，专业的后端都不见得搞的很清楚，而一个前端的你会的这些知识根本无法支撑去开发任何后端的项目。

所以面试官问你nodejs的时候，我们更应该把面试官向如何使用nodejs去做前端工程化的方向去引导。去引导到webpack上面去，去引导到打包工具，去引导到npm这样的包管理工具上面去。千万不要给自己挖坑。

# nodejs是什么
* Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
  * nodejs不是一门语言，也不是库，更不是框架
  * nodejs是一个js运行时环境
  * 简单点来讲就是nodejs可以解析和执行js代码
  * 以前只有浏览器可以解析执行js代码
  * 也就是说现在的js可以完全脱离浏览器来运行，这一切都归功于nodejs

  它是一个JS运行时环境，它构建在Chrome的 V8 Javascript引擎上

  它更应该和浏览器来进行类比，在nodejs出现之前，js代码只能运行在浏览器中，这是因为浏览器中内置了可以解释执行js代码的一个东西（这个东西就叫做JS引擎）

  换句话说，我们只要有js引擎，那么我们就可以运行js代码了

  nodejs就是将js引擎进行了封装，可以让我们使用js来进行编程，然后nodejs调用它封装的js引擎来帮助我们解释并执行我们的代码

  nodejs采用的js引擎就是目前最出名的，也是号称速度最快的js引擎-V8，目前Chrome浏览器采用的引擎就是V8

  服务端的语言
  * pathon
  * ruby
  * nodejs
  * java
  * php
  * .net
  * C++
  * C#

* 浏览器中的js
  * ECMAScript（定义了js基本的语法）
  * BOM
  * DOM

* nodejs中的js
  * ***没有BOM、DOM***
  * ECMAScript
  * 在node这个js执行环境中为js提供了一些服务器级别的操作的API
    * 文件的读写
    * 网络服务的构建
    * 网络通信
    * http服务器
    * 。。。
* Node.js uses an event-driven,non-blocking I/O model that makes it lightweight and efficient.
  * event-driven 事件驱动
  * non-blocking I/O 非阻塞I/O
  * lightweight and efficient 轻量和高效
* Node.js` package ecosytem,npm,is the largest ecosystem of open source libraries in the world.
  * npm是基于nodejs开发的一个包管理工具
  * 绝大多数js相关的包都存放在了npm上，这样做的目的是为了让开发人员更方便地下载和使用


# nodejs能干什么？
* web服务器
* 命令行工具
  * webpack
  * webpack-dev-server
  * vue
  * git(C语言开发的)
  * npm
  * hexo
  * sass
  * eslint
  * gulp
  * grunt
