import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/main.vue'
import Login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    hidden: true,
    redirect: '/read/recommend',//阅读-推荐
    children:[
      /**
       *  阅读
       */
      {path: '/read/recommend',     name: 'recommend',     component: ()=>import('@/views/read/recommend')},    //推荐
      {path: '/read/importantNews', name: 'importantNews', component: ()=>import('@/views/read/importantNews')},//要闻
      {path: '/read/safety',        name: 'safety',        component: ()=>import('@/views/read/safety')},       //安规
      {path: '/read/scene',         name: 'scene',         component: ()=>import('@/views/read/scene')},        //现场
      {path: '/read/comprehensive', name: 'comprehensive', component: ()=>import('@/views/read/comprehensive')},//综合
      /**
       *  答题
       */
      {path: '/answer/must',    name: 'must',    component: ()=>import('@/views/answer/must')},//必答
      {path: '/answer/special', name: 'special', component: ()=>import('@/views/answer/special')},//专项
      /**
       *  我的
       */
      {path: '/my/user', name: 'user', component: ()=>import('@/views/my/user')},//用户
    ]
  },
  {
    path: '/login',
    name: 'login',
    component:Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
