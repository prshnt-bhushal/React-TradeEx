import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyCunmab0caKxfV4hTZIG8CwXgg-z1gH4i8",
  authDomain: "project-tradeex.firebaseapp.com",
  projectId: "project-tradeex",
  storageBucket: "project-tradeex.appspot.com",
  messagingSenderId: "19389479509",
  appId: "1:19389479509:web:0ce1642f1283cf7ef832dc",
  measurementId: "G-EBYK8FBVCV"
};

// Initialize Firebase

const firebaseapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseapp);
const db =getFirestore(firebaseapp);
const store_age=getStorage(firebaseapp);
const auth =getAuth(firebaseapp);

export {auth, db, store_age};
export function useAuth(){
  const [currentUser, setCurretUser] = useState();
  const [Loggedin, setLoggedin] = useState(false);
  useEffect(()=>{
    const authCheck=onAuthStateChanged(auth,(user)=>{
      if(user){
        setCurretUser(user);
        setLoggedin(true);
      }
    })
    return authCheck
  },[])
  return {currentUser,Loggedin}
}