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
        },{
            path: 'table-1',
            component: () => import('@/views/demo/table'),
            name: 'table-1',
            hidden: false,
            meta: { title: '表格模板', noCache: true }
        },{
            path: 'table-2',
            component: () => import('@/views/demo/table'),
            name: 'table-2',
            hidden: false,
            meta: { title: '表格模板', noCache: true }
        },{
            path: 'table-3',
            component: () => import('@/views/demo/table'),
            name: 'table-3',
            hidden: false,
            meta: { title: '表格模板', noCache: true }
        },{
            path: 'table-4',
            component: () => import('@/views/demo/table'),
            name: 'table-4',
            hidden: false,
            meta: { title: '表格模板', noCache: true }
        },{
            path: 'table-5',
            component: () => import('@/views/demo/table'),
            name: 'table-5',
            hidden: false,
            meta: { title: '表格模板', noCache: true }
        },{
            path: 'table-6',
            component: () => import('@/views/demo/table'),
            name: 'table-6',
            hidden: false,
            meta: { title: '表格模板', noCache: true }
        },{
            path: 'table-7',
            component: () => import('@/views/demo/table'),
            name: 'table-7',
            hidden: false,
            meta: { title: '表格模板', noCache: true }
        },{
            path: 'table-8',
            component: () => import('@/views/demo/table'),
            name: 'table-8',
            hidden: false,
            meta: { title: '表格模板', noCache: true }
        },{
            path: 'table-9',
            component: () => import('@/views/demo/table'),
            name: 'table-9',
            hidden: false,
            meta: { title: '表格模板', noCache: true }
        },{
            path: 'table-10',
            component: () => import('@/views/demo/table'),
            name: 'table-10',
            hidden: false,
            meta: { title: '表格模板', noCache: true }
        },{
            path: 'table-11',
            component: () => import('@/views/demo/table'),
            name: 'table-11',
            hidden: false,
            meta: { title: '表格模板', noCache: true }
        },{
            path: 'table-12',
            component: () => import('@/views/demo/table'),
            name: 'table-12',
            hidden: false,
            meta: { title: '表格模板', noCache: true }
        },{
            path: 'table-13',
            component: () => import('@/views/demo/table'),
            name: 'table-13',
            hidden: false,
            meta: { title: '表格模板', noCache: true }
        },{
            path: 'table-14',
            component: () => import('@/views/demo/table'),
            name: 'table-14',
            hidden: false,
            meta: { title: '表格模板', noCache: true }
        },{
            path: 'table-15',
            component: () => import('@/views/demo/table'),
            name: 'table-15',
            hidden: false,
            meta: { title: '表格模板', noCache: true }
        },{
            path: 'table-16',
            component: () => import('@/views/demo/table'),
            name: 'table-16',
            hidden: false,
            meta: { title: '表格模板', noCache: true }
        },{
            path: 'table-17',
            component: () => import('@/views/demo/table'),
            name: 'table-17',
            hidden: false,
            meta: { title: '表格模板', noCache: true }
        },{
            path: 'table-18',
            component: () => import('@/views/demo/table'),
            name: 'table-18',
            hidden: false,
            meta: { title: '表格模板', noCache: true }
        },{
            path: 'table-19',
            component: () => import('@/views/demo/table'),
            name: 'table-19',
            hidden: false,
            meta: { title: '表格模板', noCache: true }
        },{
            path: 'table-20',
            component: () => import('@/views/demo/table'),
            name: 'table-20',
            hidden: false,
            meta: { title: '表格模板', noCache: true }
        },
    ]
}

export default demo
