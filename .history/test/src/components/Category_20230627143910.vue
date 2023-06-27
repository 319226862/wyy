<template>
    <div class="category">
        <h3>{{title}}</h3>
        <ul>
            <li v-for="item in listData">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'Category',
    props:['listData','title']
}
</script>

<style>
.category{
    width: 100px;
    height: 200px;
}
</style>