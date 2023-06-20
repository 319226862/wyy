<template>
  <div>
    1
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
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
    Header,
    List,
    Item,
    Footer
  },
}
</script>