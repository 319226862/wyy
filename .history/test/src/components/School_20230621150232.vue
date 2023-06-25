<template>
    <div class="student">
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <button @click="sendStuentdName">把学生名给App</button>
    </div>
</template>

<script>
export default {
    name:'School',
    data(){
        return{
            name: '张三',
            sex:'男'
        }
    },
    methods:{
        sendStuentdName(){
            this.$emit('aaa',this.name )
        }
    }
}
</script>

<style>

</style>