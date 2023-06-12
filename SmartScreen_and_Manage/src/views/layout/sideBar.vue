<template>
    <div class="sidebar-container" :class="{'collapse-width': isCollapse}">
        <div class="logo" :class="{'collapse-logo': isCollapse}">
            管理系统
        </div>
        <el-menu
                :default-active="onRoutes"
                class="el-menu-vertical"
                background-color="#304156"
                text-color="#bfcbd9"
                active-text-color="#10B9D3"
                mode="vertical"
                :collapse="isCollapse"
                unique-opened
                router
        >
            <el-menu-item index="dashboard">
                <i class="fa fa-tachometer fa-fw"></i>
                <span slot="title">数据统计</span>
            </el-menu-item>
            <!-- 
                均涉及到信息的增删改查
            -->
            <el-submenu index="architecture">
                <template slot="title">
                    <i class="fa fa-book fa-fw"></i>
                <span>党建管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="architecture">
                        <i class="fa fa-random fa-fw"></i>
                        <span slot="title">党员架构</span>
                    </el-menu-item>
                    <el-menu-item index="partyManage">
                        <i class="fa fa-address-book fa-fw"></i>
                        <span slot="title">党员管理</span>
                    </el-menu-item>   
                </el-menu-item-group>
            </el-submenu>
            <!-- 乡村治理 -->
            <el-submenu index="rusticManage">
                <template slot="title">
                    <i class="fa fa-book fa-fw"></i>
                <span>乡村治理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="rusticManage">
                        <i class="fa fa-address-book fa-fw"></i>
                        <span slot="title">村民管理</span>
                    </el-menu-item>
                    <el-menu-item index="monitor">
                        <i class="fa fa-camera fa-fw"></i>
                        <span slot="title">摄像头预览</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="cultural">
                <i class="fa fa-bullhorn fa-fw"></i>
                <span slot="title">乡村文旅</span>
            </el-menu-item>
            <el-menu-item index="issue">
                <i class="fa fa-pencil fa-fw"></i>
                <span slot="title">政务/宣传发布</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    import { mapState } from "vuex";

    export default {
        computed: {
            onRoutes() {
                return this.$route.path.replace("/", "");
            },
            ...mapState({
                isCollapse: (state) => state.common.isCollapse
            })
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
.fa {
    margin-right: 5px;
}
.collapse-width {
    width: 64px !important;
}
.collapse-logo {
    font-size: 18px !important;
}

.sidebar-container {
    width: 180px;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    transition: width 0.28s;
    z-index: 1001;
    overflow: hidden;
    .el-menu-vertical:not(.el-menu--collapse) {
        width: 180px;
    }
    .el-menu {
        border: none;
        height: 100%;
        width: 100% !important;
        overflow-y: auto;
    }
    .logo {
        width: 100%;
        height: 50px;
        line-height: 50px;
        font-size: 30px;
        text-align: center;
        background-color: rgb(48, 65, 86);
        color: #fff;
    }
}
</style>