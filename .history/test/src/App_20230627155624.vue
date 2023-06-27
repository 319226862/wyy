<template>
  <div id="container">
    <!-- <Category title="food" :listData="foods"/> -->
    <!-- <Category title="game" :listData="games"/> -->
    <!-- <Category title="film" :listData="films"/> -->
    <!-- <Category title="food">
      <img slot="bottom" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" />
      <a slot="footer" href="#">more</a>
    </Category> -->

    <Category title="games">
      <ul slot="bottom">
          <li v-for="(game,index) in games" :key="index">{{ game }}</li>
      </ul>
      <a slot="footer" href="#">more</a>
      <a slot="footer" href="#">more</a>
    </Category>

    <!-- <Category title="films">
      <video slot="bottom" src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <a slot="footer" href="#">more</a>
    </Category> -->
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
      films:['111','222','333','444'],
      video:'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
      img:'https://s3.ax1x.com/2021/01/16/srJlq0.jpg'
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
img{
  width: 100px;
}
video{
  width: 100px;
}
</style>
