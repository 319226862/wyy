<template>
  <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" 
        placeholder="enter the name you search"
        v-model="keyWord"
        />
        <button @click="searchUsers">Search</button>
      </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    name:'Search',
    data() {
        return {
            keyWord: '',
        };
    },
    methods: {
        searchUsers(){
            axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                res=>{
                    console.log(res.data)
                },
                error=>{
                    console.log("错误",error.message)
                }
            )
        }
    }
}
</script>

<style>

</style>