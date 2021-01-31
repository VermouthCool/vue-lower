<template>
    <div>
        <span>{{item.login}}</span>
        <a :href="item.html_url"><img :src="item.avatar_url" alt=""></a>
    </div>
</template>
<script>
export default {
    props:{
        item:Object
    }
}
</script>
<style lang="less" scoped>
    div{
        border: 1px solid #000;
        padding: 2px;
        width: 150px;
        height: 150px;
        float: left;
        text-align: center;
        margin: 0 2px;
        span{
            text-align: center;
        }
        a{
            img{
                width: 90%;
                height: 90%;
            }
        }
    }
</style>