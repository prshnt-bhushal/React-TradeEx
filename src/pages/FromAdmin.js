import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import SideBar from '../component/SideBar'
import AdminProductLayout from '../component/AdminProductLayout'
import './Home.css'
import { db } from '../FirebaseConfig'
import { collection,onSnapshot } from 'firebase/firestore'

function FromAdmin() {

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

     return <AdminProductLayout post= {postt}/>
  }
  return (
    <div className='admincontainerBox'>
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
    </div>
  )
}

export default FromAdmin