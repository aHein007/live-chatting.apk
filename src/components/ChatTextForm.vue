<template>
  <form class="m-10">
    <textarea v-model="message" @keypress.enter="handleEnter" placeholder="Text message and hit enter to message" class="textArea"></textarea>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import showData from '../composable/showData';
import {timestamp} from "../firebase/config"
export default {
    setup(){
        let message =ref();
        let {user,userData} =showData()
        let handleEnter =()=>{
            userData()
           let users ={
            message:message.value,
            name:user.value.displayName,
            created_at:timestamp()
           }
           message.value=""
            console.log(users)
        }


        return {message,handleEnter}
    }
}
</script>

<style >

</style>