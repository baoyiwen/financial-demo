<template>
    <!--class="classObj layout"-->
    <div :class="classObj" class="app-wrapper">
        <el-scrollbar style="height: 100%">
            <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"/>
            <app-header/>
            <sidebar class="sidebar-container"/>
            <div class="main-container">
                <tags-view/>
                <app-main/>
                <div class="m-footer">
                    <!--<img src="../../assets/img/logo-footer.png" alt="">-->
                    财务演示系统
                </div>
            </div>
        </el-scrollbar>
    </div>
</template>

<script>
     import AppMain from '../../views/layout/components/AppMain.vue'
     import Sidebar from './components/Sidebar/index.vue'
     import TagsView from './components/TagsView.vue'
     import index from './components/header/index.vue'

    // import Test from '../../views/layout/components/test'

    import ResizeMixin from './mixin/ResizeHandler'
    export default {
        name: "Layout",
        components: {
            Sidebar,
            AppMain,
            TagsView,
            'app-header': index,
        },
        mixins: [ResizeMixin],
        computed: {
            sidebar() {
                return this.$store.state.app.sidebar
            },
            device() {
                return this.$store.state.app.device
            },
            classObj() {
                return {
                    hideSidebar: !this.sidebar.opened,
                    openSidebar: this.sidebar.opened,
                    withoutAnimation: this.sidebar.withoutAnimation,
                    mobile: this.device === 'mobile'
                }
            }
        },
        methods: {
            handleClickOutside() {
                this.$store.dispatch('closeSideBar', { withoutAnimation: false })
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "../../style/mixin";

    .app-wrapper {
        @include clearfix;
        /*position: relative;*/
        width: 100%;

        &.mobile.openSidebar {
            position: fixed;
            top: 0;
        }
    }

    .drawer-bg {
        background: #000;
        opacity: 0.3;
        width: 100%;
        top: 0;
        height: 100%;
        position: absolute;
        z-index: 999;
    }
</style>
