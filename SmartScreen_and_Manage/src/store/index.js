import Vue from 'vue'
import Vuex from 'vuex'
import common from './module/common'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        common
    }
})