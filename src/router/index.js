import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../layouts/Default.vue'),
    children: [
      {
        path: '/employes',
        name: 'employes',
        component: () => import('../views/Employee.vue'),
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/Dashboard.vue'),
      },
      {
        path: '/add',
        name: 'ADD',
        component: () => import('../views/employee/create.vue'),
      },
      {
        path: '/edit/:id',
        name: 'EDIT',
        component: () => import('../views/employee/create.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
