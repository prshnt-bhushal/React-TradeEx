import React, { useEffect, useState } from 'react'
import './ProfilePage.css'

import ProfileProductLayout from '../component/ProfileProductLayout'
import ProductUpload from '../component/ProductUpload'
import Sidebar from '../component/SideBar'
import { db } from '../FirebaseConfig'
import { auth } from '../FirebaseConfig'
import { where } from 'firebase/firestore'
import { collection,onSnapshot,query } from 'firebase/firestore'



function ProfilePage() {
  const user_name =auth.currentUser.displayName;
  const [posts,setPost] = useState([]);
  const [currrentUserID, setCurrentUserID] = useState(null);

  useEffect(()=>{
    const postRef  = collection(db,'posts');
    const q = query(postRef, where("postedUser", "==", user_name));
    onSnapshot(q,(snapshot)=>{
      const pos= snapshot.docs.map((doc)=>({
        id: doc.id,
        ...doc.data(),
      }))
      setPost(pos);
      console.log(posts);
    })
   /* setInterval(()=>{
     // setCurrentUserID(auth.currentUser.uid);
      const postRef  = collection(db,'posts');
      const q = query(postRef, where("postedUserId", "==", "tfry6FBmQFcWxqcFtJ96cwImMox1"));
      onSnapshot(postRef,(snapshot)=>{
        const pos= snapshot.docs.map((doc)=>({
          id: doc.id,
          ...doc.data(),
        }))
        setPost(pos);
      })
    },2000) */
   },[])



  const renderFunction = (postt)=>{

     return <ProfileProductLayout posttt= {postt}/>
  }
  return (
    <div>
      <Sidebar/>
      <ProductUpload/>
      <div className='profileContainerBox'>
      <div className='profileContainer'>
      {posts.map(renderFunction)}
      </div>
      </div>
    </div>
  )
}

export default ProfilePage