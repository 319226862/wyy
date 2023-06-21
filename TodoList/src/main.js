// 引入vue
import Vue from 'vue'
// 引入App组件，他所有组件的父组件
import App from './App.vue'

// 关闭vue生产提示
Vue.config.productionTip = false

// 创建vue实例对象--vm
new Vue({
  render: h => h(App),
}).$mount('#app')
