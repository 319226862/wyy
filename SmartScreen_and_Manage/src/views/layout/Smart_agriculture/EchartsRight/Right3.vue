<template>
    <div id="Right3">
        <p>人员状态统计</p>
        <div id="Right3Echart" :style="{width: '100%', height: 'calc( 100% - 30px ) '}"></div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            dataName:['外出务工人员', '学生', '暂时外出人员'],
            data : [],
            data1 : [60,20,10],
            data2 : [40,40,20],
            colorList : [],
        }
    },
    created(){
    },
    mounted(){
        this.drawEchart()
    },
    methods:{
        drawEchart(){
            this.data = this.data1
            this.drawLine()
        },
        drawLine(){
            let _this = this;
            _this.colorList[0] = _this.$echarts.graphic.LinearGradient(
                0, 0, 1, 0,
                [
                    {offset: 0, color: '#0275f2'},
                    {offset: 1, color: '#24dcfe'}
                ]
            )
            _this.colorList[1] = _this.$echarts.graphic.LinearGradient(
                0, 0, 1, 0,
                [
                    {offset: 0, color: '#7b6d00'},
                    {offset: 1, color: '#f5cf00'}
                ]
            )
            _this.colorList[2] = _this.$echarts.graphic.LinearGradient(
                0, 0, 1, 0,
                [
                    {offset: 0, color: '#008491'},
                    {offset: 1, color: '#00dabf'}
                ]
            )
            // console.log("----------",_this.colorList)
            _this.myChartRight3 = _this.$echarts.init(document.getElementById("Right3Echart"));
            _this.myChartRight3.setOption({
                backgroundColor: "rgba(0,0,0,0)",
                grid: {
                    top:'4%',
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    splitLine: {
                        show: false,
                    },
                    offset: 10,
                    axisTick: {
                        show: false,
                    },
                    axisLine: {
                        show: false,
                    },
                    axisLabel: {
                        show: false,
                    },
                },
                yAxis: {
                    type: 'category',
                    inverse: true,
                    axisLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        inside:true,
                        // verticalAlign: 'top'
                    },
                    data: this.dataName
                },
                series: [
                    {
                        type: 'bar',
                        barWidth: '30px',
                        itemStyle: {
                            normal: {
                                color: function(params) {
                                    // console.log(_this.colorList[params.dataIndex])
                                    return _this.colorList[params.dataIndex]
                                }
                            }
                        },
                        label: {
                            show: true,
                            position: 'right',
                            // distance: 20,
                            offset:[0,28],
                            fontSize: 18,
                            color: '#fff',
                            formatter: '{c}%'
                        },
                        z:9999,
                        data: _this.data
                    },
                    {
                        type: 'bar',
                        // type: 'pictorialBar',
                        barWidth: '30px',
                        barGap: '-100%', 
                        z: 99,
                        itemStyle: {
                            normal: {
                                color: '#30373f'
                            }
                        },
                        label: {
                            show: true,
                            position: 'insideBottomLeft',
                            // distance: 20,
                            offset:[-6,-30],
                            fontSize: 18,
                            color: '#caced1',
                            formatter: '{b}'
                        },
                        data: [100,100,100]
                    },
                    {
                        type: 'pictorialBar',
                        itemStyle: {
                            normal: {
                                color: '#100c29',
                            },
                        },
                        symbolRepeat: 'fixed',
                        symbolMargin: 2,
                        symbol: 'rect',
                        symbolClip: true,
                        symbolSize: [4, 30],
                        symbolPosition: 'start',
                        symbolOffset: [-4, 0],
                        data: [100, 100, 100],
                        width: 25,
                        z: 0,
                        zlevel: 1,
                    },
                ]
            },true)
            // echarts随窗口变化自适应
            window.addEventListener("resize",()=>{
                this.myChartRight3.resize();
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
                this.data = this.data1
                this.drawLine()
            }
            if(newVal==2){
                this.data = this.data2
                this.drawLine()
            }
        }
    }
}
</script>

<style lang="scss" scoped>
#Right3{
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
#Right3::before{
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
#Right3::after{
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