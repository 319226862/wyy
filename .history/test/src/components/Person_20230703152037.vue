<template>
    <div>
        <input type="text" >
        <ul v-for="person in $store.state.personList" :key="person.id">
            <li>{{ person.name }}</li>
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