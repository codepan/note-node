在package.json中可以定义自己的脚本通过npm run来执行
```json
"scripts": {
   "hello": "echo hello",
   "build": "webpack"
}
```
我们可以使用 npm run hello执行脚本,也可以使用 npm run build执行node_modules/.bin目录下的webpack文件

* `npm run` 命令执行时，会把 ./node_modules/.bin/ 目录添加到执行环境的 PATH 变量中，因此如果某个命令行包未全局安装，而只安装在了当前项目的 node_modules 中，通过 npm run 一样可以调用该命令。

* 执行 npm 脚本时要传入参数，需要在命令后加 -- 标明, 如 npm run hello -- --port 3000 可以将 --port 参数传给hello 命令

* npm 提供了 pre 和 post 两种钩子机制，可以定义某个脚本前后的执行脚本,没有定义默认会忽略

```json
"scripts": {
   "prehello":"echo prehello",
   "hello": "echo hello",
   "posthello":"echo posthello"
}
```
可以通过打印全局env和 在项目下执行npm run env来对比PATH属性，不难发现在执行npm run 的时候确实会将 ./node_modules/.bin/ 目录添加到PATH中


```bash
# npm run start 可简写为
npm start

# npm run test 可简写为
npm test
```
