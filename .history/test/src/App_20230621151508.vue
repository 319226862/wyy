<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <School v-on:aaa="demo"/>
    <Student ref="bindSchool"/>
    <!-- <Student v-on:getMessage="getMsg"/> -->
  </div>
</template>

<script>
import School from './components/School.vue';
import Student from './components/Student.vue';
export default {
  name: 'App',
  data(){
    return {
      msg:'welcome'
    }
  },
  components: {
    School,
    Student
  },
  methods:{
    demo(){
      console.log("收到消息")
    },
    getMsg(){
      console.log("student传消息成功")
    }
  },
  mounted(){
    this.$refs.bindSchool.$on('getMessage',function(){
      console.log("student传消息成功")
    })
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
