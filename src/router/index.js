import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '../views/WelcomePage.vue'
import ChatRoom from "../views/ChatRoom.vue"

const routes = [
  {
    path: '/',
    name: 'welcomePage',
    component: WelcomePage
  },

  {
    path:"/chatRoom",
    name:"chatRoom",
    component:ChatRoom
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
