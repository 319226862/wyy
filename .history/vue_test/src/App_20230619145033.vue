<template>
  <div>
    <h1 v-text="msg" :ref="a"></h1>
    <button @click="showDOM">点我输出上方的DOM元素</button>
    <School/>
  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'
export default {
  name:'App',
  data(){
    return{
      msg:'Welcome Vue'
    }
  },
  components:{
    School,
    Student
  },
  methods:{
    showDOM(){
      console.log(a)
    }
  }
}
</script>

<style>

</style>