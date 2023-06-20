<template>
  <div>
    1
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
import MyList from './components/MyList.vue'
export default {
  name:'App',
  data(){
    return{
      msg:'Welcome Vue'
    }
  },
  components:{
    MyHeader,
    MyList,
    MyFooter
  },
}
</script>