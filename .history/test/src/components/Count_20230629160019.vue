<template>
    <div>
        <h1>当前求和为: {{ $store.state.number }}</h1>
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
export default {
    data(){
        return {
            // 用户选择的数字
            n:1,
            
        }
    },
    methods:{ 
        increment(){
            // this.number += this.n
            this.$store.dispatch('jia',this.n)
        },
        decrement(){
            // this.number -= this.n
            this.$store.dispatch('jian',this.n)
        },
        incrementOdd(){
            // if(this.number%2){
            //     this.number += this.n
            // }
        },
        incrementWait(){
            setTimeout(()=>{
                // this.number += this.n
            },500)
        },
    }
}
</script>

<style>

</style>