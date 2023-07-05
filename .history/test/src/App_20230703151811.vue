<template>
  <div id="container">
    <!-- <Category title="food" :listData="foods"/> -->
    <!-- <Category title="game" :listData="games"/> -->
    <!-- <Category title="film" :listData="films"/> -->
    <!-- <Category title="food">
      <img slot="bottom" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" />
      <a slot="footer" href="#">more</a>
    </Category> -->

    <!-- <Category title="games">
      <template scope="data">
        <ul>
          <li v-for="(game,index) in data.games" :key="index">{{ game }}</li>
        </ul>
      </template>
    </Category>

    <Category title="games">
      <template scope="data">
        <ol>
          <li v-for="(game,index) in data.games" :key="index">{{ game }}</li>
        </ol>
      </template>
    </Category>

    <Category title="games">
      <template scope="data">
        <h4>
          <li v-for="(game,index) in data.games" :key="index">{{ game }}</li>
        </h4>
      </template>
    </Category> -->

    <!-- <Category title="films">
      <video slot="bottom" src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <a slot="footer" href="#">more</a>
    </Category> -->


    <Count/>
    <Person/>
  </div>
</template>

<script>
// import axios from 'axios'
// import Category from './components/Category.vue'
import Count from './components/Count.vue';
import Person from './components/Person.vue';
export default {
  name: 'App',
  components: {Count,Person},
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
}

</style>
