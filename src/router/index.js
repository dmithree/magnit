import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/howtostart',
    name: 'How to Start',
    component: () => import(/* webpackChunkName: "howtostart" */ '../views/HowToStart.vue')
  },
  {
    path: '/gettingstarted/designer',
    name: 'Designer',
    component: () => import(/* webpackChunkName: "designer" */ '../views/gettingstarted/Designer.vue')
  },
  {
    path: '/gettingstarted/manager',
    name: 'Manager',
    component: () => import(/* webpackChunkName: "manager" */ '../views/gettingstarted/Manager.vue')
  },
  {
    path: '/gettingstarted/developer',
    name: 'Developer',
    component: () => import(/* webpackChunkName: "developer" */ '../views/gettingstarted/Developer.vue')
  },
  {
    path: '/foundations/breakpoints',
    name: 'Breakpoints',
    component: () => import(/* webpackChunkName: "breakpoints" */ '../views/foundations/Breakpoints.vue')
  },
  {
    path: '/foundations/color',
    name: 'Color',
    component: () => import(/* webpackChunkName: "color" */ '../views/foundations/Color.vue')
  },
  {
    path: '/foundations/iconography',
    name: 'Iconography',
    component: () => import(/* webpackChunkName: "iconography" */ '../views/foundations/Iconography.vue')
  },
  {
    path: '/foundations/palette',
    name: 'Palette',
    component: () => import(/* webpackChunkName: "palette" */ '../views/foundations/Palette.vue')
  },
  {
    path: '/foundations/theming',
    name: 'Theming',
    component: () => import(/* webpackChunkName: "theming" */ '../views/foundations/Theming.vue')
  },
  {
    path: '/foundations/typography',
    name: 'Typography',
    component: () => import(/* webpackChunkName: "typography" */ '../views/foundations/Typography.vue')
  },
  {
    path: '/guidelines/textinterface',
    name: 'Text interface',
    component: () => import(/* webpackChunkName: "textinterface" */ '../views/guidelines/TextInterface.vue')
  },
  {
    path: '/guidelines/errors',
    name: 'Errors',
    component: () => import(/* webpackChunkName: "errors" */ '../views/guidelines/Errors.vue')
  },
  {
    path: '/guidelines/notifications',
    name: 'Notification',
    component: () => import(/* webpackChunkName: "notification" */ '../views/guidelines/Notifications.vue')
  },
  {
    path: '/guidelines/digital',
    name: 'Digital',
    component: () => import(/* webpackChunkName: "digital" */ '../views/guidelines/Digital.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
