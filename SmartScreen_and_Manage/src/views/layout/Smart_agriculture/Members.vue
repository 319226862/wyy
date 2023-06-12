<template>
    <div id="Members">
        <p>年龄和学历分布</p>
        <div id="MembersEcharts">
            <div id="MembersEchart1" :style="{width: '49%', height: 'calc( 100% - 30px ) '}"></div>
            <div id="MembersEchart2" :style="{width: '49%', height: 'calc( 100% - 30px ) '}"></div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            dataAgeName:['0-10', '11-18', '19-35', '35-60','60及以上'],
            dataDegreeName:['小学及以下','小学','初中','高中','本科'],
            dataAge:[],
            dataDegree:[],
            dataAge1 : [50,30,10,100,30],
            dataDegree1 : [50,30,10,100,30],
            dataAge2 : [60,50,20,80,30],
            dataDegree2 : [60,50,20,80,30],
        }
    },
    created(){
    },
    mounted(){
        this.drawEchart()
    },
    methods:{
        drawEchart(){
            this.dataAge = this.dataAge1
            this.dataDegree = this.dataDegree1
            this.drawLine()
        },
        drawLine(){
            let _this = this;
            _this.myChartMembers1 = _this.$echarts.init(document.getElementById("MembersEchart1"));
            _this.myChartMembers2 = _this.$echarts.init(document.getElementById("MembersEchart2"));
            _this.myChartMembers1.setOption({
                backgroundColor: "rgba(0,0,0,0)",
                tooltip: {},
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    top: '3%',
                    containLabel: true,
                },
                xAxis: {
                    show:false,
                    type: 'value',
                    max:120,
                    // 不显示轴线
                    axisLine :{
                        show:false
                    },
                    // 不显示刻度线
                    axisTick:{
                        show:false,
                    },
                    splitLine:{// 网格线为虚线
                    show:false,
                    },
                    // axisLabel:{
                    //     formatter:'{value}%'
                    // }
                },
                yAxis: {
                    type: 'category',
                    inverse: true,
                    splitLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLine: {
                        show: false,
                    },
                    axisLabel: {  	     
                        interval: 0,  
                        color:'rgba(255, 255, 255, 1)',
                        fontSize: 14
                    },
                    data: _this.dataAgeName,
                },
                series: [
                    {
                        type: 'bar',
                        barWidth: 12,
                        zlevel: 2,
                        barGap: '-150%',
                        itemStyle: {
                            normal: {
                                borderRadius: [0, 6, 6, 0],
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 1,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: 'rgba(61, 131, 255, 0)'
                                    }, {
                                        offset: 1, color: 'rgba(72, 240, 255, 1)'
                                    }]
                                }
                            },
                        },
                        data: _this.dataAge,
                    },
                ],
            },true)
            _this.myChartMembers2.setOption({
                backgroundColor: "rgba(0,0,0,0)",
                tooltip: {},
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    top: '3%',
                    containLabel: true,
                },
                xAxis: {
                    show:false,
                    type: 'value',
                    max:120,
                    // 不显示轴线
                    axisLine :{
                        show:false
                    },
                    // 不显示刻度线
                    axisTick:{
                        show:false,
                    },
                    splitLine:{// 网格线为虚线
                    show:false,
                    },
                    // axisLabel:{
                    //     formatter:'{value}%'
                    // }
                },
                yAxis: {
                    type: 'category',
                    inverse: true,
                    splitLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLine: {
                        show: false,
                    },
                    axisLabel: {  	     
                        interval: 0,  
                        color:'rgba(255, 255, 255, 1)',
                        fontSize: 14
                    },
                    data: _this.dataDegreeName,
                },
                series: [
                    {
                        type: 'bar',
                        barWidth: 12,
                        zlevel: 2,
                        barGap: '-150%',
                        itemStyle: {
                            normal: {
                                borderRadius: [0, 6, 6, 0],
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 1,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: 'rgba(61, 131, 255, 0)'
                                    }, {
                                        offset: 1, color: 'rgba(72, 240, 255, 1)'
                                    }]
                                }
                            },
                        },
                        data: _this.dataDegree,
                    },
                ],
            },true)
            // echarts随窗口变化自适应
            window.addEventListener("resize",()=>{
                this.myChartMembers1.resize();
                this.myChartMembers2.resize();
            })
        },
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.resizeEcharts);
    },
    computed:{
        listenChange(){
            return this.$root.activateCountry
        }
    },
    watch:{
        listenChange(newVal){
            if(newVal==1){
                this.dataAge = this.dataAge1
                this.dataDegree = this.dataDegree1
                this.drawLine()
            }
            if(newVal==2){
                this.dataAge = this.dataAge2
                this.dataDegree = this.dataDegree2
                this.drawLine()
            }
        }
    }
}
</script>

<style lang="scss" scoped>

#Members{
    width: 100%;
    height: 33%;
    position: relative;
    #MembersEcharts{
        width: 100%;
        height: calc( 100% - 30px );
        display: flex;
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
}
#Members::before{
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
#Members::after{
    display: block;
    position: absolute;
    bottom: -5px;
    right: -2px;
    background-image: url("~@/assets/border.png");
    content: '';
    width: 111px;
    height: 35px;
}
</style>