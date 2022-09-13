import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/login',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/LoginPage/index.vue')
  },
  // 申报单位
  {
    path: '/declare-unit',
    name: 'declare-unit',
    component: () =>import( '../components/Main.vue'),
    title: '申报单位',
    children: [
      {
        path: 'project-list',
        name: 'declare-unit/project-list',
        component: (resolve) => require(['../views/DeclareUnit/ProjectList.vue'], resolve),
        title: '项目列表',
      },
      {
        path: 'project-detail',
        name: 'declare-unit/project-detail',
        component: (resolve) => require(['../views/DeclareUnit/ProjectDetail.vue'], resolve),
        title: '项目追踪',
      }
    ]
  },
  // 评价机构
  {
    path: '/rating-agencies',
    name: 'rating-agencies',
    component: () =>import( '../components/Main.vue'),
    title: '评价机构',
    children: [
      {
        path: 'project-list',
        name: 'rating-agencies/project-list',
        title: '项目列表',
        component: (resolve) => require(['../views/RatingAgencies/ProjectList.vue'], resolve)
      },
      {
        path: 'project-detail',
        name: 'rating-agencies/project-detail',
        title: '项目追踪',
        component: (resolve) => require(['../views/RatingAgencies/ProjectDetail.vue'], resolve)
      },
      {
        path: 'project-list-ee',
        name: 'rating-agencies/project-list-ee',
        title: '专家审核列表页',
        component: (resolve) => require(['../views/RatingAgencies/ProjectListEE.vue'], resolve)
      },
    ]
  },
  // 评审专家
  {
    path: '/evaluation-experts',
    name: 'evaluation-experts',
    component: () =>import( '../components/Main.vue'),
    title: '评审专家',
    children: [
      {
        path: 'project-list',
        name: 'evaluation-experts/project-list',
        title: '项目列表',
        component: (resolve) => require(['../views/EvaluationExperts/ProjectList.vue'], resolve)
      },
      {
        path: 'project-detail',
        name: 'evaluation-experts/project-detail',
        title: '项目追踪',
        component: (resolve) => require(['../views/EvaluationExperts/ProjectDetail.vue'], resolve)
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
