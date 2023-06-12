import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/index.vue'

Vue.use(Router)

const router = new Router({
    // mode: 'history',
    // base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/dashboard',
            component: Layout,
            children: [
                {
                    path: '/dashboard',
                    component: () => import('@/views/Dashboard.vue'),
                    name: 'Dashboard',
                    meta: {title: '数据统计'}
                },
                // 党建管理
                {
                    path: '/architecture',
                    component: () => import('@/views/layout/Party/Architecture.vue'),
                    name: 'architecture',
                    meta: {title: '党员架构'}
                },
                {
                    path: '/partyManage',
                    component: () => import('@/views/layout/Party/PartyManage.vue'),
                    name: 'partyManage',
                    meta: {title: '党员管理'}
                },
                
                // 乡村治理
                {
                    path: '/rusticManage',
                    component: () => import('@/views/layout/Rustic/RusticManage.vue'),
                    name: 'rusticManage',
                    meta: {title: '村民管理'}
                },
                {
                    path: '/monitor',
                    component: () => import('@/views/layout/Rustic/Monitor.vue'),
                    name: 'monitor',
                    meta: {title: '摄像头预览'}
                },
                {
                    path: '/cultural',
                    component: () => import('@/views/Cultural.vue'),
                    name: 'Cultural',
                    meta: {title: '乡村文旅'}
                },
                {
                    path: '/issue',
                    component: () => import('@/views/Issue.vue'),
                    name: 'issue',
                    meta: {title: '政务/宣传发布'}
                },
            ],
        },
        {
            path: '/bigscreen',
            component: () => import('@/views/Bigscreen.vue'),
            name: '可视化面板',
        }
    ]
})

router.beforeEach((to, from, next) => {
    next()
})

export default router