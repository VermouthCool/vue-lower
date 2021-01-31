<template>
    <div>
        <router-link class="jian" to='/home'>Home</router-link>
        <router-link class="jian" to='/about'>About</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
import router from './index.js'
import './reset.css'
export default {
    data() {
        return {
            jian:''
        }
    },
    router //Vue.prototype多了$router
}
</script>
<style>
    .jian{
        display: inline-block;
        width: 50px;
        height: 30px;
    }
    .router-link-active{
        background-color: cadetblue;
    }
</style>>