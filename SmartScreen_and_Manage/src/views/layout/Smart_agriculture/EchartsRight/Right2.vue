<template>
    <div id="Right2">
        <p>村民统计</p>
        <div id="Right2Echart" :style="{width: '100%', height: 'calc( 100% - 30px ) '}"></div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            seriesDataAge:[],
            seriesDataAge1 : [{
                name: "儿童",
                value: "20"
            }, {
                name: "青年",
                value: "5"
            }, {
                name: "中年",
                value: "10"
            }, {
                name: "老年",
                value: "65"
            }],
            seriesDataAge2 : [{
                name: "儿童",
                value: "30"
            }, {
                name: "青年",
                value: "25"
            }, {
                name: "中年",
                value: "15"
            }, {
                name: "老年",
                value: "30"
            }],
            legendDataAge1 : ["儿童", "青年", "中年", "老年"],
            colorList : ['#5C7BD9', '#91CC75', '#FAC858', '#EE6666'],
        }
    },
    created(){
    },
    mounted(){
        this.drawEchart()
    },
    methods:{
        drawEchart(){
            this.seriesDataAge = this.seriesDataAge1
            this.drawLine()
        },
        drawLine(){
            this.myChartRight2 = this.$echarts.init(document.getElementById("Right2Echart"));
            this.myChartRight2.setOption({
                backgroundColor: "rgba(0,0,0,0)",
                tooltip: {
                    trigger: 'item',
                    borderColor: 'rgba(255,255,255,.3)',
                    padding: 5,
                    formatter: function(parms) {
                        var str = parms.marker + "" + parms.data.name + "</br>" +
                            "数量：" + parms.data.value + "</br>" +
                            "占比：" + parms.percent + "%";
                        return str;
                    }
                },
                // 图例的小方块
                legend: [{
                    itemWidth:15,
                    itemHeight: 12,
                    orient: 'vertical',
                    // type: "scroll",
                    // icon:'rectangle',
                    align: 'left',
                    top: '15%',
                    right:"10%",
                    itemGap: 22,
                    // bottom:'50%',
                    textStyle: {
                        fontSize:16,
                        color: '#fff'
                    },
                    data: this.legendDataAge
                }],
                series: [{
                    type: 'pie',
                    z: 5,
                    center: ['40%', '45%'],
                    radius: ['30%', '47%'],
                    clockwise: true,
                    avoidLabelOverlap: true,
                    hoverOffset: 20,
                    label: {
                        show: true,
                        position: 'outside',
                        formatter: '{a|{b}：{d}%}\n{hr|}',
                        rich: {
                            // hr: {
                            //     backgroundColor: 't',
                            //     borderRadius: 3,
                            //     width: 3,
                            //     height: 3,
                            //     padding: [3, 3, 0, -12]
                            // },
                            a: {
                                color:'#fff',
                                padding: [0, -50, 5, -70]
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            length: 15,//第一段线长
                            length2: 100,//第2段线长
                            lineStyle: {
                                width: 2
                            }
                        }
                    },
                    data: this.seriesDataAge
                }]
            },true)
            // echarts随窗口变化自适应
            window.addEventListener("resize",()=>{
                this.myChartRight2.resize();
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
                this.seriesDataAge = this.seriesDataAge1
                this.drawLine()
            }
            if(newVal==2){
                this.seriesDataAge = this.seriesDataAge2
                this.drawLine()
            }
        }
    }
}
</script>

<style lang="scss" scoped>
#Right2{
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
#Right2::before{
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
#Right2::after{
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