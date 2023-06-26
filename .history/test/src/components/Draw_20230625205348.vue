<template>
    <div>
        <button @mouseover="isShow = !isShow">
            <transition name="test">
                <p v-show="isShow">按钮</p>
            </transition>
        </button>
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