<template>
  <div class="App">
      <div class="home" ref="appRef">
          <div class="bigscreen">
            <div id="num">
                <video id="video" class="noshow" autoplay src="../assets/downTime.mp4"></video>
            </div>
            <div id="app">
                <div id="screen">
                    <div class="desk">
                        <button class="change" onclick="timeOut(this)">刷新</button>
                    </div>
                    <div class="student">
                        <table class="content"></table>
                    </div>
                </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
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
          }
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.App{
    width: 100vw;
    height: 100vh;
    background-image: url(../assets/background.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
  .home{
      width: 1920px;
      height: 1080px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform-origin: left top;
      transform: translate(-50%, -50%);
  }
  .bigscreen{
      width: 98.5%;
      margin-left: 0.4%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
  }
  .desk {
        width:80%;
        text-align: center;
        margin:0 auto;
        height: 130px;
        line-height: 130px;
    }
    .student{
        height: calc( 100% - 130px );
        width:80%;
        text-align: center;
        margin:0 auto;
        height: 130px;
        line-height: 130px;
    }
    .content{
        width:100%;
        /* height: calc( 100% - 400px ); */
        height:auto;
        text-align: center;
        display: flex;
        margin:0 auto;
        justify-content: center;
        align-items: center;
    }
    .content>tbody{
        column-count: 3;
        /* column-gap: 10%; */
    }
    .student{
        width:90%;
        height: 90%;
    }
    .change{
        width: 300px; /* 宽度 */
        border-width: 0px; /* 边框宽度 */
        border-radius: 10px; /* 边框半径 */
        cursor: pointer; /* 鼠标移入按钮范围时出现手势 */
        outline: none; /* 不显示轮廓线 */
        font-family: Microsoft YaHei; /* 设置字体 */
        color: white; /* 字体颜色 */
        background: #5ba0b3;
        margin:0 auto;
        height: 130px;
        display: block;
        font-size: 35px;
    }
    .table-bordered{
        border: none;
    } 
    tr{
        color: red;
        line-height: 70px;
        align-items: center;
        width: 300px;
        margin-bottom: 10px;
        margin-right: 30px;
        border: 3px solid red;
        font-size: 30px;
        font-weight: bolder;
        padding: 10px 20px;
        display: flex;
        justify-content: space-around;
        height: 70px;
    }
</style>
