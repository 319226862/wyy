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
            this.$bus.$emit('updateListData',{
                isFirst:false,
                isLoading:true,
                errMsg:'',
                users:[]
            })
            axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                res=>{
                    // console.log(res.data.items)
                    this.$bus.$emit('updateListData',{
                        isFirst:false,
                        isLoading:false,
                        errMsg:'',
                        users:res.data.items
                    })
                },
                error=>{
                    // console.log("错误",error.message)
                    this.$bus.$emit('updateListData',{
                        isFirst:false,
                        isLoading:false,
                        errMsg:error.message,
                        users:[]
                    })
                }
            )
        }
    }
}
</script>

<style>

</style>