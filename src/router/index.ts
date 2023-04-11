import {createRouter,createWebHashHistory,type RouteRecordRaw} from 'vue-router'
import TabsView from '../views/tabs/TabView.vue'

const routes:RouteRecordRaw[] = [
  {
    path:'/',
    redirect:'tabs'
  },
  {
    path:'/tabs',
    name:'tabs',
    component:TabsView,
    children:[
      {
        path:'',
        name:'home',
        component:()=>import('../views/tabs/home/HomeView.vue')
      },
      {
        path:'order',
        name:'order',
        component:()=>import('../views/tabs/order/OrderView.vue')
      },
      {
        path:'me',
        name:'me',
        component:()=>import('../views/tabs/me/MeView.vue')
      }
    ]
  },
]

export const route = createRouter({
  history:createWebHashHistory(),
  routes
})