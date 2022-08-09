<template>
 <h3 class="text-lg">Login</h3>
  <form @submit.prevent="login">
    <div>

        <input type="email" placeholder="Enter your email" v-model="email" class="h-10 text-sm">
        <input type="password" placeholder="Enter your password" v-model="password" class="h-10 text-sm ">
        <div v-if="error" class="error">{{ error }}</div>
    </div>
        
        <button class="btn">Login</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import getLogin from "../composable/getLogin"
export default {
    setup(){
        let email =ref("");
        let password =ref("");
        
        let {error,loginAccount} =getLogin()

         let login =async()=>{
           let res =await  loginAccount(email.value,password.value)
            if(res){
                error.value=""
                console.log(res.user);
            }
        }

        return {email,password,login,error}
    }
}
</script>

<style>

</style>