// //伪数组变真数组
// arr = document.getElementsByTagName('a');
// //  arr = Array.from(arr)
// var a = Function.prototype.call.bind(Array.prototype.slice)
// a(arr,0);
// Object.defineProperty(arr,'jian',{
//     //数据描述符
//     configurable:false,//是否可以重定义
//     enumerable:true,//定义该属性是否可以枚举
//     //value:'ge',//定义初始值
//     //writable:false,//表示属性值是否可以修改
//     //存取描述符
//     get(){

//     },
//     set(){

//     }
// })
// // DocumentFragment文档碎片
// //fragment只存在内存里性能优化
// var c = document.createDocumentFragment();
// var child;
// while(child = a.firstChild){
//     c.appendChild(child)//会将a的子元素都搬空
// }
// var p = c.children[0].children;
// p = Array.prototype.slice.call(p);
// a.appendChild(c)
var a = {
    name:'jian',
    title:{
        name:'jian',
        age:18
    }
}
console.log(Object.keys(a));