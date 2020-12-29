import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import { routes } from './router'
import App from './App.vue'

import './assets/index.css';

const router = createRouter({
     history: createWebHistory(),
     routes,
})
createApp(App).use(router).mount('#app');