import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import SideBar from '../component/SideBar'
import ProductLayout from '../component/ProductLayout'
import './Home.css'
import { db } from '../FirebaseConfig'
import { collection,onSnapshot } from 'firebase/firestore'

function Home() {

  const [posts,setPost] = useState([]);

  useEffect(()=>{
    
    const postRef  = collection(db,'posts');
    onSnapshot(postRef,(snapshot)=>{
      const pos= snapshot.docs.map((doc)=>({
        id: doc.id,
        ...doc.data(),
      }))
      setPost(pos);
    })
  },[])


  const renderFunction = (postt)=>{

     return <ProductLayout post= {postt}/>
  }
  return (
    <div className='containerBox'>
      <Header/>
      <div className='homeContainer'>
        <div className='content-container'>
               {posts.map(renderFunction)}
        </div>
      </div>
      <SideBar/>
    </div>
  )
}

export default Home