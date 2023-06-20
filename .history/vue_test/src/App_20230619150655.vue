<template>
  <div>
    <School name="李四" sex="女" age="18"/>
    <!-- <School name="李11四" sex="12女" age="1128"/> -->
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