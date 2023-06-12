<template>
    <div id="Left1">
        <p>
            志愿服务统计
        </p>
        <div id="Left1Echart" :style="{width: '100%', height: 'calc( 100% - 30px ) '}"></div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            myChart:'',
            noiseData:'',
            fontColor : '#30eee9',
            bgColor : "#040811",
            color : [
                "#2eb4ff",
                "#9b9aea"
            ],
            legendItem : ['党员', '群众'],
            // echartData是用于最终显示效果，echartData1是绑定小沟村的数据，echartData2是绑定之后村的数据
            echartData : [],
            // 用于文明治理评分
            echartData1 : [
                {
                    name: "1月",
                    value1: 1366,
                    value2: 0,
                },
                {
                    name: "2月",
                    value1: 3694,
                    value2: 0,
                },
                {
                    name: "3月",
                    value1: 19727,
                    value2: 1000,
                },
                {
                    name: "4月",
                    value1: 17046,
                    value2: 1000,
                },
                {
                    name: "5月",
                    value1: 14780,
                    value2: 13396,
                },
                {
                    name: "6月",
                    value1: 19359,
                    value2: 13220,
                },
                {
                    name: "7月",
                    value1: 14229,
                    value2: 10836,
                },
                {
                    name: "8月",
                    value1: 13176,
                    value2: 12478,
                },
                {
                    name: "9月",
                    value1: 16515,
                    value2: 12911,
                },
                {
                    name: "10月",
                    value1: 13658,
                    value2: 9479,
                },
                {
                    name: "11月",
                    value1: 16364,
                    value2: 10839,
                },
                {
                    name: "12月",
                    value1: 19973,
                    value2: 10016,
                }
            ],
            echartData2 : [
                {
                    name: "1月",
                    value1: 1,
                    value2: 56,
                },
                {
                    name: "2月",
                    value1: 9,
                    value2: 4567,
                },
                {
                    name: "3月",
                    value1: 1927,
                    value2: 100,
                },
                {
                    name: "4月",
                    value1: 1706,
                    value2: 100,
                },
                {
                    name: "5月",
                    value1: 1470,
                    value2: 1336,
                },
                {
                    name: "6月",
                    value1: 1959,
                    value2: 1320,
                },
                {
                    name: "7月",
                    value1: 1429,
                    value2: 1036,
                },
                {
                    name: "8月",
                    value1: 1376,
                    value2: 1478,
                },
                {
                    name: "9月",
                    value1: 1615,
                    value2: 1211,
                },
                {
                    name: "10月",
                    value1: 1358,
                    value2: 949,
                },
                {
                    name: "11月",
                    value1: 1664,
                    value2: 1039,
                },
                {
                    name: "12月",
                    value1: 1973,
                    value2: 1006,
                }
            ]
        }
    },
    created(){
    },
    mounted(){
        this.drawEchart()
    },
    methods:{
        drawEchart(){
            // 默认为小沟村，所以是直接使用echartData1，不然echarts是空白没有数据
            this.echartData = this.echartData1
            this.drawLine()
        },
        drawLine(){
            let hexToRgba = (hex, opacity) => {
            let rgbaColor = "";
            let reg = /^#[\da-f]{6}$/i;
            if (reg.test(hex)) {
                rgbaColor = `rgba(${parseInt("0x" + hex.slice(1, 3))},${parseInt(
                    "0x" + hex.slice(3, 5)
                )},${parseInt("0x" + hex.slice(5, 7))},${opacity})`;
            }
                return rgbaColor;
            }
            this.myChartLeft1 = this.$echarts.init(document.getElementById("Left1Echart"));
            this.myChartLeft1.setOption({
                backgroundColor: "rgba(0,0,0,0)",
                color: this.color,
                legend: {
                    center: true,
                    top: 10,
                    data: this.legendItem,
                    textStyle: {
                        color: '#00DEFF',
                    },
                },
                tooltip: {
                    trigger: "axis",
                    formatter: function (params) {
                        let html = '';
                        params.forEach(v => {
                            html += `
                            <div style="color: #666;font-size: 14px;line-height: 24px">
                                <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${[v.color]};">
                                </span>
                                ${v.seriesName}.${v.name}
                                <span style="color:${[v.color]};font-weight:700;font-size: 18px">${v.value}
                                </span>`;
                        })
                        return html
                    },
                    extraCssText: 'background: #fff; border-radius: 0;box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);color: #333;',
                },
                grid: {
                    top: 50,
                    bottom: 50,
                    left: 30,
                    right: 30,
                },
                xAxis: [{
                    type: 'category',
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            type: "dashed",
                            color: "rgba(255, 255, 255,0.5)"
                        }
                    },
                    axisLabel: {
                        inside: false,
                        textStyle: {
                            color: 'rgba(255, 255, 255,0.7)', // x轴颜色
                            fontWeight: 'normal',
                            fontSize: '14',
                            lineHeight: 22
                        }
                    },

                    data: this.echartData.map(v => v.name)
                }],
                yAxis: [{
                    show: false,
                }],
                series: [{
                    name: this.legendItem[0],
                    type: "line",
                    smooth: false, //是否平滑
                    symbolSize: 8,
                    zlevel: 3,
                    lineStyle: {
                        normal: {
                            color: this.color[0],
                            shadowBlur: 3,
                            shadowColor: hexToRgba(this.color[0], 0.5),
                            shadowOffsetY: 0
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: this.$echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [{
                                offset: 0,
                                color: hexToRgba(this.color[0], 0.3)
                            },
                            {
                                offset: 1,
                                color: hexToRgba(this.color[0], 0.1)
                            }
                            ],
                            false
                            ),
                            shadowColor: hexToRgba(this.color[0], 0.1),
                            shadowBlur: 10
                        }
                    },
                    data: this.echartData.map(v => v.value1)
                }, {
                    name: this.legendItem[1],
                    type: "line",
                    smooth: false,
                    // showSymbol: false,
                    symbolSize: 8,
                    zlevel: 3,
                    lineStyle: {
                        normal: {
                            color: this.color[1],
                            shadowBlur: 0,
                            shadowColor: hexToRgba(this.color[1], 0.5),
                            shadowOffsetY: 0
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: this.$echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [{
                                offset: 0,
                                color: hexToRgba(this.color[1], 0.3)
                            },
                            {
                                offset: 1,
                                color: hexToRgba(this.color[1], 0.1)
                            }
                            ],
                            false
                            ),
                            shadowColor: hexToRgba(this.color[1], 0.1),
                            shadowBlur: 10
                        }
                    },
                    data:  this.echartData.map(v => v.value2)
                },
                ]
            },true)
            // echarts随窗口变化自适应
            window.addEventListener("resize",()=>{
                this.myChartLeft1.resize();
            })
        }
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
                this.echartData = this.echartData1
                this.drawLine()
            }
            if(newVal==2){
                this.echartData = this.echartData2
                this.drawLine()
            }
        }
    }
}
</script>

<style lang="scss" scoped>
#Left1{
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
#Left1::before{
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
#Left1::after{
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