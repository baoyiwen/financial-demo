<template>
    <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu
                :show-timeout="200"
                :default-active="$route.path"
                :default-openeds="openeds"
                :collapse="isCollapse"
                mode="vertical"
        >
            <!--<el-menu-item-group>-->
            <!--<template slot="title">-->
            <!--<i :class="m_routers[0].meta.icon"></i>-->
            <!--<span slot="title">-->
            <!--{{m_routers[0].meta.title}}-->
            <!--</span>-->
            <!--</template>-->
            <sidebar-item v-for="route in m_routers" :key="route.path" :item="route" :base-path="route.path"/>
            <!--</el-menu-item-group>-->
        </el-menu>
    </el-scrollbar>
</template>

<script>
    import {asyncRouterMap, pathManage} from '@/routers/router'
    import {mapGetters} from 'vuex'
    import SidebarItem from './SidebarItem'

    export default {
        components: {SidebarItem},
        computed: {
            ...mapGetters([
                'm_routers',
                'sidebar'
            ]),
            isCollapse() {
                return !this.sidebar.opened
            },
        },
        data() {
            return {
                openeds: []
            }
        },
        created() {
            this.openeds = []
            this.openeds.push(this.m_routers[0].path)
        },
        method2: {
            resolvePath(routePath) {
                if (this.isExternalLink(routePath)) {
                    return routePath
                }
                return path.resolve(this.basePath, routePath)
            },
        },
        mounted() {
            console.log(this.m_routers)
        }
    }
</script>
