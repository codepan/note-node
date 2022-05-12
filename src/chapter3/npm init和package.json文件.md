### init
默认大家肯定比较熟悉了，直接 npm init -y了事，这回我们再来仔细看看
```json
{
  "name": "my-pack",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {},
  "license": "ISC"
}
```
这里先声明的npm 版本是6.7.0,因为我的node版本是v11.14.0

咱们来一个个说说这里比较重要的字段:name、version、main、scripts、license

* name是当前包的名字，也就是最终发布的npm官网上包的名字。不能和已有的包重名哦
* version就是当前包的版本号，主要我们要探究如果优雅的管理版本号
* main 就是当前包的入口文件，也就是使用require默认引入的文件
* module 字段是给esm用的，也就是使用import默认引入的文件
* bin 字段是给执行脚本的时候用的
* scripts 可以配置一些执行脚本
* license 协议许可

```bash
npm init
npm init -y
```





