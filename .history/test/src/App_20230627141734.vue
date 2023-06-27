<template>
  <div id="container">
    <Category :title="food" :listData="foods"/>
    <Category :title="game" :listData="games"/>
    <Category :title="film" :listData="films"/>
  </div>
</template>

<script>
// import axios from 'axios'
import Category from './components/Category.vue'
export default {
  name: 'App',
  data(){
    return {
      msg:'welcome',
      foods:['1','2','3','4'],
      games:['11','22','33','44'],
      films:['111','222','333','444']
    }
  },
  components: {Category},
  methods:{
    
  }
}
</script>

<style>
#container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content:space-around
}
</style>
