<template>
  <div>
    <School name="李四" sex="女" age="18"/>
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