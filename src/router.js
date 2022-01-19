import { createRouter, createWebHistory } from "vue-router";

import AllUsers from './pages/AllUsers.vue';
import CourseGoals from './pages/CourseGoals.vue';

const router = createRouter({
  history: createWebHistory('/vue-animations/'),
  routes: [
    { path: '/', redirect: '/users' },
    { path: '/users', component: AllUsers },
    { path: '/goals', component: CourseGoals }
  ]
});

export default router;