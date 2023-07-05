<template>
    <div>
        <input type="text" >
        <!-- 1 -->
        <!-- <ul v-for="person in $store.state.personList" :key="person.id">
            <li>{{ person.name }}</li>
        </ul> -->
        <!-- 2 -->
        <ul v-for="person in personList" :key="person.id">
            <li>{{ person.name }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Person',
    computed:{
        personList(){
            return this.$store.state.personList
        }
    }
}
</script>

<style>

</style>