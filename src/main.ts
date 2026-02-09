import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { createHead } from '@unhead/vue/client'
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import './styles/prose.css'
import './styles/markdown.css'
import 'uno.css'
import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).use(createHead()).mount('#app')
