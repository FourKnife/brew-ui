import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: require('@/components/LayoutPage'),
      children: [
        {
          path: 'installed',
          name: 'installed',
          component: require('@/components/Installed'),
        },
      ],
    },
    {
      path: '/help',
      component: require('@/components/LandingPage'),
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
