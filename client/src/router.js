//import Vue from 'vue';
//import Router from 'vue-router';
//import Signin from './views/Signin.vue';
//import Signup from './views/Signup.vue';

//Vue.use(Router);

//export default new Router({
//  mode: 'history', // Use history mode for clean URLs
//  routes: [
//    //{
//    //  path: '/',
//    //  name: 'Home',
//    //  component: Home,
//    //},
//    {
//      path: '/signin',
//      name: 'Signin',
//      component: Signin,
//    },
//    {
//      path: '/signup',
//      name: 'Signup',
//      component: Signup,
//    },
//  ],
//});

import { createRouter, createWebHistory } from 'vue-router';
import Signin from './views/Signin.vue';
import Signup from './views/Signup.vue';

const routes = [
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

