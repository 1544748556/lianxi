import VueRouter from 'vue-router'
import Vue from 'vue'
import Profile from '@/pages/Profile/Profile'
import Order from '@/pages/Order/Order'
import Search from '@/pages/Search/Search'
import Msite from '@/pages/Msite/Msite'
import Login from '@/pages/Login/Login'

Vue.use(VueRouter)
const routes = [{
        path: '',
        redirect: '/msite'
    }, {
        path: '/msite',
        component: Msite,
        meta: {
            title: '首页',
            showFooter: true
        }
    }, {
        path: '/order',
        component: Order,
        meta: {
            title: '购物车',
            showFooter: true
        }
    }, {
        path: '/profile',
        component: Profile,
        meta: {
            title: '个人信息',
            showFooter: true

        }
    }, {
        path: '/search',
        component: Search,
        meta: {
            title: '搜索',
            showFooter: true
        }
    }, {
        path: '/login',
        component: Login,
        meta: {
            title: '登录',
            showFooter: false
        }
    }

]

const routerConfig = new VueRouter({
    // 配置路由和组件之间的应用关系
    routes,
    mode: 'history',
    linkActiveClass: 'active'
})
// routerConfig.beforeEach((to, from, next) => {
//     window.document.title = to.meta.title;
//     next()
// })

export default routerConfig