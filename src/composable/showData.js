import { auth } from "@/firebase/config";
import { ref } from "vue";

//currentUser is ,knowing now user
let user =ref(auth.currentUser);
let userData=()=>{
    // onAuthStateChanged is check when you login or logout
    auth.onAuthStateChanged((_user)=>{
            user.value =_user
        })
} 

let showData =()=>{
    return {userData,user}
}
export default showData