<template>
    <div id="Center1">
        <div class="AngleBorder LeftTopBorder"></div>
        <div class="AngleBorder RightTopBorder"></div>
        <div class="AngleBorder LeftBottomBorder"></div>
        <div class="AngleBorder RightBottomBorder"></div>
        <p>公告</p>
        <div id="Center1Echart" :style="{width: '100%', height: 'calc( 100% - 30px ) '}">
            <el-table
                height="300"
                :data="WarningMeg"
                style="width: 90%;height:300px;overflow:scroll;margin:0 auto;">
                <el-table-column
                    prop="time"
                    label="发布时间"
                    min-width="30%">
                </el-table-column>
                <!-- <el-table-column
                    prop="address"
                    label="报警地点"
                    min-width="33%">
                </el-table-column> -->
                <el-table-column
                    prop="message"
                    label="公告详情"
                    min-width="69%">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            WarningMeg:[
                {
                    time:"2018-01-01",
                    address:"dfjhdhfj",
                    message:"1997年11月，张定宇同志曾响应国家号召，随中国医疗队出征，援助阿尔及利亚。2008年5月14日，四川汶川地震第三天，张定宇同志就带领湖北省第三医疗队出现于重灾区什邡市，全力抢救伤员。"
                },
                {
                    time:"2018-01-02",
                    address:"11",
                    message:"1997年11月，张定宇同志曾响应国家号召，随中国医疗队出征，援助阿尔及利亚。2008年5月14日，四川汶川地震第三天，张定宇同志就带领湖北省第三医疗队出现于重灾区什邡市，全力抢救伤员。"
                },
                {
                    time:"2018-01-03",
                    address:"33",
                    message:"12"
                },
                {
                    time:"2018-01-01",
                    address:"dfjhdhfj",
                    message:"1997年11月，张定宇同志曾响应国家号召，随中国医疗队出征，援助阿尔及利亚。2008年5月14日，四川汶川地震第三天，张定宇同志就带领湖北省第三医疗队出现于重灾区什邡市，全力抢救伤员。"
                },
                {
                    time:"2018-01-02",
                    address:"11",
                    message:"erererererere"
                },
                {
                    time:"2018-01-02",
                    address:"11",
                    message:"erererererere"
                },
                {
                    time:"2018-01-02",
                    address:"11",
                    message:"erererererere"
                },
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
#Center1{
    width: 100%;
    height: 50%;
    position: relative;
    margin-bottom: 10px;
    // 隐藏scroll
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    ::-webkit-scrollbar {
        display: none;
    }
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
    .AngleBorder{
        position: absolute;
        width: 20px;
        height: 20px;
    }
    .LeftTopBorder{
        top: 0;
        left: 0;
        border-left: 4px solid #2c91f8;
        border-top: 4px solid #2c91f8;
    }
    .RightTopBorder{
        top: 0;
        right: 0;
        border-right: 4px solid #2c91f8;
        border-top: 4px solid #2c91f8;
    }
    .LeftBottomBorder{
        bottom: 0;
        left: 0;
        border-left: 4px solid #2c91f8;
        border-bottom: 4px solid #2c91f8;
    }
    .RightBottomBorder{
        right: 0;
        bottom: 0;
        border-right: 4px solid #2c91f8;
        border-bottom: 4px solid #2c91f8;
    }
}
#Center1Echart /deep/ .el-table{
    color: white;
    background-color: rgba(0,0,0,0);
    // 隐藏scroll
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    ::-webkit-scrollbar {
        display: none;
    }
}
// 背景色
#Center1Echart /deep/ tr{
    background-color: rgba(0,0,0,0);
}
#Center1Echart /deep/ .el-table>tr{
    background-color: rgba(0,0,0,0);
}
// 移入效果
#Center1Echart /deep/ tr:hover>td{
    background-color: #304156;
}
#Center1Echart /deep/ .is-leaf{
    border: none;
}
#Center1Echart /deep/ .el-table::before{
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0;
}
#Center1Echart /deep/ th{
    color: white;
    font-size: 22px;
    line-height: 22px;
}
</style>
<style>
.el-table th, .el-table tr{
    background-color: inherit;
}
</style>