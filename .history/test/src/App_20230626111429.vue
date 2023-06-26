<template>
  <div id="app">
    <button @click="getStudent">获取学生信息</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data(){
    return {
      msg:'welcome'
    }
  },
  methods:{
    getStudent(){
      axios.get('http://localhost:8080/api/students').then(
        res=>{
          console.log("成功",res.data)
        },
        error=>{
          console.log("失败",error.message)
        }
      )
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
