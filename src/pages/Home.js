import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import SideBar from '../component/SideBar'
import ProductLayout from '../component/ProductLayout'
import './Home.css'
import { db } from '../FirebaseConfig'
import { collection,onSnapshot } from 'firebase/firestore'

import PolicyPopup from '../component/PolicyPopup'

function Home() {

  const [timedPopup,setTimedPopup]=useState(false);
 
  useEffect(()=>{
    setTimeout (()=>{
      setTimedPopup(true);
    },3000);
  },[]);
 

  const [posts,setPost] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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
      <div className='homeContainer'>
      <div className='search-box'>
            <input type='text' placeholder='Search' onChange={(e)=>setSearchTerm(e.target.value)}/>
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className='content-container'>
        
        {posts.filter((post)=>{
      if(searchTerm == ""){
        return post;
      }else if(post.bookName.toLowerCase().includes(searchTerm.toLowerCase())){
         return post;
      }else if(post.author.toLowerCase().includes(searchTerm.toLowerCase())){
        return post;
      }else if(post.category.toLowerCase().includes(searchTerm.toLowerCase())){
        return post;
      }
    }).map(renderFunction)}
              
        </div>
      </div>
      <SideBar/>
      <PolicyPopup trigger ={timedPopup} setTrigger ={setTimedPopup}>
        <img src='/images/logoName.png'></img>
        <h3>Why To Buy, When you can Exchange</h3>
        {/* <img src='/images/policy3.png'></img> */}
      </PolicyPopup>
    </div>
  )
}

export default Home