<template>
    <div>
        <h1>当前求和为: {{ number }}</h1>
        <h1>test1: {{ school }}</h1>
        <h1>test2: {{ subject }}</h1>
        <h1>当前求和*10为: {{ $store.getters.bigSum }}</h1>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return {
            // 用户选择的数字
            n:1,
            
        }
    },
    computed: {
        // 对象写法
        // ...mapState({
        //     number:'number',
        //     school:'school',
        //     subject:'subject'
        // })
        ...mapState(['number','school','subject'])
    },
    methods:{ 
        increment(){
            // this.number += this.n
            this.$store.commit('JIA',this.n)
        },
        decrement(){
            // this.number -= this.n
            // commit 越过dispatch
            this.$store.commit('JIAN',this.n)
        },
        incrementOdd(){
            // if(this.number%2){
            //     this.number += this.n
            // }
            // if(this.$store.state.number%2){
            //     this.$store.dispatch('jia',this.n)
            // }
            this.$store.dispatch('jiaOdd',this.n)
        },
        incrementWait(){
            // setTimeout(()=>{
            //     // this.number += this.n
            //     this.$store.dispatch('jia',this.n)
            // },500)
            this.$store.dispatch('jiaWait',this.n)
        },
    }
}
</script>

<style>

</style>