<template>
    <nav class="flex  justify-between" v-if="user">
       <div class="px-5">
       
         <p class="text-lg text-gray-600">Hi {{ user.displayName }}</p>
         <p class="text-sm text-gray-400">logged in as {{ user.email }}</p>
       </div>
       <button class="btn" @click="logout">Logout</button>
    </nav>

</template>

<script>

import userLogout from "../composable/userLogout"
import showData from "../composable/showData"
export default {
    setup(){
        //data
        
        //logout composable
        let  {error,logoutAccount} =userLogout()
        let logout =async()=>{
        //logout composable
        logoutAccount()
        }
        
        //showData composable
       let {userData,user} =showData()
       userData()

        return {logout,error,user}
    }
}
</script>

<style>

</style>