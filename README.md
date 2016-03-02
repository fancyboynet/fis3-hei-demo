# 基于fis3的纯静态解决方案demo

## 准备
   ```
   $ npm install -g fis3
   $ npm install
   
   ```
   
## 模块化
   1. 采用[fis3-hook-commonjs](https://github.com/fex-team/fis3-hook-commonjs)的模块化方案
   2. 页面统一只通过js导入用到的模块,保证只有一个地方控制模块的加载
   3. 模块中如果需要加载样式,需要在顶部注释中声明
   
### 源码目录

```
├── doc (文档)
├── mock (模拟数据)
│   └── server.conf
├── page (页面)
├── common (非组件化的文件)
│   └── images (公用图片,比如各种icon)
│   └── lib (库文件)
│       └── mod.js
├── test (测试用例)
└── components (组件)
    └── jquery
    └── app (应用自己开发的组件,非从外部拉取的)
        └── my
    
```

### 编译产出目录

```
├── static/
├── templates/
└── test
```


1. static 对应服务端的static目录
2. template 对应服务端的template目录
3. test 还是一些测试数据、用例

### develop
```$ sh develop.sh```

### product
```$ sh product.sh```
