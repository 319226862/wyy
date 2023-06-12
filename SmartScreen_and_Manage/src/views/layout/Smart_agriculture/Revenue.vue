<template>
    <div id="Revenue">
        <p>经济效益</p>
        <div id="RevenueEchart" :style="{width: '100%', height: 'calc( 100% - 30px ) '}"></div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            dataAll:[],
            dataAverage:[],
            dataAll1:[70 ,90,100,120,135],
            dataAverage1:[1, 1.2, 2.2, 2.8, 3],
            dataAll2:[60 ,100,110,120,140],
            dataAverage2:[1, 1.5, 2, 2.4, 4],
            dataList:[2018,2019,2020,2021,2022],
        }
    },
    created(){
    },
    mounted(){
        this.drawEchart()
    },
    methods:{
        drawEchart(){
            this.dataAll = this.dataAll1
            this.dataAverage = this.dataAverage1
            this.drawLine()
        },
        drawLine(){
            let _this = this;
            _this.myChartRevenue = _this.$echarts.init(document.getElementById("RevenueEchart"));
            _this.myChartRevenue.setOption({
                backgroundColor: "rgba(0,0,0,0)",
                grid: {
                    top: 50,
                    right: 30,
                    bottom: 30,
                    left: 30,
                    containLabel: true
                },
                legend: {
                    data: [
                        {
                            name: '村总收入',
                            textStyle: {
                            color: '#ffffff'
                            },
                            itemStyle: {
                            color: '#2AECFF'
                            }
                        },
                        {
                            name: '村人均收入',
                            textStyle: {
                            color: '#ffffff'
                            },
                            itemStyle: {
                            color: '#FFE600'
                            }
                        }
                    ],
                    icon: 'rect',
                    itemWidth: 10,
                    itemHeight: 10,
                    itemGap: 5,
                    top: 20
                },
                xAxis: {
                    data: this.dataList,
                    axisLabel: {
                        color: '#ffffff',
                        // interval: index => [0, 9, 19, 29].includes(index)
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(42, 236, 255, 0.44)',
                            width: 0.8
                        }
                    }
                },
                yAxis: [
                    {
                        type: 'value',
                        splitNumber: 4,
                        axisLabel: {
                            color: '#ffffff'
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                            color: 'rgba(42, 236, 255, 0.44)',
                            width: 1.5
                            }
                        },
                        splitLine: {
                            lineStyle: {
                            color: 'rgba(17,110,129,0.36)',
                            type: 'dashed'
                            }
                        },
                        name: '单位：万元',
                        nameGap: 18,
                        nameTextStyle: {
                            fontSize: 10,
                            color: '#ffffff',
                            padding: [0, 0, 0, -30]
                        }
                    },
                    {
                        type: 'value',
                        splitNumber: 2,
                        splitLine: {
                            show: false
                        },
                        axisLabel: {
                            color: '#ffffff'
                        },
                        name: '单位：万元',
                        nameGap: 18,
                        nameTextStyle: {
                            fontSize: 10,
                            color: '#ffffff'
                        }
                    }
                ],
                series: [
                    {
                        name: '村总收入',
                        yAxisIndex: 0,
                        type: 'bar',
                        barWidth:25,
                        data: this.dataAll,
                        itemStyle: {
                            normal: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: -0.2,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: 'rgba(42, 236, 255, 1)'
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(42, 234, 254, 0.13)'
                                    }
                                ]
                            }
                            }
                        }
                    },
                    {
                        name: '村人均收入',
                        yAxisIndex: 1,
                        type: 'line',
                        data: this.dataAverage,
                        symbol: 'none',
                        lineStyle: {
                            color: '#ffd918'
                        },
                        areaStyle: {
                            color: {
                            type: 'linear',
                            x: 0,
                            y: -0.2,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: 'rgba(255, 230, 0, 0.54)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(255, 230, 0, 0)'
                                }
                            ]
                            }
                        }
                    }
                ]
            },true)
            // echarts随窗口变化自适应
            window.addEventListener("resize",()=>{
                this.myChartRevenue.resize();
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
                this.dataAll = this.dataAll1
                this.dataAverage = this.dataAverage1
                this.drawLine()
            }
            if(newVal==2){
                this.dataAll = this.dataAll2
                this.dataAverage = this.dataAverage2
                this.drawLine()
            }
        }
    }
}
</script>

<style lang="scss" scoped>

#Revenue{
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
#Revenue::before{
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
#Revenue::after{
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