<template>
  <div>
    <School/>
    <School/>
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