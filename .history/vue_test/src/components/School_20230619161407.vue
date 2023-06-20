<template>
    <div class="demo">
        <h1>{{ msg }}</h1>
        <h2>姓名:{{ name }}</h2>
        <h2>性别:{{ sex }}</h2>
        <h2>年龄:{{ age }}</h2>
    </div>
</template>
  
<script>
export default {
    name: 'School',
    data(){
        return{
            msg: 'welcome',
        }
    },
    props:['name','sex','age']
}
</script>
<style lang="less" scoped>
    .demo{
        background-color: antiquewhite;
    }
</style>
