<template>
 <h3 class="text-lg">Sign in</h3>
  
  <form @submit.prevent="singUp">
    <div>
        <input type="text" placeholder="Enter your name" v-model="name" class="h-10 text-sm text-gray-500">

        <input type="email" placeholder="Enter your email" v-model="email" class="h-10 text-sm  text-gray-500">

        <input type="password" placeholder="Enter your password" v-model="password" class="h-10 text-sm  text-gray-500">
        <div class="error" v-if="error">{{ error }}</div>
    </div>
     
        <button class="btn">Sign Up</button>

  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import getSingUp from "../composable/getSingUp"
export default {
    emits:["enterChatRoom"],
    setup(props,context){
        let name =ref("");
        let email =ref("");
        let password =ref("");
       
        
         let {error,createAccount}= getSingUp()

        let singUp =async()=>{
          let res =  await createAccount(name.value,email.value,password.value)

        if(res){
            error.value =""
            context.emit("enterChatRoom")
        }
        }
        
        return {name,email,password,singUp,error}
    }
}
</script>

<style>
h3{
    color: rgb(209, 196, 196);
}

</style>