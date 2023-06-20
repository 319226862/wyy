<template>
  <ul class="todo-main">
    <MyItem v-for="todoObj in todos" :key="todoObj.id" :checkTodo="checkTodo" :todo="todoObj"/>
  </ul>
</template>

<script>
import MyItem from './MyItem.vue'
export default {
    name:'MyList',
    components:{
      MyItem
  },
    props:['todos','checkTodo']
    // data(){
    //   return {
    //     todos:[
    //       {id:'001',title:'aaaaa',done:true},
    //       {id:'002',title:'bbbbb',done:false},
    //       {id:'003',title:'ccccc',done:true}
    //     ]
    //   }
    // } 
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>