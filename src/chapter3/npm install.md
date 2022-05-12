# 全局安装
```bash
npm install http-server -g
```
全局安装的意思很简单,就是安装的模块会被安装到全局下，可以在命令行中直接使用安装的包,其实只是在**/user/local/bin目录下作了个链接连接到 /usr/local/lib/node_modules/http-server/bin/http-server这个文件，当我们执行http-server**这个命令时，会调用链接的这个文件。

mac因为有权限问题，这里我们加sudo来执行命令

我们可以自己来尝试写一个包 ,创建bin目录，新增www文件,名字叫什么无所谓~

#! /usr/bin/env node
console.log('珠峰架构'); // #! 这句表示采用node来执行此文件，同理 shell可以表示 sh
更新package.json文件

```json
"bin": {
	"my-pack":"./bin/www" // 这里要注意名字和你建立的文件夹相同
}
```

好啦，写好啦！这里我们先不说发包的事，先用一个常用的命令，他可以实现链接的功能

npm link
这样我们在命令行中直接输入my-pack就可以 打印出珠峰架构


-g 安装一个全局模块，就是可以在命令行中直接使用

我们安装的全局包 都会被安装到npm的全局目录下，可以理解为这些命令创建了一个软链或者说快捷方式，这样就都可以直接使用了（npm目录被放置到了path下）

全局模块只能在命令行中使用，不能在项目中使用。所以全局模块都是一些工具类的，例如脚手架


# 本地安装
```
npm install
npm install webpack --save-dev
```
本地安装很好理解啦~ 就是所谓的在项目中使用，而非在命令行中使用！这里我们看到生成了一个package-lock.json文件，而且将安装的模块放到了node_modules下,而且json中也新增了些内容

"devDependencies": {
    "webpack": "^4.39.3"
}
这里我们先来简单介绍下基本的使用

--save-dev代表当前依赖只在开发时被应用,如果默认不写相当于 --save为项目依赖开发上线都需要

也可以指定版本号来安装包

npm i jquery@2.2.0 # install可以简写成i
默认执行npm i会安装项目中所需要的依赖,如果只想安装生产环境依赖可以增加--production参数