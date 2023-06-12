<template>
    <div class="app-main-container" :class="{ 'collapse-main': isCollapse }">
        <transition name="fade-transform" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        computed: {
            ...mapState({
                isCollapse: (state) => state.common.isCollapse
            })
        }
    }
</script>

<style lang="scss" scoped>
    .app-main-container {
        position: absolute;
        width: calc(100% - 200px);
        height: calc(100% - 100px);
        margin: 10px;
        padding: 20px;
        background-color: #fff;
        transition: width 0.28s;
    }
    .collapse-main {
        width: calc(100% - 84px);
    }
</style>