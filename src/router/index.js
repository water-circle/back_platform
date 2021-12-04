import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Login from '../components/Login.vue'
const originPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originPush.call(this, location).catch((err) => err)
}
Vue.use(VueRouter)

const routes = [
  // 重定向到login
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: Login,
    component: Login
  },
  // {
  //   path: '/',
  //   name: 'Login',
  //   component: () => import('../views/Login/Login.vue')
  // },
  // {
  //   path: '',
  //   name: 'Login',
  //   component: () => import('../views/Login/Login.vue')
  // },
  {
    path: '/index',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '/index',
        // 这里的name要与CommonAside.vue中的data中的menu的name一致
        name: 'home',
        // 懒加载，需要的时候再加载
        component: () => import('../views/Home_comp/index.vue')
      },
      {
        path: '/mall',
        name: 'mall',
        component: () => import('../views/Mall/Mall.vue')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('../views/User/User.vue')
      },
      {
        path: '/stock',
        name: 'stock',
        component: () => import('../views/Stock/Stock.vue')
      },
      {
        path: '/sales',
        name: 'sales',
        component: () => import('../views/Sales/Sales.vue')
      }
    ]
  }
]

const router = new VueRouter({
  // mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

// 导航守卫控制访问权限
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    return next()
  } else {
    const tokenStr = window.sessionStorage.getItem('token')
    // 如果没有token，强制跳转到login页面
    if (!tokenStr) {
      return next('/login')
    } else {
      next()
    }
  }
})

export default router
