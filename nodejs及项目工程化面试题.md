# 使用nodejs编写代码遍历文件夹及所有文件名
```js
const fs = require('fs')
const path = require('path')

const readDir = entry => {
  /* 方法1
  const dirs = fs.readdirSync(entry)
  dir.forEach(item => {
    const location = path.join(entry, item)
    const stats = fs.statSync(location)
    if (stats.isDirectory()) {
      console.log(`dir: ${location}`)
      readDir(location)
    } else {
      console.log(`file: ${location}`)
    }
  })
  */

  const dirents = fs.readdirSync(entry, {withFileTypes: true})
  dirents.forEach(dirent => {
    if (dirent.isDirectory()) {
      console.log(`directory: ${path.resolve(entry, dirent.name)}`)
      readDir(path.resolve(entry, dirent.name))
    } else {
      console.log(`file: ${path.resolve(dirent.name)}`)
    }
  })
}

readDir(__dirname)
```
# nodejs如何做版本的升级？为什么要使用nvm？
为什么有时候我们需要对nodej的版本进行升级呢？，比如说现在node的8版本很好用，很稳定，那什么时候需要将其版本升级到11呢？
* 使用新的ES语法：新的ES语法可能在老的node版本中不支持，而你现在想用新的语法，所以就需要升级
* 提升webpack打包效率：vue-cli需要node的版本大于8.1.0，当你的项目巨复杂的时候，webpack打包你的项目时，速度会非常的慢，并且打包出来的文件也会非常大，webpack目前最新的版本已经是4.*了，webpack新的版本中会依赖一些node的新版本中的一些新的api，从而来提高它的打包效率，如果你想提升使用webpack打包项目的速度，可以尝试升级一下node的版本。

如何升级nodejs版本呢？

如果采用直接安装新版本nodejs的安装包的话，那么电脑上只能安装一个nodejs，但是这样会存在问题。比如：目前你开发好几个项目，项目一使用的nodejs版本是7.0，项目二是8.0，项目三是9.0。三个项目我想同时开发的话，如果直接将nodejs进行升级或者降级的话，项目就会报错。


采用nvm这个工具来管理nodejs 的版本就显得尤为重要了。

nvm（Node Version Manager）

```shell
# 安装nvm
npm install -g nvm
```
```shell
# 查看nodejs的所有版本
nvm ls
```
```shell
# 指定切换到nodejs的某个版本
nvm use xxx
```
```shell
# 使用nvm安装指定的nodejs版本
nvm install <node-version>
```