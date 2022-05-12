八.npx用法
npx命令是npm v5.2之后引入的新命令，npx可以帮我们直接执行node_modules/.bin文件夹下的文件

# 执行脚本
```bash
npx webpack
```
是不是省略了配置scripts脚本啦！

# 避免安装全局模块
全局安装的模块会带来很多问题，例如：多个用户全局安装的模块版本不同
```bash
npx create-react-app react-project
```
我们可以直接使用 npx 来执行模块，它会先进行安装，安装执行后会将下载过的模块删除~，这样可以一直使用最新版本啦~
