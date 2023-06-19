<template>
  <div class="App">
      <div class="home" ref="appRef">
          <div class="bigscreen">
            121212222222222222222222
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
</style>
