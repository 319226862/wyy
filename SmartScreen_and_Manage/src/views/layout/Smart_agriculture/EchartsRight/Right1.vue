<template>
    <div id="Right1">
        <p>文旅宣传</p>
        <div id="Right1Echart" :style="{width: '100%', height: 'calc( 100% - 30px ) '}">
            <el-carousel :interval="100000" type="card" height="200px">
                <el-carousel-item v-for="(item,index) in Right1List" :key="index">
                    <video :src="item.video" style="width:100%;height:100%;" autoplay controls />
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            Right1List:[
                {
                    "video":require("../../../../assets/video1.mp4"),
                    "name":"宣传视频1"
                },
                {
                    "video":require("../../../../assets/video2.mp4"),
                    "name":"宣传视频1"
                },
                {
                    "video":require("../../../../assets/video3.mp4"),
                    "name":"宣传视频1"
                },
                // {
                //     "img":require("../../../../assets/plant4.jpg"),
                //     "name":"宣传视频1"
                // },
                // {
                //     "img":require("../../../../assets/plant5.jpg"),
                //     "name":"宣传视频1"
                // },
            ]
        }
    },
    created(){
    },
    mounted(){
    },
    methods:{
        
    },
    beforeDestroy() {
    },
    watch:{
        
    }
}
</script>

<style lang="scss" scoped>
#Right1{
    width: 100%;
    height: 30%;
    position: relative;
    p{
        margin-left: 30px;
        margin-top: 10px;
        font-weight: 200;
        font-size: 18px;
        letter-spacing: 2px;
        color: white;
        padding-left: 10px;
        height: 30px;
        line-height: 30px;
        width: 100%;
        display: inline-block;
        border-left: 3px rgba(40, 129, 200,1) solid;
        border-bottom: 1px solid rgba(178, 186, 188,0.3);
    }
}
#Right1::before{
    display: block;
    position: absolute;
    top: -5px;
    left: -2px;
    background-image: url("~@/assets/border.png");
    transform: rotate(180deg);
    content: '';
    width: 111px;
    height: 35px;
}
#Right1::after{
    display: block;
    position: absolute;
    bottom: -5px;
    right: -2px;
    background-image: url("~@/assets/border.png");
    content: '';
    width: 111px;
    height: 35px;
}
#Right1Echart{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
}

</style>