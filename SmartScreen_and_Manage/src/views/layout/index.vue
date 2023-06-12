<template>
    <div>
        <SideBar></SideBar>
        <div class="right-container" :class="{'collapse-ml': isCollapse}">
            <TopBar></TopBar>
            <AppMain></AppMain>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import SideBar from './sideBar'
    import TopBar from './TopBar/index'
    import AppMain from './appMain'

    export default {
        computed: {
            ...mapState({
                isCollapse: (state) => state.common.isCollapse
            })
        },
       components: {
           SideBar,
           TopBar,
           AppMain
       }
    }
</script>

<style lang="scss" scoped>
.right-container{
    width: calc(100% - 180px);
    height: 100%;
    margin-left: 180px;
    transition: 0.28s;
}
.collapse-ml{
    width: calc(100% - 64px);
    margin-left: 64px;
}
</style>