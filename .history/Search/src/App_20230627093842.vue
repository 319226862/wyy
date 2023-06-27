<template>
  <div class="container">
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search"/>&nbsp;<button>Search</button>
      </div>
    </section>
    <div class="row">
      <div class="card">
        <a href="https://github.com/xxxxxx" target="_blank">
          <img src="https://cn.vuejs.org/images/logo.svg" style='width: 100px'/>
        </a>
        <p class="card-text">xxxxxx</p>
      </div>
      <div class="card">
        <a href="https://github.com/xxxxxx" target="_blank">
          <img src="https://cn.vuejs.org/images/logo.svg" style='width: 100px'/>
        </a>
        <p class="card-text">xxxxxx</p>
      </div>
      <div class="card">
        <a href="https://github.com/xxxxxx" target="_blank">
          <img src="https://cn.vuejs.org/images/logo.svg" style='width: 100px'/>
        </a>
        <p class="card-text">xxxxxx</p>
      </div>
      <div class="card">
        <a href="https://github.com/xxxxxx" target="_blank">
          <img src="https://cn.vuejs.org/images/logo.svg" style='width: 100px'/>
        </a>
        <p class="card-text">xxxxxx</p>
      </div>
      <div class="card">
        <a href="https://github.com/xxxxxx" target="_blank">
          <img src="https://cn.vuejs.org/images/logo.svg" style='width: 100px'/>
        </a>
        <p class="card-text">xxxxxx</p>
      </div>
    </div>
  </div>
</template>

<script>
import List from './components/List.vue'
import Search from './components/Search.vue'
export default {
  name: 'App',
  components: {
    List,
    Search
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
