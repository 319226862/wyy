<template>
    <div>
        <button @click="isShow = !isShow">按钮</button>
        <h1 v-show="isShow">hello</h1>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isShow : true
        }
    }
}
</script>

<style>

</style>