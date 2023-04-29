import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import LandingPage from './views/LandingPage.vue'
import RegisterPage from './views/RegisterPage.vue'
import RecordPage from './views/RecordPage.vue'
const routes = [
  { 
    path: '/', 
    component: HomePage,
    name: 'HomePage', 
  },
  { 
    path: '/landing', 
    component: LandingPage,
    name: 'LandingPage',  
  },
  { 
    path: '/register', 
    component: RegisterPage,
    name: 'RegisterPage'
  },
  {
    path: '/records',
    component : RecordPage,
    name: 'RecordPage'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router