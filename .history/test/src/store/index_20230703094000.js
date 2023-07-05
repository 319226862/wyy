// 用于创建vuex的store
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 准备actions——用于响应组件中的动作
const actions={
    jia(context,value){
        // console.log("actions,jia被调用",context,value)    
        context.commit('JIA',value)
    },
    jian(context,value){
        // console.log("actions,jia被调用",context,value)    
        context.commit('JIAN',value)
    },
    jiaOdd(context,value){
        if (context.state.number%2){
            context.commit('JIA',value)
        }
    },
    jiaWait(context,value){
        setTimeout(() => {
            context.commit('JIA',value)
        }, 500);
    }
}

// 准备mutations——用于操作数据state
const mutations={
    JIA(state,value){
        // console.log("mutations,JIA被调用",state,value)   
        state.number += value
    },
    JIAN(state,value){
        // console.log("mutations,JIA被调用",state,value)   
        state.number -= value
    },
}

// 准备state——用于存储数据   data
const state={
    // 求和数字
    number:0,
    school:1,
    subject:2,
}

// 准备getters——用于加工state中的数据   computed
const getters = {
    bigSum(state){
        return state.number*10
    }
}

// 创建&暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
