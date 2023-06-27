<template>
    <div class="category">
        <h3>{{title}}</h3>
        <ul>
            <li>******</li>
            <li>******</li>
            <li>******</li>
            <li>******</li>
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