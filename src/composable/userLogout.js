import { auth } from '@/firebase/config'
import { ref } from 'vue';
let error =ref('');

let logoutAccount =async()=>{
    try{
        await auth.signOut();
        console.log("you are log out")
       }catch(err){
        error.value =err.message
        console.log(err.message)
       }
}

let userLogout =()=>{
    return {error,logoutAccount}
}

export default userLogout