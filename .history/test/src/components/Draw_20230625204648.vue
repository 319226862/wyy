<template>
    <div>
        <button @click="isShow = !isShow">按钮</button>
        <transition name="test">
            <h1 v-show="isShow">hello</h1>
        </transition>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isShow : true
        }
    }
}
</script>

<style scoped>
button{
    width: 100px;
    height: 50px;
}
.test-enter-active{
    animation: test 1s linear;
}
.test-leave-active{
    animation: test 1s linear reverse;
}
@keyframes test {
    from {
        transform: translateX(-100px)
    }
    to {
        transform: translateX(0px)
    }
}
</style>