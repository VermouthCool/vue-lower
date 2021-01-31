<template>
    <div>
        <ul>
            <Item v-for="(item) in todoList" :key="item.id" :item="item" :deleteTo="deleteTo"/>
        </ul>
    </div>
</template>
<script>
import Item from './Item'
export default {
    props:['todoList',"deleteTo"],
    components:{
        Item
    }
}
</script>