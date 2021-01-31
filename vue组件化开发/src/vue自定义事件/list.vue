<template>
    <div>
        <item v-for="(item) in content" :key="item.id" :item="item"/>
    </div>
</template>
<script>
import item from './item'
export default {
    props:{
        content:Array
    },
    components:{
        item
    }
}
</script>