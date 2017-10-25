import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: require('@/components/LandingPage'),
    },
    {
      path: '/layout',
      name: 'layout',
      component: require('@/components/LayoutPage'),
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
