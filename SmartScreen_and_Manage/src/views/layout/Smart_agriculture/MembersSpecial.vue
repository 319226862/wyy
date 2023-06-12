<template>
    <div id="MembersSpecial">
        <p>重点人群关照</p>
        <div id="MembersSpecialEchart" :style="{width: '100%', height: 'calc( 100% - 30px ) '}"></div>
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
            data:[],
            data1:[
                {
                    value: 39,
                    name: '老'
                },
                {
                    value: 8,
                    name: '弱'
                },
                {
                    value: 40,
                    name: '病'
                },
                {
                    value: 9,
                    name: '残'
                },
            ],
            data2:[
                {
                    value: 50,
                    name: '老'
                },
                {
                    value: 5,
                    name: '弱'
                },
                {
                    value: 30,
                    name: '病'
                },
                {
                    value: 20,
                    name: '残'
                },
            ],
            colorList : ['#10EBE3', '#10A9EB', '#EB9C10', '#ee6666']
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
            let sum = this.data.reduce((per, cur) => per + cur.value, 0)
            let gap = (1 * sum) / 100
            let pieData1 = []
            let pieData2 = []
            let gapData = {
                name: '',
                value: gap,
                itemStyle: {
                    color: 'transparent'
                }
            }
            for (let i = 0; i < this.data.length; i++) {
                // 第一圈数据
                pieData1.push({
                    ...this.data[i],
                    itemStyle: {
                        borderRadius: 10
                    }
                })
                pieData1.push(gapData)

                // 第二圈数据
                pieData2.push({
                    ...this.data[i],
                    itemStyle: {
                        color: this.colorList[i],
                        opacity: 0.21
                    }
                })
                pieData2.push(gapData)
            }
            // console.log(pieData2)

            _this.myChartMembersSpecial = _this.$echarts.init(document.getElementById("MembersSpecialEchart"));
            _this.myChartMembersSpecial.setOption({
                backgroundColor: "rgba(0,0,0,0)",
                tooltip: {
                    show: true,
                    backgroundColor: 'rgba(0, 0, 0,.8)',
                    textStyle: {
                        color: '#fff'
                    }
                },
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
                    data: this.data
                }],
                // legend: {
                //     show: true,
                //     right: '0',
                //     top: 'center',
                //     align: 'left',
                //     // itemGap: 18,
                //     // 图例色块的宽高
                //     itemWidth: 13,
                //     itemHeight: 10,
                //     // symbolKeepAspect: false,
                //     textStyle: {
                //         color: 'white',
                //         rich: {
                //             name: {
                //                 verticalAlign: 'right',
                //                 align: 'right',
                //                 width: 10,
                //                 fontSize: 14,
                //                 color: '#D8DDE3'
                //             },
                //             percent: {
                //                 padding: [0, 0, 0, 8],
                //                 color: '#D8DDE3'
                //             }
                //         },
                //         // borderWidth: 53 // 间距的宽度
                //     },
                //     formatter: name => {
                //         const item = this.data.find(i => {
                //             return i.name === name
                //         })
                //         const p = ((item.value / sum) * 100).toFixed(0)
                //         return '{name|' + name + '}' + '{percent|' + p + '}' + '个'
                //     }
                // },
                grid: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                color: this.colorList,
                series: [
                    {
                        name: '',
                        type: 'pie',
                        roundCap: true,
                        radius: ['75%', '80%'],
                        center: ['36%', '45%'],
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                        data: pieData1
                    },
                    {
                        type: 'pie',
                        radius: ['70%', '54%'],
                        center: ['36%', '45%'],
                        gap: 1.71,
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                        silent: true,
                        data: pieData2
                    },
                    {
                        type: 'pie',
                        center: ['80%', '45%'],
                        radius: [0, '45.6%'],
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                        itemStyle: {
                            color: 'rgba(75, 126, 203,.1)'
                        },
                        silent: true,
                        data: [
                            {
                                value: 100,
                                name: ''
                            }
                        ]
                    }
                ]
            },true)
            // echarts随窗口变化自适应
            window.addEventListener("resize",()=>{
                this.myChartMembersSpecial.resize();
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

#MembersSpecial{
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
#MembersSpecial::before{
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
#MembersSpecial::after{
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