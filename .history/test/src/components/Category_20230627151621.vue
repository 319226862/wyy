<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <!-- <ul>
            <li v-for="(item,index) in listData" :key="index">{{ item }}</li>
        </ul> -->
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'Category',
    props:['title']
}
</script>

<style>
.category{
    width: 100px;
    height: 200px;
}
</style>