<template>
    <div id="Notice">
        <div class="AngleBorder LeftTopBorder"></div>
        <div class="AngleBorder RightTopBorder"></div>
        <div class="AngleBorder LeftBottomBorder"></div>
        <div class="AngleBorder RightBottomBorder"></div>
        <p>公告</p>
        <div id="NoticeEchart" :style="{width: '100%', height: 'calc( 100% - 30px ) '}">
            <el-table
                height="300"
                :data="WarningMeg"
                style="width: 90%;height:250px;overflow:scroll;margin:0 auto;">
                <el-table-column
                    prop="address"
                    label="监控点位置"
                    min-width="33%">
                </el-table-column>
                <el-table-column
                    prop="time"
                    label="报警时间"
                    min-width="33%">
                </el-table-column>
                <el-table-column
                    prop="message"
                    label="报警分析"
                    min-width="33%">
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
                    address:"监控点1",
                    message:"车辆占道"
                },
                {
                    time:"2018-01-02",
                    address:"监控点2",
                    message:"垃圾堆满"
                },
                {
                    time:"2018-01-03",
                    address:"监控点3",
                    message:"车辆占道"
                },
                {
                    time:"2018-01-01",
                    address:"监控点4",
                    message:"人员摔倒"
                },
                {
                    time:"2018-01-02",
                    address:"监控点5",
                    message:"车祸"
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
#Notice{
    width: 100%;
    height: 33%;
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
}
#Notice::before{
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
#Notice::after{
    display: block;
    position: absolute;
    bottom: -5px;
    right: -2px;
    background-image: url("~@/assets/border.png");
    content: '';
    width: 111px;
    height: 35px;
}
#NoticeEchart /deep/ .el-table{
    color: white;
    background-color: rgba(0,0,0,0);
    // 隐藏scroll
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    ::-webkit-scrollbar {
        display: none;
    }
}
#NoticeEchart /deep/ tr{
    background-color: inherit;
}
// 移入效果
#NoticeEchart /deep/ tr:hover>td{
    background-color: #304156;
}
#NoticeEchart /deep/ .is-leaf{
    border: none;
}
#NoticeEchart /deep/ .el-table::before{
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0;
}
#NoticeEchart /deep/ th{
    color: white;
    font-size: 22px;
    line-height: 22px;
}
</style>