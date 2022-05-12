# node是什么？
Node.js是一个基于 Chrome V8 引擎的JavaScript运行环境(runtime),Node不是一门语言是让js运行在后端的运行时,并且不包括javascript全集,因为在服务端中不包含DOM和BOM,Node也提供了一些新的模块例如http,fs模块等。Node.js 使用了事件驱动、非阻塞式 I/O 的模型，使其轻量又高效并且Node.js 的包管理器 npm，是全球最大的开源库生态系统。事件驱动与非阻塞IO后面我们会一一介绍。到此我们已经对node有了简单的概念。

node不是一门语言，而是一个运行时（提供了一个js的运行环境），可以将其类比为浏览器。js的组成部分（ECMAScript、DOM、BOM），在node中支持ECMAScript，node中增添了很多内置的模块各种各样的功能+ 第三方模块
> 简单理解：js + 内置的模块 + 别人写好的模块

# node解决了哪些问题？
Node在处理高并发,I/O密集场景有明显的性能优势

* 高并发,是指在同一时间并发访问服务器
* I/O密集指的是文件操作、网络操作、数据库,相对的有CPU密集,CPU密集指的是逻辑处理运算、压缩、解压、加密、解密

> Web主要场景就是接收客户端的请求读取静态资源和渲染界面,所以Node非常适合Web应用的开发。

# js的特点是主线程是单线程的

javascript在最初设计时设计成了单线程,为什么不是多线程呢？如果多个线程同时操作DOM那岂不会很混乱？这里所谓的单线程指的是主线程是单线程的,所以在Node中主线程依旧是单线程的。

单线程特点是节约了内存,并且不需要在切换执行上下文
而且单线程不需要管锁的问题.


多线程和单线程的区别

* 多线程
  * 多个请求到来的时候，需要开启对应的线程来进行处理（线程池，解决防止开启大量线程，浪费内存）
  * 超过处理个数后需要等待（好处就是每一个人都能处理复杂的逻辑）。比较适合CPU密集型（压缩、解密、加密）
  * 后面的请求处理不用等待第一个人的处理（同时操作同一个资源需要上锁）
  * 同步阻塞
* 单线程
  * 第一个处理后处理第二个（节约内存，不需要开启线程）
  * 如果第一个人处理完成后，会通知洗桑拿成回来处理，适合io密集型（异步）
  * 稍后完成了再回来处理（时间通知）
  * 底层有一个事件环的机制
  * 文件读取写入（web开发）nginx（单线程模型）
  * 单线程没有锁的概念
  * 异步非阻塞

# 同步/异步 阻塞/非阻塞
阻塞非阻塞指代的是调用方的状态

同步异步指代的是被调用方的状态

* 同步就是在执行某段代码时，代码没有得到返回之前，其他代码无法执行，当得到了返回值后可以继续执行其他代码。
* 异步就是在执行某段代码时，代码不会立即得到返回结果，可以继续执行其他代码，返回值通过回调来获取

![dfdfdf](../assets/a.png)

# node的使用场景
* 可以做服务端，调用mongo mysql
* 我们目前多数采用中间层（前后端分离的项目：可以解决跨域问题，也可以做数据处理，对数据进行二次加工转换等工作）
* 前端会用node来实现很多工具：cli gulp webpack vite 微前端工程化而生  node对js支持
* ssr 服务端渲染（vue和react来做处理）=> node来做,因为node天生会解析js语法

# 模块化问题
* 为什么要有模块化（方便维护，高内聚低耦合，变量冲突问题，提高代码复用性，逻辑复用性）前端可以通过单例模式来解决
* js实现模块化可以采用函数来进行分割，node中也是采用函数来进行模块划分的
* cmd(seajs) amd(require) umd(支持amd，cmd) iife(自执行函数) commonjs(require module.exports) esm(es6模块化语法 import export) systemjs(微前端 类似jsonp)
* 前端esm 后端commonjs（后端也慢慢地开始转向esm了）

# commonjs规范
* 每个js文件都是一个模块
* 每个模块想去引用别人的模块，需要采用require语法
* 每个模块想被别人使用则需要采用module.exports 导出

# 内置模块
天生的，与生俱来的模块
* path
* fs
* vm
* http
* events

# 让字符串执行的方法
* eval（不推荐，因为eval会有上下文依赖问题）
* new Function
* node中的vm模块