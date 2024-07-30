import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import MianView from '@/views/MainView.vue'
import { useToast } from "vue-toastification";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MianView,
      meta: {
        requiresAuth: true // 添加元数据以指示需要身份验证
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
  ]
})

router.beforeEach((to, from, next) => {
  const username = localStorage.getItem('username');
  const password = localStorage.getItem('pwd');
  const localTime = localStorage.getItem('timer');
  const days = 7;
  if (to.meta.requiresAuth) {
    const user = "21232f297a57a5a743894a0e4a801fc3";
    const pwd  = "21232f297a57a5a743894a0e4a801fc3";
    if (username == user && password == pwd) {
      const nowTimer  = new Date().getTime();
      const expireTime= nowTimer+( 24 * 60 * 60 * 1000 * days)
      if (!localTime) {
        next();
        localStorage.setItem('timer',expireTime)
      } else {
        if (nowTimer > localTime) {
          localStorage.removeItem('username');
          localStorage.removeItem('pwd')
          localStorage.removeItem('timer');
          next({ name: 'login' });
          useToast().error('用户信息过期');
        }else{
          next()
        }
      }
    } else {
      next('/login');
      useToast().error('账号密码错误');
    }
  } else {
    next()
  }
});
export default router
