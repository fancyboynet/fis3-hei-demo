# 基于fis3的纯静态解决方案demo

## 准备
   ```
   $ npm install -g fis3
   $ npm install
   
   ```
   
## 构建说明
   1. 全局安装[fis3](http://fex-team.github.io/fis3/index.html) `npm install -g fis3`
   2. 执行 `npm install` 安装依赖
   3. 资源文件采取百度的[fis3](https://github.com/fex-team/fis3)构建，维护之前请参考相关资料
   4. 构建输出目录为根目录下的**output**目录
   5. 开发时运行**tool/develop.js** 会自动启动一个http服务，点击打开对应页面模板就可以看到页面效果了
   6. 开发完成后运行**tool/product.js** 此时**output**目录为最新的压缩及打包的资源
   
## 构建注意
   新增文件时可能需要重新运行develop.sh来对新增的文件增加监听
   
## 关于自适应
   1. 效果图统一给1080p;
   2. 采用rem的自适应方式，注意查看头部的相关脚本
   3. css中按效果图量出的尺寸除以100设置，例如效果图量的某宽度是500px,则css中设置5rem;
   
## 目录说明
[参考](https://github.com/fex-team/fis3/blob/master/doc/docs/api/config-commonly-used.md)

### 源码目录

```
├── tool
│   └── develop.js
│   └── product.js
├── config
│   └── redirect.json
├── mock
│   └── POST_LIST.json
├── page
│   └── index.html
├── common
│   └── lib
├── test
└── components
    ├── header
    ├── nav
    └── ui
```

1. page 放置页面模板
2. components 一切组件，包括模板、css、js、图片以及其他前端资源
3. test 一些测试数据、用例
4. common 放一些组件公用的静态资源
5. common/lib 放置一些公共库，例如 jquery, zepto, lazyload 等
6. config 配置目录，包括Redirect扩展的配置文件
7. mock 本地模拟数据目录，只在本地开发环境时才存在
8. tool 工具类目录，只在本地开发环境时才存在

### 编译产出目录

```
├── static/
├── templates/
└── test
```


1. static 对应服务端的static目录
2. template 对应服务端的template目录
3. test 还是一些测试数据、用例
