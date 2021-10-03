import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../layouts/Default.vue'),
    children: [
      {
        path:'/employes',
        name:'employes',
        component: () => import('../views/Employee.vue')
      }, 
      {
        path:'/add',
        name:'ADD',
        component: () => import('../views/employee/create.vue')
      },
    ]
  },
 
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
