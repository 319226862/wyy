<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :receive="receive"/>
        <MyList :todos="todos" :checkTodo="checkTodo" :handleDelete="handleDelete"/>
        <MyFooter :deleteAllTodo="deleteAllTodo" :todos="todos" :checkAllTodo="checkAllTodo"/>
      </div>
    </div>
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
      // todos:[
      //   // {id:'001',title:'aaaaa',done:true},
      //   // {id:'002',title:'bbbbb',done:false},
      //   // {id:'003',title:'ccccc',done:true}
      // ]
      // 或操作，如果左边为真，就用，不为真，用右边的空数组
      todos:JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  components:{
    MyHeader,
    MyList,
    MyFooter
  },
  methods: {
    receive(x) {
      // console.log("接收数据", x)
      this.todos.unshift(x)
    },
    // 数据在那，操作数据在哪
    checkTodo(id){
      this.todos.forEach((todo)=>{
        if(todo.id === id) todo.done = !todo.done
      })
    },
    handleDelete(id){
      this.todos = this.todos.filter((todo)=>{
        return todo.id !== id
      })
    },
    checkAllTodo(done){
      this.todos.forEach((todo)=>{todo.done = done})
    },
    deleteAllTodo(){
      this.todos = this.todos.filter((todo)=>{
        return !todo.done
      })
    }
  },
  watch:{
    todos(value){
      localStorage.setItem('todos',JSON.stringify(value))
    }
  }
}
</script>
<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}






</style>