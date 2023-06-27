<template>
    <div class="row">
        <div v-show="users.length" class="card" v-for="user in users" :key="user.id">
            <a :href=" user.html_url " target="_blank">
                <img :src=" user.avatar_url " style='width: 100px'/>
            </a>
            <p class="card-text">{{ user.login }}</p>
        </div>
        <div v-show="!users.length">welcome</div>
        <div v-show="isLoading">loading</div>
    </div>
</template>

<script>
export default {
    name:'List',
    data(){
        return{
            users:[],
            isFirst: true,
            isLoading: false,
            errMsg:''
        }
    },
    mounted () {
        this.$bus.$on('updateListData',(dataObj)=>{
            // this.isLoading = true
            console.log("list成果收到返回值",dataObj)
            // this.users = users
        })
    }
}
</script>

<style>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>