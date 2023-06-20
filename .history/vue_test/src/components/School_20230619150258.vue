<template>
    <div>
        <h1>{{ msg }}</h1>
        <h2>姓名{{ name }}</h2>
        <h2>性别{{ sex }}</h2>
        <h2>年龄{{ age }}</h2>
    </div>
</template>
  
<script>
export default {
    name: 'School',
    data(){
        return{
            msg: 'welcome',
            name: '张三',
            sex: '男',
            age: 18,
        }
    }
}
</script>
