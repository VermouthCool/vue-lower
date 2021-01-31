<template>
    <div>
        <input ref="input" @keyup.enter="enter" type="text" v-model="title" placeholder="请输入将来想要做的事">
        <br>
        <br>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title:''
        }
    },
    methods: {
        enter(){
            if(!this.title.trim()){
                return
            }
            this.todo({
                id:Date.now(),
                title:this.title.trim(),
                wan:false
            });
            this.title = ''
        }
    },
    props:{
        todo:{
            type:Function,
            required:true
        },
        todoList:Array
    }
}
</script>