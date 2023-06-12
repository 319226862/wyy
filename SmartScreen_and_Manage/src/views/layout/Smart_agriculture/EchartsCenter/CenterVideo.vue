<template>
    <div id="CenterVideo">
        <!--  @change="CarouselChange" -->
        <el-carousel class="myCarousel" :autoplay="false" arrow="always" height="610px" trigger="click">
            <el-carousel-item v-for="(item,index) in CenterVideoList" :key="index">
                <video :src="item.src" width="100%" autoplay controls></video>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    data(){
        return{
            CenterVideoList:[
                {
                    "src":require("../../../../assets/video1.mp4")
                },
                {
                    "src":require("../../../../assets/video2.mp4")
                },
                {
                    "src":require("../../../../assets/video3.mp4")
                },
            ]
        }
    },
    mounted(){
    },
    methods:{
        // CarouselChange(now, next){
        //     // console.log(now, next)
        // }
    }
}
</script>

<style lang="scss" scoped>
video{
    object-fit: fill;
}
.myCarousel /deep/ .el-carousel__indicator:nth-child(1){
    background-image: url("~@/assets/videoPage3.png");
}
.myCarousel /deep/ .el-carousel__indicator:nth-child(2){
    background-image: url("~@/assets/videoPage1.png");
}
.myCarousel /deep/ .el-carousel__indicator:nth-child(3){
    background-image: url("~@/assets/videoPage2.png");
}
.myCarousel /deep/ .el-carousel__indicators{
    width: 100%;
    left: 75%;
}
.myCarousel /deep/ .el-carousel__indicator{
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    width: 120px;
    height: 90px;
    display: inline-block;
    margin-left: 10px;
}
.myCarousel /deep/ .el-carousel__button{
    display: none;
}
.myCarousel /deep/ .el-carousel__container>button{
    margin-top: 260px;
}
</style>