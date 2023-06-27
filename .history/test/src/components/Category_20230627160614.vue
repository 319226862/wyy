<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <slot :games="games">默认值1</slot>
    </div>
</template>

<script>
export default {
    name:'Category',
    props:['title'],
    data(){
    return {
      msg:'welcome',
      foods:['1','2','3','4'],
      games:['11','22','33','44'],
      films:['111','222','333','444'],
      video:'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
      img:'https://s3.ax1x.com/2021/01/16/srJlq0.jpg'
    }
  },
}
</script>

<style>
.category{
    width: 100px;
    height: 200px;
}
</style>