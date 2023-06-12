<template>
    <div id="Left2">
        <p>文明治理</p>
        <div id="Left2Echart" :style="{width: '100%', height: 'calc( 100% - 30px ) '}"></div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            myChart:'',
            titleArr : ['第一季度', '第二季度', '第三季度', '第四季度'],
            allArr1 : [1, 3, 5, 7],
            chuqinArr1 : [2, 8, 4, 6],
            allArr2 : [0, 5, 8, 3],
            chuqinArr2 : [8, 6, 1, 4],
            allArr : [],
            chuqinArr: []
        }
    },
    created(){
    },
    mounted(){
        this.drawEchart()
    },
    methods:{
        drawEchart(){
            this.allArr = this.allArr1
            this.chuqinArr = this.chuqinArr1
            this.drawLine()
        },
        drawLine(){
            this.myChartLeft2 = this.$echarts.init(document.getElementById("Left2Echart"));
            this.myChartLeft2.setOption({
                backgroundColor: "rgba(0,0,0,0)",
                legend: {
                    top: '5%',
                    data: ['垃圾清理', '农户环境'],
                    textStyle: {
                    color: '#fff'
                    },
                },
                grid: {
                    top: '10%',
                    left: '0%',
                    right: '5%',
                    bottom: '10%',
                    containLabel: true,
                },
                xAxis: [
                    {
                    type: 'category',
                    data: this.titleArr,
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLabel: {
                        color: '#fff'
                    }
                    }
                ],
                yAxis: [
                    {
                    show: false,
                    type: 'value',
                    name: '单位（万元）',
                    min: 0,
                    max: 10,
                    interval: 2,
                    axisLabel: {
                        formatter: '{value}',
                        color: '#fff'
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                        color: "#053c89"
                        }
                    }
                    },
                ],
                series: [
                    {
                    name: '垃圾清理',
                    type: 'bar',
                    barWidth: 20,
                    yAxisIndex: 0,
                    tooltip: {
                        show: false
                    },
                    itemStyle: {
                        "normal": {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                            offset: 0, color: '#AF9003' // 0% 处的颜色
                            }, {
                            offset: 1, color: '#FFD826' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        },
                        }
                    },
                    data: this.allArr,
                    },
                    {
                    name: "垃圾清理",
                    type: "pictorialBar",
                    yAxisIndex: 0,
                    symbolSize: [20, 10],//调整截面形状
                    symbolOffset: [-15, -5],
                    z: 12,
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            left: '15',
                            padding:[0,32,0,0],
                            // fontSize: 15,
                            // fontWeight: 'bold',
                            color: '#FFD412',
                        },
                    },
                    tooltip: {
                        show:true,
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    symbolPosition: "end",
                    "itemStyle": {
                        "normal": {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                            offset: 0, color: '#FFD412' // 0% 处的颜色
                            }, {
                            offset: 1, color: '#FFD412' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        },
                        }
                    },
                    data: this.allArr,
                    },
                    {
                    name: '农户环境',
                    type: 'bar',
                    barWidth: 20,
                    yAxisIndex: 0,
                    barGap: '50%',
                    tooltip: {
                        show: false
                    },
                    itemStyle: {
                        "normal": {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                            offset: 0, color: '#027463' // 0% 处的颜色
                            }, {
                            offset: 1, color: '#0DF5AB' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        },
                        }
                    },
                    data: this.chuqinArr,
                    },
                    {
                    name: "农户环境",
                    type: "pictorialBar",
                    yAxisIndex: 0,
                    symbolSize: [20, 10],//调整截面形状
                    symbolOffset: [15, -5],
                    z: 12,
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            padding:[0,0,0,32],
                            // fontSize: 15,
                            // fontWeight: 'bold',
                            color: '#0BE09F',
                        },
                    },
                    tooltip: {
                        show: false
                    },
                    symbolPosition: "end",
                    "itemStyle": {
                        "normal": {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                            offset: 0, color: '#0BE09F' // 0% 处的颜色
                            }, {
                            offset: 1, color: '#0BE09F' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        },
                        }
                    },
                    data: this.chuqinArr,
                    },
                ]
            },true)
            // echarts随窗口变化自适应
            window.addEventListener("resize",()=>{
                this.myChartLeft2.resize();
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
                this.allArr = this.allArr1
                this.chuqinArr = this.chuqinArr1
                this.drawLine()
            }
            if(newVal==2){
                this.allArr = this.allArr2
                this.chuqinArr = this.chuqinArr2
                this.drawLine()
            }
        }
    }
}
</script>

<style lang="scss" scoped>
#Left2{
    width: 100%;
    height: 33%;
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
#Left2::before{
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
#Left2::after{
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