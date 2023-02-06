import { initializeApp } from 'firebase/app';
import { getAuth, signOut} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAHD29TmftSEcKoN12K8DWYSUNfxPog0OE",
    authDomain: "shopping-web-intern.firebaseapp.com",
    projectId: "shopping-web-intern",
    storageBucket: "shopping-web-intern.appspot.com",
    messagingSenderId: "78113157489",
    appId: "1:78113157489:web:413bd83161585a737d46d0",
    measurementId: "G-GK61W9Z2JY"
  };

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app)

export const logOut = () => {
  signOut(auth)
    
  .catch((err) => {
    console.log(err)
  })
}