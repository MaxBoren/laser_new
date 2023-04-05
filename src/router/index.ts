import { createRouter, createWebHashHistory  } from 'vue-router';
import Home from '../view/home/index.vue';
import aMap from '../view/amap/index.vue';

const router = createRouter({
    history: createWebHashHistory (),
    routes: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/amap',
        component: aMap
      }
    ]
});

export default router;
