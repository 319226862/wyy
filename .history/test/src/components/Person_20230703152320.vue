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
import {mapState} from 'vuex'
export default {
    name: 'Person',
    computed:{
        // 2
        // personList(){
        //     return this.$store.state.personList
        // }
        ...mapState({
            personList:'personList'
        })
    }
}
</script>

<style>

</style>