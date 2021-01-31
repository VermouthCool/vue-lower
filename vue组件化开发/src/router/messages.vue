<template>
    <div>
        <ul>
            <li v-for="(value) in content" :key="value.id">
                <router-link :to="`/about/messages/${value.id}`">{{value.title}}</router-link>
                <button @click="push(value.id)">push</button>
                <button @click="replace(value.id)">replace</button>
            </li>
        </ul>
        <button @click="back"></button>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
            content:[
                {id:1,title:'message1'},
                {id:2,title:'message2'},
                {id:3,title:'message3'},
                {id:4,title:'message4'},
            ]
        }
    },
    methods: {
        push(id){
            this.$router.push(`/about/messages/${id}`)
        },
        replace(id){
            this.$router.replace(`/about/messages/${id}`)
        },
        back(){
            this.$router.back()
        }
    },
}
</script>