<template>

    

  <div class="container" :class="{light:changeBg==true,dark:changeBg==false}" >
        
    <!-- light and dark mode -->
     <div class="flex justify-end mt-5 px-5 space-x-2 py-1">
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
    
    <NaBar></NaBar>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import NaBar from '../components/NaBar'
export default {
  components: { NaBar },
  setup(){
     let changeBg =ref(true)


     return {changeBg}
  }

}
</script>

<style >
.dark{
  background-color:#183153;
  color:rgb(230, 230, 230);
  transition: all 0.8s ease-out;
  
}

.light{
  background-color: white;
  color: rgb(165, 160, 160);
  transition: all 0.8s ease-out;
}
</style>