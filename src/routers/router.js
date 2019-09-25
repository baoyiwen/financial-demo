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
        meta: {title: '首页',},
        component: () => import('@/views/index.vue'),
        redirect: '/redirect',
    },
    {
        path: '/redirect',
        component: Layout,
        hidden: false,
        meta: {title: '起始页',},
        children: [
            {
                path: '/redirect',
                meta: {title: '起始页'},
                component: () => import('@/views/redirect/redirect.vue')
            },
        ]
    }, {
        path: '/404',
        name: '404',
        component: () => import('@/views/errorPage/404.vue'),
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
