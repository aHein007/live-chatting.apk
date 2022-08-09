import { ref } from "vue";
import {auth} from "../firebase/config"

let error =ref("");

let loginAccount =async(email,password)=>{
    try{
        let res= await auth.signInWithEmailAndPassword(email,password);
       if(!res){
        throw new Error("can't login user account");
       }
       return res
       }catch(err){
        error.value =err.message
       }
}

let getLogin =()=>{
    return {error,loginAccount}
}

export default getLogin