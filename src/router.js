import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import { resolve } from 'path';

Vue.use(Router)
console.log(process.env);
const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children:[
        {
          path: '',
          redirect:'/chats'
        },
        {
          path: '/chats',
          name: 'chats',
          component: ()=>import('./views/Chats.vue')
        },
        {
          path: '/contacts',
          name: 'contacts',
          component: ()=>import('./views/Contacts.vue')
        },
        {
          path: '/discover',
          name: 'discover',
          component: ()=>import('./views/Discover.vue')
        },
        {
          path: '/me',
          name: 'me',
          component: ()=>import('./views/Me.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: ()=>import('./views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: resolve=>require(['./views/Register.vue'],resolve)
    },
    {
      path: '/moments',
      name: 'moments',
      component: resolve=>require(['./views/Moments.vue'],resolve)
    },
    {
      path: '/publish',
      name: 'publish',
      component: resolve=>require(['./views/Publish.vue'],resolve)
    }
  ]
});
// 路由守卫
router.beforeEach((to,from,next)=>{
  const wxpyqToken = localStorage.wxpyqToken ? true : false;
 if(to.path =='/login' || to.path == '/register'){
   next();
 }else{
  wxpyqToken ? next():next('/login');
 }
})
export default router;
