<template>
  <div>
    <ul v-for="msg in messageList" :key="msg.id">
        <li>
            <router-link to="/home/message/detail">{{ msg.msg }}</router-link>
        </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:'Message',
    data(){
        return{
            messageList:[
                {id:'001',msg:'1212'},
                {id:'002',msg:'121222'},
                {id:'003',msg:'121332'},
            ]
        }
    }
}
</script>

<style>

</style>