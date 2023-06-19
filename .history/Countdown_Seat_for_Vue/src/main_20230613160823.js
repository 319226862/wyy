// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Element from 'element-ui'
import './theme/index.css';
import App from './App.vue'
import axios from 'axios'


Vue.prototype.$axios = axios

Vue.use(Element, { size: 'small', zIndex: 2000 });

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
