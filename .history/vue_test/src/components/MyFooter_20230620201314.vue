<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" :checked="isAll"/>
    </label>
    <span>
      <span>已完成{{ downTotal }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name:'MyFooter',
  props:['todos'],
  computed:{
    downTotal(){
      let i = 0
      this.todos.forEach((todo)=>{
        if(todo.done) i++
      })
      return i
    },
    total(){
      return this.todos.length
    },
    isAll(){
      return this.doneTotal === this.total
    }
  }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>