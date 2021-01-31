<template>
    <div>
        <header>这是一个关于github搜索用户的模块</header>
        <input type="text" placeholder="请输入你想要搜索的用户名称" v-model="title">
        <button @click="sou">点击搜索</button>
        <list :content="content"/>
        <br/>
    </div>
</template>
<script>
/*
用于实现子组件向父组件的通信
this.$emit(事件名，要传递的数据)分发事件 是同步的
vm.$on(事件名,监听回调)
*/
import list from './list'
export default {
    data() {
        return {
            title:'',
        }
    },
    components:{
    },
    props:['content'],
    components:{
        list
    },
    methods: {
        sou(){
            axios.get(`https://api.github.com/search/users`,{params:{q:this.title}}).then((value)=>{
                this.global.$emit('tian',value.data.items)
            })
        }
    },
}
</script>