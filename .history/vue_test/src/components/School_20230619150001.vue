<template>
    <div>
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
            name: '张三',
            sex: '男',
            age: 18,
        }
    }
}
</script>
