<template>
    <nav class="flex  justify-between">
       <div class="px-5">
       
         <p class="text-lg">this is user name</p>
         <p class="text-sm text-gray-400">this is user email</p>
       </div>
       <button class="btn" @click="logout">Logout</button>
    </nav>

</template>

<script>
import userLogout from "../composable/userLogout"
export default {
    setup(){
        //logout composable
         let  {error,logoutAccount} =userLogout()
        let logout =async()=>{
        //logout composable
        logoutAccount()
        }


        return {logout,error}
    }
}
</script>

<style>

</style>