<template>
    <div>
            <li @mouseenter="enter" @mouseleave="leave" :style="{background:color}">
            <input type="checkbox" v-model="item.wan">
            {{item.title}}
            <button v-show="isshow" @click="deletejian()">删除</button>
        </li>
    </div>
</template>
<script>
/*
v-model是一个指令，限制在<input>、<select>、<textarea>、components中使用，修饰符.lazy(取代 input 监听 change 事件)、
.number(输入字符串转为有效的数字)、.trim(输入首尾空格过滤)。它其实是一个语法糖，接下来我们就来分析 v-model 的实现原理。
*/
export default {
    data() {
        return {
            isshow:false,
            color:'white'
        }
    },
    props:{
        item:Object,
        deleteTo:Function
    },
    methods: {
        enter(){
            this.isshow=true;
            this.color='gray'
        },
        leave(){
            this.isshow=false
            this.color='white'
        },
        deletejian(){
            this.deleteTo(this.item.id)
        }
    },
}
</script>