/**
 * Created by Administrator on 2018/12/20.
 */
import Layout from '@/views/layout/Layout'

const demo = {
    path: '/demo',
    component: Layout,
    redirect: '/demo/table',
    module: 9,
    hidden: false, // 是否显示在菜单导航栏
    name: '模板',
    meta: {
        title: '模板展示',
        icon: 'iconfont icon-fuli'
    },
    children: [
        {
            path: 'table',
            component: () => import('@/views/demo/table'),
            name: 'table',
            hidden: false,
            meta: { title: '表格模板', noCache: true }
        }, {
            path: 'menu1',
            component: () => import('@/views/demo/demo1/index'),
            name: 'menu1',
            hidden: false,
            meta: { title: '二级菜单', noCache: true },
            children: [
                {
                    path: 'info',
                    component: () => import('@/views/demo/info'),
                    name: 'info',
                    hidden: false,
                    meta: { title: '详细信息', noCache: true }
                },
                {
                    path: 'form',
                    component: () => import('@/views/demo/form'),
                    name: 'form',
                    hidden: false,
                    meta: { title: '新增', noCache: true }
                },
                {
                    path: 'article-list',
                    component: () => import('@/views/demo/article-list'),
                    name: 'article-list',
                    hidden: false,
                    meta: { title: '文章列表', noCache: true }
                }
            ]
        }, {
            path: 'article-detail',
            component: () => import('@/views/demo/article-detail'),
            name: 'article-detail',
            hidden: false,
            meta: { title: '详情', noCache: true }
        }
    ]
}

export default demo
