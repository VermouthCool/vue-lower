# Vue 是渐进式
    按照需求逐渐引入插件；简单易用；广泛灵活
    构建是指对源代码进行操作 形成浏览器直接高效运行的代码
    适合移动端和PC端
    它本身只关注UI  可以引入其他vue插件和第三方插件开发项目
    组件的data必须是函数  不然如果是对象的话每个人绑定的都是同一个 会乱的
    保证组件的多个实例都有自己的data
```javascript
    Vue.component('jian',{//组件名是建
        data(){
            return{

            }
        },
        props:[],
        template:'<div></div>'
    })
```
    一般采用单文件的方式
# webpack复习
  webpack webpack-cli 一个用来干活 一个用来辨别指令
  html-webpack-plugin 用力将打包好的js引入到html再打包html
# 单文件组件
    所有组件的原型对象都是一个vue实例
```javascript
     Vue.prototype.xxx = new Vue()  
    //通过给他绑定事件，分发事件实现任意组件的通信  全局事线
```
## slot技术
    用于组件间的通信 可以显示标签 会将传递的标签解析好以后传递给子元素
    <slot name="jian"></slot>
    在不传递参数的时候会内容为空显示不出来
    在传递参数的父组件的标签文本内添加对应的想要传递的标签  添加属性v-slot="jian" 只能写在templete里面
## pubsub技术
    订阅的函数的第一个参数为mes，第二个参数为data
    解绑时 什么都不传什么都不会解绑  传递了事件名 就解绑该事件的所有回调  再传个函数 就解绑这个
## hash模式
    路径带 #  只放松请求到#前面的
## history模式
    发送请求的路径就是整个地址
    配置historyApiFallback:true
## 缓存路由组件对象
    <keep-alive exclude="About"> 可以存着改组件对象  不会直接删除  给组件命名
# vuex
    对多个组件公用的状态进行集中式的管理
    1.返回的$store会有state，getter，dispatch，commit
----
# vue的源码分析
## 分析vue的MVVM模型
### 数据代理
```javascript
    const vm =new Vue({
        data(){
            return {
                name:'jian'
            }
        }
    })
    vm.name
    //代理读操作 vm._data.name
    var data = this._data = this.$option.data;
    var me = this;
    Object.keys(data).forEach((key)=>{
        me._proxy(key)
        //下面就用definedPrototype添加属性到vm上
    })
    //data所有属性的读和写都有vm来代替操作
    /*
    好处就是比较方便存取
    */
```
### 模板解析-插值
```javascript
    new Vue({
        data:{
            name:'jian'
        }
    })
    //将原生节点取出到feagment上  进行模板的解析
    /*
    正则匹配到两个花括号内的变量名 再在data里查找
    最后再在el里面append frangment RegExp.$1 子匹配
    */
```
### 模板解析-事件指令
```javascript
    /*
    1.先得到所有的元素节点的属性节点
    2.遍历所有的属性名 
    3.如果是指令属性名
    4.如果是事件指令处理
    指令属性通过addEventListener(node,fn.bind(vm),false)
    最后再移除原模板上的指令
    */
```
### 模板解析 - 一般指令
    1.找到元素属性
    2.将值从data里面取出来，最后进行操作，最后移除指令
### 模板解析-数据绑定
#### 一旦更新了data里的某个数据，所有界面上直接使用或间接使用了该属性的节点都会更新
**数据劫持：是vue来实现数据绑定的一种技术；基本思想是利用definedProperty()来调用set方法更新界面**

    1.dep对象：
    创建时机：
        初始化时给data添加set监视之前创建
        先创建的dep后创建的watcher
        里面有一个subs的数组存着watcher
    创建几个：
        data里面有几个属性就创建几个
    2.watcher对象：
    创建时机：
        初始化阶段在对模板中某个节点（包含模板语法除了事件指令）初始化更新页面后创建，每个watcher都用来更新对应的节点
        里面有一个对象depids：{
            0：d0对象
        }
    创建几个：
        与模板里的表达式（插值/一般指令一一对应）
    订阅者：watcher对象（包含更新某个对应节点的方法）
    发布者：包含了监视属性的set方法
    订阅器：dep对象（每个set都引用了对应的set对象）
    总结：
        dep--->watcher 一对多
        watcher--->dep 一对多
### 双向数据绑定
    了解v-model的实现原理