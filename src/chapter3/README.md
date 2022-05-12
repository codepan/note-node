全称node package manager是世界上最大规模的包管理系统,官网是这样介绍的 Build amazing things...

# 安装node之后，为什么可以在命令行执行node命令？

命令行中可以执行命令，首先肯定是需要有一个对应的可执行脚本文件，其次是输入命令之后，电脑能够找到这个命令对应的那个脚本文件。电脑怎么找呢？电脑的环境变量中有一个Path环境变量，这个环境变量中配置着电脑可以执行的所有的命令所对应的脚本文件的文件路径。

当我们安装node的时候，node会将自己的脚本文件的路径写入到Path环境中去

# 那为什么也可以执行npm相关的命令呢？

这是因为在安装node时，默认会一并将npm也安装在电脑上，同时也会自动的将npm相关的命令的脚本文件路径写入到Path环境变量中去



> 只要需要全局使用都需要配置到Path环境变量中去


# node中有三个n
* npm
* nrm（管理下载源，即管理从哪里下载包）

  ```bash
  npm i -g nrm
  ```

  我们也可以在项目下创建一个.npmrc的文件去单独管理。其实上面的nrm这个工具底层就是管理的全局npm的.npmrc文件
* nvm（在windows下不好用，windows下可以使用nvm-win，这个包不能用npm下载，可以去github上下载）切换node版本


# npm 相关命令


### view

```bash
npm view webpack version
npm view webpack versions
```

### link & unlink
创建软链到全局下，将当前目录链接到全局的npm目录下，创建一个软链，使得可以在命令行执行当前目录下的可执行文件
```bash
npm link
npm link --force
```

### whoami & addUser & login
```bash
npm addUser
> Username
> Password
> Email
```
### publish & unpublish
发布的时候  每次版本都需要更新version字段 semver规范   major.minor.patch
```bash
npm publish
npm publish --access=public
npm publish --scope=codepan
```
