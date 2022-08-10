import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/global.css"
import {auth} from "./firebase/config"

let app;

//auth library ကို စောင့် ပြီးတော့ မှ create လုပ်ပါမယ်။
auth.onAuthStateChanged(()=>{
   if(!app){
    app =createApp(App).use(router).mount('#app')
   }
})


