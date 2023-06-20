<template>
  <div>
    <School/>
    <hr>
    <School/>
    <hr>
    <School/>
  </div>
</template>

<script>
import School from './components/School.vue'
export default {
  name:'App',
  data(){
    return{
      msg:'Welcome Vue'
    }
  },
  components:{
    School
  },
}
</script>