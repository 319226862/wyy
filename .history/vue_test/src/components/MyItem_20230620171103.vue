<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger">删除</button>
  </li>
</template>

<script>
export default {
    name:'MyItem',
    // 声明接收对象
    props:['todo','checkTodo'],
    // mounted(){
    //   console.log(this.todo)
    // }
    methods: {
      handleCheck(id){
        // 将对应todo对象的done值取反
        this.checkTodo(id)
      }
    }
}
</script>

<style scoped>

/*item*/

li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover{
  background-color: #ddd;
}
</style>