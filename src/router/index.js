import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '../views/WelcomePage.vue'
import ChatRoom from "../views/ChatRoom.vue"
import { auth } from '../firebase/config'


const routes = [
  {
    path: '/',
    name: 'welcomePage',
    component: WelcomePage
  },

  {
    path:"/chatRoom",
    name:"chatRoom",
    component:ChatRoom,
    beforeEnter(to,from,next){
      let user =auth.currentUser
      if(user){
        next()
      }else{
        next({name:"welcomePage"})
      }
    }
  },

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
