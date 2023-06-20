<template>
  <div>
    <h1 v-text="msg"></h1>
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
  }
}
</script>

<style>

</style>