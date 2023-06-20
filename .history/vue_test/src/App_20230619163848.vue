<template>
  <div>
    1
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
import MyItem from './components/MyItem.vue'
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
    MyItem,
    MyFooter
  },
}
</script>