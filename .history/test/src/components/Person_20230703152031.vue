<template>
    <div>
        <input type="text" >
        <ul v-for="person in $store.state.personList" :key="person.id">
            <li>{{ person }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Person'
}
</script>

<style>

</style>