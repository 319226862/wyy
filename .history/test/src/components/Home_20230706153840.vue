<template>
    <div>home
        <router-link to="/news">news</router-link>
        <router-link to="/message">message</router-link>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style>

</style>