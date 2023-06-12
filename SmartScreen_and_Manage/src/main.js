import Vue from 'vue'
import Element from 'element-ui'
import './theme/index.css';
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import '@/styles/index.scss'
import axios from 'axios'
import 'font-awesome/css/font-awesome.css'
/* eslint-disable */
import * as echarts from 'echarts';


Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts;

Vue.use(Element, { size: 'small', zIndex: 2000 });

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  data() {
    return {
      // 全局变量，可读写修改,这里设为0，这样碰到切换任意一个村的value值都不符合，进入if
      activateCountry: '0',
    };
  },
}).$mount('#app')
