import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CategoryView from '../views/CategoryView.vue';
import AdView from '../views/AdView.vue';
import PostAdView from '../views/PostAdView.vue';
import UserAuthView from '../views/UserAuthView.vue';
import AdminView from '../views/AdminView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/category/:category', component: CategoryView },
  { path: '/ad/:id', component: AdView },
  { path: '/post-ad', component: PostAdView },
  { path: '/auth', component: UserAuthView },
  { path: '/admin', component: AdminView },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;


