<template>
  <div>
    1
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
import Item from './components/Item.vue'
import List from './components/List.vue'
export default {
  name:'App',
  data(){
    return{
      msg:'Welcome Vue'
    }
  },
  components:{
    MyHeader,
    List,
    Item,
    MyFooter
  },
}
</script>