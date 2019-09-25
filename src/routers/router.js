import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'
import Layout from '@/views/layout/Layout.vue'
import demo from '@/routers/demo/demo'

Vue.use(Router)

export const pathManage = [
    {
        path: '/',
        name: 'index',
        meta: {title: '起始页',icon: 'iconfont icon-fuli'},
        component: Layout,
        redirect: 'article-detail',
        children: [
            {
                path: 'article-detail',
                component: () => import('@/views/demo/article-detail'),
                name: 'index',
                hidden: false,
                meta: { title: '详情', noCache: true }
            }
        ]
    },
    {
        path: '/redirect',
        component: Layout,
        hidden: false,
        meta: {title: '起始页',icon: 'iconfont icon-fuli'},
        redirect: 'redirect',
        children: [
            {
                path: '/redirect',
                name: 'redirect',
                meta: { title: '重定向页', noCache: true },
                component: () => import('@/views/redirect/redirect.vue')
            },
        ]
    }, {
        path: '/appIndex',
        name: 'appIndex',
        component: Layout,
        meta: {title: '登陆首页'},
    },{
        path: '/404',
        name: '404',
        component: () => import('@/views/errorPage/404.vue'),
        meta: {title: 'Not Find Page'},
    },{
        path: '/401',
        name: '401',
        component: () => import('@/views/errorPage/401.vue'),
        meta: {title: 'Not Find Page'},
    }, {
        path: '*',
        redirect: '404',
        hidden: false
    }
];

const router = new Router({
    mode: 'history',
    routes: pathManage,
});

router.beforeEach((to, from, next) => {
    document.title = to.matched[0].meta.title || 'No-Title';
    next();
});

export default router
export const asyncRouterMap = [
    demo,
]
