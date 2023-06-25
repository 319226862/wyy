<template>
    <div class="student">
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
        <button @click="sendMsg">按钮</button>
    </div>
</template>

<script>
export default {
    name:'Stuent',
    data(){
        return{
            name: '尚硅谷',
            address:'北京'
        }
    },
    methods:{
        sendMsg(){
            this.$bus.$emit('hello', this.name)
        }
    }
}
</script>

<style>

</style>