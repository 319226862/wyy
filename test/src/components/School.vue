<template>
    <div class="school">
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
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
    mounted(){
        this.$bus.$on('hello',(data)=>{
            console.log("school收到数据",data)
        })
    },
    beforeDestroy(){
        this.$bus.$off('hello')
    }
}
</script>

<style>

</style>