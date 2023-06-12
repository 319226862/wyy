<template>
    <div id="ContainerMap" style="width:100%;height:90%"></div>
</template>

<script>
// import AMapLoader from '@amap/amap-jsapi-loader'
// window._AMapSecurityConfig={
//     securityJsCode:'1336974b9711c2c7868bf9b55baa8ee2'
// }
export default {
    data() {
        return {
            map: null
        }
    },
    // mounted(){
    //     this.initMap()
    // },
    // methods:{
    //     initMap(){
    //         AMapLoader.reset()
    //         AMapLoader.load({
    //             key:"7c4458547bd389cfc676388dd110ed41", 
    //             version:"2.0",      // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    //             plugins:[''],       // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    //         }).then((AMap)=>{
    //             this.map = new AMap.Map("ContainerMap",{  //设置地图容器id
    //                 // viewMode:"3D",    //是否为3D地图模式
    //                 zoom:18,           //初始化地图级别
    //                 resizeEnable: true,
    //                 mapStyle: "amap://styles/darkblue",
    //                 zooms:[2,20],
    //                 // features:['building'],
    //                 // rotateEnable:true,
    //                 // pitchEnable:true,
    //                 // pitch:80,
    //                 // rotation:-15,
    //                 // buildingAnimation:true,//楼块出现是否带动画
    //                 // expandZoomRange:true,
    //                 center:[111.252289,31.888034]
    //             });
    //             // this.map.addControl(new AMap.ControlBar({
    //             //     showZoomBar:false,
    //             //     showControlButton:true,
    //             //     position:{
    //             //     right:'10px',
    //             //     top:'10px'
    //             //     }
    //             // }))
    //         }).catch(e=>{
    //             console.log(e);
    //         })
    //     }
    // }
    
}
</script>