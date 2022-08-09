<template >
  <div class="welcome container" :class="{light:changeBg==true,dark:changeBg==false}" >
    <!-- light and dark mode -->
     <div class="flex justify-end mt-2 px-5 space-x-2">
        <span class="text-gray-500"><i class="fa-solid fa-sun"></i> Light</span>
          <input type="checkbox" class="hidden " name="" id="toggle">

          <label for="toggle">
            <div class="w-9 h-5 flex items-center bg-gray-300 p-1 rounded-full cursor-pointer" @click="changeBg=!changeBg">
              <div class="w-4 h-4 bg-white rounded-full shadow-md toggle-dot transform duration-300"></div>
            </div>
          </label>
        
        <span class="text-gray-300">Dark <i class="fa-solid fa-moon"></i></span>
    </div>
    <!-- light and dark mode -->
    <div >
      <h1 class="text-3xl">Post Man <i class="fa-solid fa-message"></i> </h1>  
   
    <div v-if="changeForm">
      <LoginForm></LoginForm>
       <p class="text"> You don't have account?<small @click="changeForm=!changeForm" class="color">Sign Up</small> here!</p>
    </div>
    <div v-else>
       <SignFrom></SignFrom>
      <p class="text">You have already account? <small @click="changeForm=!changeForm" class="color">Login</small> here!</p>
    </div>
    </div>

   
  </div> 
  
</template>

<script>
import { ref } from '@vue/reactivity'
import LoginForm from '../components/LoginForm'
import SignFrom from '../components/SignFrom'
export default {
  components: {
    LoginForm, SignFrom },

    setup(){
      let changeBg =ref(true)
      let changeForm =ref(true);
     
      

      return {changeForm,changeBg}
    }

}
</script>

<style>
.welcome{
    text-align: center;
    padding: 20px 0px;
   
}

h1{
  text-align: center;
  color: rgb(223, 179, 255);
}

.color{
  color:  rgb(223, 179, 255);
cursor: pointer;
}

.text{
  color: rgb(177, 176, 176);
}

.dark{
  background-color:#183153;
  color:rgb(177, 176, 176);
  transition: all 0.8s ease-out;
  
}

.light{
  background-color: white;
  color: rgb(177, 176, 176);
  transition: all 0.8s ease-out;
}
</style>