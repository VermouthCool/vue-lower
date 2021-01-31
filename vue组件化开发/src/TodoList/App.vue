<template>
    <div class="clearfix">
        <Header :todo="todo" :todoList="todoList"></Header>
        <List :todoList="todoList" :deleteTo="deleteTo"/>
        <input type="checkbox">
        总共{{todoList.length}}
        已完成{{jian()}}
        <button>清楚完成的任务</button>
    </div>
</template>
<script>
import Header from './Header'
import List from './List'
Vue.config.productionTip = false
export default {
    data() {
        return {
           todoList:[
               {id:1,title:'A',wan:true},
               {id:2,title:'B',wan:true},
               {id:3,title:'C',wan:true},
               {id:4,title:'D',wan:true},
           ] 
        }
    },
    components:{
        List,
        Header
    },
    methods: {
        todo(a){
            this.todoList.unshift(a)
        },
        jian(){
            var a = 0;
            for(var i=0;i<this.todoList.length;i++){
                if(this.todoList[i].wan){
                    a++
                }
            }
            return a
        },
        deleteTo(a){
            var c = 0;
            this.todoList.forEach((value,index)=>{
                if(value.id == a){
                    c = index
                }
            })
            this.todoList.splice(c,1)
        }
    },
}
</script>
<style scoped>
    .clearfix::after{
        content: '';
        display: block;
        clear: all;
    }
    div{
        border: 1px solid #aaa;
        padding: 20px;
        margin: 0 auto;
    }
    button{
        background-color: cadetblue;
        float: right;
    }
</style>