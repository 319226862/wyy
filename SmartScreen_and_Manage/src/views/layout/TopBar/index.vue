<template>
    <div class="topbar-container">
        <!-- header -->
        <div class="header">
            <div class="toggle-btn" @click="toggleSidebar">
                <i class="fa fa-navicon"></i>
            </div>
            <div class="header-right">
                <div class="btn-fullscreen" @click="handleFullScreen">
                    <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
                        <i class="el-icon-rank"></i>
                    </el-tooltip>
                </div>

                <el-dropdown @command="handleCommand">
                  <span class="el-dropdown-link">
                      <img class="user-img" src="~@/assets/people.png" alt="">
                      <span class="user-text">管理员</span>
                  </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
                        <el-dropdown-item divided command="toScreen">可视化面板</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>

            </div>


            <BreadCrumd></BreadCrumd>
        </div>
        <!-- 标签页 -->
        <TagsView></TagsView>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import BreadCrumd from './breadCrumd'
    import TagsView from './tagsView'

    export default {
        data() {
            return {
                fullscreen: false
            }
        },
        components: {
            BreadCrumd,
            TagsView
        },
        computed: {
            ...mapState({
                isCollapse: (state) => state.common.isCollapse
            })
        },
        methods: {
            ...mapActions(['toggleSidebar']),
            // 全屏事件
            handleFullScreen() {
                let element = document.documentElement;
                if (this.fullscreen) {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }
                } else {
                    if (element.requestFullscreen) {
                        element.requestFullscreen();
                    } else if (element.webkitRequestFullScreen) {
                        element.webkitRequestFullScreen();
                    } else if (element.mozRequestFullScreen) {
                        element.mozRequestFullScreen();
                    } else if (element.msRequestFullscreen) {
                        // IE11
                        element.msRequestFullscreen();
                    }
                }
                this.fullscreen = !this.fullscreen;
            },
            handleCommand(command) {
            if (command == "loginout") {
                console.log("1")
                // this.$router.push("/login");
            }
            if (command == "toScreen") {
                console.log("2")
                this.$router.push("/bigscreen");
            }
        },
        }
    }
</script>

<style lang="scss" scoped>
    .topbar-container {
        width: 100%;
        height: 80px;
        background-color: #fff;
        .header {
            height: 50px;
            line-height: 50px;
            border-bottom: 1px solid #ccc;
            position: relative;
            .toggle-btn {
                display: inline-block;
                padding: 0 20px;
            }

            .header-right {
                position: absolute;
                top: 0;
                right: 20px;
                height: 50px;
                line-height: 50px;
                .btn-fullscreen {
                    display: inline-block;
                    transform: rotate(45deg);
                    margin-right: 20px;
                    font-size: 24px;
                    vertical-align: top;
                }
                .el-dropdown-link {
                    display: inline-block;
                    height: 50px;
                    line-height: 50px;
                    padding: 0 5px;
                    .user-img {
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        vertical-align: top;
                    }
                    .user-text {
                        display: inline-block;
                        padding-left: 5px;
                        vertical-align: top;
                    }
                }
                .el-dropdown-link:hover {
                    background-color: #f3f3f3;
                }

            }
        }
    }
</style>