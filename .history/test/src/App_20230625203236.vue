<template>
  <div id="app">
    <!-- <h1>{{ msg }}</h1> -->
    <!-- <School />
    <Student /> -->
    <Draw />
  </div>
</template>

<script>
import School from './components/School.vue';
import Student from './components/Student.vue';
import Draw from './components/Draw.vue';
export default {
  name: 'App',
  data(){
    return {
      msg:'welcome'
    }
  },
  components: {
    School,
    Student,
    Draw
  },
  methods:{
    
  },
  mounted(){
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
