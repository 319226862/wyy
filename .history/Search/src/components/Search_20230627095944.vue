<template>
  <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" 
        placeholder="enter the name you search"
        v-model="keyWord"
        />&nbsp;<button>Search</button>
      </div>
    </section>
</template>

<script>
export default {
    name:'Search',
    data() {
        return {
            keyWord: '',
        };
    },
}
</script>

<style>

</style>