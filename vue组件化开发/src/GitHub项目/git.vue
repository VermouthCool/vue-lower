<template>
    <div>
        <p v-if="!jian">Loading</p>
        <p v-else>
            最多的是
        <a href=""></a>
        </p>
    </div>
</template>
<script>
import Vue from 'vue'
/*
vue-resource
*/
import Vueresource from 'vue-resource'
Vue.use(Vueresource) 
/*
所有的vue的插件都要先声明
调用use后会给每个组件对象添加 $http
*/
/*

*/
export default {
    data() {
        return {
            jian:''
        }
    },
    mounted() {
        this.$http.get('url').then((value)=>{
            console.log(value.data);
        }).catch((error)=>{
        
        })
    },
}
</script>