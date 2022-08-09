import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAwT0TTH0CwvSaOMZ6J2aUxw8DgHIh9ycA",
    authDomain: "vue-blog-system-1da55.firebaseapp.com",
    projectId: "vue-blog-system-1da55",
    storageBucket: "vue-blog-system-1da55.appspot.com",
    messagingSenderId: "917166635074",
    appId: "1:917166635074:web:9f8a901b4f31d0afa055db"
  };

//fire base init
firebase.initializeApp(firebaseConfig);

//fire store init
let db =firebase.firestore()

//auth system init
let auth =firebase.auth()

//time stamp
let timestamp =firebase.firestore.FieldValue.serverTimestamp

export {db,timestamp,auth}