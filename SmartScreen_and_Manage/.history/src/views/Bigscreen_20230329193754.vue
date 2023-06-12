<template>
    <div class="App">
        <div class="home" ref="appRef">
            <div class="bigscreen">
                <!-- <Map></Map> -->
                <div class="headerTab">
                    <div class="TabChange">
                        <div class="block">
                            <el-cascader
                                placeholder="小沟村"
                                popper-class="cascaderStyle"
                                v-model="value"
                                :options="options"
                                @change="changeEcharts">
                            </el-cascader>
                        </div>
                    </div>
                    <p>保康县城关镇小沟村数字乡村平台</p>
                </div>
                <div class="content">
                    <div class="container contentLeft">
                        <!-- <List1></List1> -->
                        <Members></Members>
                        <MembersSpecial></MembersSpecial>
                        <Revenue></Revenue>
                        <!-- <Left1></Left1> -->
                        <!-- <Left2></Left2> -->
                    </div>
                    <div class="container contentCenter">
                        <CenterVideo></CenterVideo>
                        <!-- <Map></Map> -->
                        <Center1></Center1>
                    </div>
                    <div class="container contentRight">
                        <Right1></Right1>
                        <Notice></Notice>
                        <Right2></Right2>
                        <!-- <Right3></Right3> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import $global_ from './global.vue'
// Vue.prototype.$global_ = $global_
// import List1 from './layout/Smart_agriculture/EchartsLeft/List1.vue'
// import Left1 from './layout/Smart_agriculture/EchartsLeft/Left1.vue'
// import Left2 from './layout/Smart_agriculture/EchartsLeft/Left2.vue'
import Right1 from './layout/Smart_agriculture/EchartsRight/Right1.vue'
import Right2 from './layout/Smart_agriculture/EchartsRight/Right2.vue'
// import Right3 from './layout/Smart_agriculture/EchartsRight/Right3.vue'
// import Map from './Map.vue'
import Center1 from './layout/Smart_agriculture/EchartsCenter/Center1.vue'
import CenterVideo from './layout/Smart_agriculture/EchartsCenter/CenterVideo.vue'
import Members from './layout/Smart_agriculture/Members.vue'
import MembersSpecial from './layout/Smart_agriculture/MembersSpecial.vue'
import Revenue from './layout/Smart_agriculture/Revenue.vue'
// import Map from './layout/Smart_agriculture/Map.vue'
import Notice from './layout/Smart_agriculture/Notice.vue'
    export default {
        data(){
            return{
                timer : 0,
                scale : {
                    width:'1920',
                    height:'1080'
                },
                baseWidth : 1920,
                baseHeight : 1080,
                baseProportion : parseFloat((this.baseWidth / this.baseHeight).toFixed(5)),
                value: [],
                options: [
                    {
                    label: '保康县',
                    children: [{
                        value: '1',
                        label: '小沟村',
                    }, {
                        value: '2',
                        label: '九皇山村',
                    },{
                        value: '3',
                        label: '三溪沟村',
                    }, {
                        value: '4',
                        label: '凤皇山村',
                    }]
                }]
            }
        },
        components:{
            // List1,
            // Left1,
            // Left2,
            Right1,
            Right2,
            // Right3,
            // Map,
            Center1,
            CenterVideo,
            Members,
            MembersSpecial,
            Revenue,
            // Map,
            Notice
        },
        mounted(){
            this.$nextTick(function () {
                this.calcRate()
                // console.log(this.$global_.activateCountry)
            });
            this.windowDraw()
        },
        methods:{
            windowDraw(){
                window.addEventListener('resize',()=>{
                    this.resize()
                })
            },
            resize(){
                clearTimeout(this.timer)
                this.timer = setTimeout(()=>{
                    this.calcRate()
                },200)
            },
            calcRate(){
                let baseProportion = parseFloat((this.baseWidth / this.baseHeight).toFixed(5))
                let currentRate = parseFloat((window.innerWidth / window.innerHeight).toFixed(5))
                if(this.$refs.appRef){
                    if(currentRate > baseProportion){
                        this.scale.width = ((window.innerHeight * baseProportion) / this.baseWidth).toFixed(5)
                        this.scale.height = (window.innerHeight / this.baseHeight).toFixed(5)
                        this.$refs.appRef.style.transform = `scale(${this.scale.width}, ${this.scale.height}) translate(-50%, -50%)`
                    }else{
                        this.scale.height = (window.innerWidth / baseProportion / this.baseHeight).toFixed(5)
                        this.scale.width = (window.innerWidth / this.baseWidth).toFixed(5)
                        this.$refs.appRef.style.transform = `scale(${this.scale.width}, ${this.scale.height}) translate(-50%, -50%)`
                    }
                }
            },
            handleCommand(command){
                this.$message(command)
            },
            changeEcharts(item){
                console.log(item)
                // console.log(this.$root.activateCountry)
                // 把激活的echart value赋值给全局变量
                // this.$global_.setActivateCountry(item)
                this.$root.activateCountry = item[1]
                console.log("赋值后的activate",this.$root.activateCountry)
            }
        }
    }
</script>
<style lang="scss" scoped>



.App{
    width: 100vw;
    height: 100vh;
    background-color: #11151b;
    .home{
        width: 1920px;
        height: 1080px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform-origin: left top;
        transform: translate(-50%, -50%);
        .bigscreen{
            width: 98.5%;
            margin-left: 0.4%;
            height: 100%;
            background-image: url(../assets/background.png);
            background-size: cover;
            background-position: center center;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .headerTab{
                width: 100%;
                height: 9%;
                background-image: url(../assets/headerTab.png);
                background-size: cover;
                background-position: center center;
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                .TabChange{
                    height: auto;
                    width: 20%;
                    top: 75%;
                    left: 2%;
                    position: absolute;
                }
                // .TabChange /deep/ .el-select{
                //     width: inherit;
                // }
                // .TabChange /deep/ .el-input--small{
                //     font-size: 20px;
                //     color: #409EFF;
                // }
                // .TabChange /deep/ .el-select__caret{
                //     font-size: 20px;
                //     color: #409EFF;
                // }
                p{
                    font-size: 35px;
                    color: #a5ccf2;
                    line-height: 4rem;
                }
            }
        }
        .content{
            color:white;
            display: flex;
            justify-content: space-between;
            height: 90%;
            padding: 10px;
            .contentLeft{
                width: 25%; 
                display: flex;
                flex-direction: column;
                justify-content: space-around;
            }
            .contentCenter{
                width: 48%; 
                display: flex;
                flex-direction: column;
                justify-content: space-around;
            }
            .contentRight{
                width: 25%; 
                display: flex;
                flex-direction: column;
                justify-content: space-around;
            }
        }
    }
}
*{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    outline: none;
}
</style>
<style>
.cascaderStyle{
    margin-top: 5px;
}
.block>.el-cascader>.el-input--small{
    font-size: 2em;
}
.block>.el-cascader>.el-input--small>.el-input__inner {
    background-color: #11161c;
    color: #a5ccf2;
}
.cascaderStyle>.el-cascader-panel>.el-cascader-menu{
    border: none;
    overflow: hidden;
    color: #a5ccf2;
    background-color:rgba(18,23,31,0.5);
}
.cascaderStyle>.el-cascader-panel>.el-cascader-menu>.el-scrollbar__wrap{
    overflow: hidden;
}
.cascaderStyle>.el-cascader-panel>.el-cascader-menu>.el-scrollbar__bar.is-vertical{
    display: none;
}
</style>