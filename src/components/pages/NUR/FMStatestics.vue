<template>
    <div>

    </div>
</template>

<script setup>
import { onMounted, watch } from 'vue';


const props=defineProps([
    "week","year"
])

// watch(props.week,()=>{
//     getWeekFM()

// })

onMounted(()=>{
    getWeekFM()
})
const getWeekFM=()=>{
    window.alert(props.week)
}

</script>

<style lang="scss" scoped>

</style>