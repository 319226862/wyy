<template>
  <ul class="todo-main">
    <MyItem />
  </ul>
</template>

<script>
import Item from './MyItem.vue'
export default {
    name:'MyList',
    components:{
      Item
    }
}
</script>

<style>

</style>