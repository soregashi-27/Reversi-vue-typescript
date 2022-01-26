import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import VMain from '@/components/VMain.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'VMain',
    component: VMain,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
