<template>
    <ul>
        <li>ID:{{message[$route.params.id-1].id}}</li>
        <li>title:{{message[$route.params.id-1].title}}</li>
        <li>content:{{message[$route.params.id-1].content}}</li>
    </ul>
</template>
<script>
export default {
    props:['id'],//写了这个可以直接xiethis.id获取参数  同时在注册路由时写上props为true
    mounted() {
        /*
        当参数改变时只是会复用该组件  不重新挂载
        */
    },
    data() {
        return {
            message:[
                {id:1,title:'佐佐木优奈',content:'beautiful'},
                {id:2,title:'佐藤白英',content:'beautiful'},
                {id:3,title:'筱田优',content:'beautiful'},
                {id:4,title:'上原亚衣',content:'beautiful'},
                {id:5,title:'水上由机会',content:'beautiful'},
            ]
        }
    },
    watch:{
        $route(a){
        }
    }
}
</script>