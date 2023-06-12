<!-- 新建vue2项目 -->
vue init webpack + 项目名

<!-- 打包项目 -->
npm run build
1.修改config/index.js里的assetsPublicPath的字段，初始项目是/，现在改为./ 【只改build的】
2.打开dist底下的index.html文件，修改文件路径，将 "/static/js/manifest.2ae2e69a05c33dfc65f8.js" 全部更改为 "./static/js/manifest.2ae2e69a05c33dfc65f8.js"

<!-- 去掉网址中的# -->
更换 vue-router 的另一个模式 history 
mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]

<!-- 全局引入element-ui -->
npm install element-ui -S
    import ElementUI from 'element-ui'
    import 'element-ui/lib/theme-chalk/index.css'
    Vue.use(ElementUI)

<!-- 查看vue项目是基于vue2还是vue3 -->
npm list vue

<!-- 下载vuex -->
npm install --save vuex

<!-- 报错 Invalid options in vue.config.js: "publicPath" is not allowed -->
具体原因是因为版本支持的问题，publicPath 属性到 vue-cli 3.2.0 之后才支持，所以将 publicPath 改成 baseUrl 即可，或者升级你的 vue-cli 

<!-- vue.config.js打包后一片空白 -->
router.js中的mode不设置成 “history”，默认“hash”

<!-- 安装axios -->
npm install vue-axios --save
npm install qs.js --save   json转data

<!-- 安装mockjs -->
import Mock  from 'mockjs'
let datalist= [];
    for (let i = 0; i < 5; i++) {
        let newData = {
            noise:Random.natural(1, 80),
        }
        datalist.push(newData)
    }
    return {
        data: datalist
    }
 
npm install mockjs --save-dev
    一些常用数据
        order: Random.natural(16),
        account:Random.name(),
        time:Random.now(),
        title: Random.csentence(4), //  Random.csentence( min, max )
        baoxiu: Random.csentence(2),
        product: Random.csentence(4,10),
        number:Random.natural(1, 100),
        price:Random.float(20, 500, 2,2),
        addrss:Random.csentence(15,30),
        name: Random.cname(),
        tel:Random.natural(11),
        state:Random.csentence(5),
        id:Random.natural(1,5),
        thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
        author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
        date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串

<!-- 引入echarts -->
npm install echarts --save
  <!-- 引入其余echart样式 -->
  cnpm install echarts-liquidfill --save


<!-- 报错Error in mounted hook: "TypeError: Cannot read properties of undefined (reading 'init')" -->
修改echarts的引入方式 
  import * as echarts from 'echarts';

<!-- 报错Failed to resolve directive: infinite-scrol 引入无限滚动组件 -->
cnpm install vue-infinite-scroll --save


import infiniteScroll from "vue-infinite-scroll";
Vue.use(infiniteScroll);

<!-- gitpush -->
git add -f dist
git commit -m "*"
git subtree push --prefix dist origin gh-pages


<!-- 使用vue-amap -->
npm install @vuemap/vue-amap --save
cnpm install --save @vuemap/vue-amap-util

<!-- 由于引进mock.js，高德地图不显示 -->
mockjs会修改地图数据请求的头信息
<script>
/* eslint-disable */
import AMapLoader from '@amap/amap-jsapi-loader'
window._AMapSecurityConfig={
    securityJsCode:'1336974b9711c2c7868bf9b55baa8ee2'
}
export default {
    data() {
        return {
            map: null
        }
    },
    mounted(){
        this.initMap()
    },
    methods:{
        initMap(){
            AMapLoader.load({
                key:"7c4458547bd389cfc676388dd110ed41", 
                version:"2.0",      // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
                // plugins:[''],       // 需要使用的的插件列表，如比例尺'AMap.Scale'等
            }).then((AMap)=>{
                this.map = new AMap.Map("EchartsBottom",{  //设置地图容器id
                    viewMode:"3D",    //是否为3D地图模式
                    zoom:5,           //初始化地图级别
                    resizeEnable: true,
                    rotateEnable:true,
                    pitchEnable:true,
                    pitch:80,
                    rotation:-15,
                    buildingAnimation:true,//楼块出现是否带动画
                    expandZoomRange:true,
                    center:[116.333926,39.997245]
                });
                this.map.addControl(new AMap.ControlBar({
                    showZoomBar:false,
                    showControlButton:true,
                    position:{
                    right:'10px',
                    top:'10px'
                    }
                }))
            }).catch(e=>{
                console.log(e);
            })
        }
    }
    
}
</script>


<!-- elementui中table给定宽度100%不起作用 -->
在每个column中给定min-width="100%"

<!-- elementui中table给背景不起作用 -->
vue一个组件中，style默认作用域是scoped，而elementUI中table的样式设置不能在scoped，删去就行

<!-- 引入font-awesome -->
npm install font-awesome --save
import 'font-awesome/css/font-awesome.css'

<!-- vue-tree加载树状图显示组织关系 -->
npm i vue-tree-chart --save

<!-- get http://192.168.113.225:8080/sockjs-node/info?t=1679645916522 net::ERR_CONNECTION_TIMED_OUT -->
在sockjs.js里面注释掉1605行
      try {
        // self.xhr.send(payload);
    } catch (e) {
        self.emit('finish', 0, '');
        self._cleanup(false);
    }

<!-- 修改级联选择器样式 -->
通过 popper-class 绑定自定义类名popperOptions（注意popperOptions 需放在样式的根文件中）