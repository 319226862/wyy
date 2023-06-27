<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <slot name="bottom">默认值1</slot>
        <slot name="fotter">默认值2</slot>
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