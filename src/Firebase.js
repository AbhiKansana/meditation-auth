// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app'
import { getFirestore } from "@firebase/firestore"
import { getAuth , GoogleAuthProvider, signInWithPopup} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCRcdytHJac9t6LUIbbXwZMDXmdi9ANQX8",
    authDomain: "compact-scene-344207.firebaseapp.com",
    databaseURL: "https://compact-scene-344207-default-rtdb.firebaseio.com",
    projectId: "compact-scene-344207",
    storageBucket: "compact-scene-344207.appspot.com",
    messagingSenderId: "884116164638",
    appId: "1:884116164638:web:fba84eab8f4b24408a9e0f"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {

     return  signInWithPopup(auth,provider)
     
              // .then(res=>{
              //   console.log(res.user.email)
              //   return res.useer.email
              // })
              // .catch(err=>{
              //   console.log("error")
              // })
              
    

    
   }
     
  

 


 
