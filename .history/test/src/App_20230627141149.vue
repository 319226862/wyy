<template>
  <div id="container">
    <Category/>
    <Category/>
    <Category/>
  </div>
</template>

<script>
// import axios from 'axios'
import Category from './components/Category.vue'
export default {
  name: 'App',
  data(){
    return {
      msg:'welcome'
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
