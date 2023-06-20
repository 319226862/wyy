<template>
  <div class="todo-header">
    <input type="text" @keyup.enter="add" v-model="title"/>
  </div>
</template>

<script>

export default {
    name:'MyHeader',
    data(){
      return{
        title: '',
      }
    },
    methods:{
      // 获取input的值
      add(event){
        console.log(event.target.value)
        console.log(this.title)
        // 将输入包装成todolist的格式
        const a = {
          id: '004',
          title: this.title,
          done: false
        }
      }
    }
}
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}

</style>