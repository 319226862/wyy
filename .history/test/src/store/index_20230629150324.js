// 用于创建vuex的store
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 准备actions——用于响应组件中的动作
const actions={
    jia(){
        console.log("jia被调用")    
    }
}

// 准备mutations——用于操作数据state
const mutations={}

// 准备state——用于存储数据
const state={
    // 求和数字
    number:0
}

// 创建&暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state
})
