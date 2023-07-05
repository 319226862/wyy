<template>
    <div>
        <h1>当前求和为: {{ number }}</h1>
        <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button>+</button>
        <button>-</button>
        <button>当前求和为奇数再加</button>
        <button>等一等再加</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            number:0
        }
    }
}
</script>

<style>

</style>