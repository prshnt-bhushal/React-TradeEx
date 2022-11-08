import React from 'react'
import './component_css/ProductLayout.css'
import { doc, deleteDoc , getDoc} from "firebase/firestore";
import {db ,store_age} from ".././FirebaseConfig"
import { refFromURL ,deleteObject} from "firebase/storage";
import { ref } from "firebase/storage";


function AdminProductLayout(props) {
const userPost = props.post;
 const userId = userPost.postedUserId;

  return (
    <div className='ProductLayoutContainer'>
        <div className='productImage'><img src={userPost.postUrl}/></div>
        <div className='middleSection'>
        <div className='productDetails'>
            <h2>Book Name:{userPost.bookName}</h2>
            <h2>Offered Valuation Nrs.{userPost.bookPrice}</h2><span>{userPost.category}</span>
            <h3>{userPost.author}</h3>
            <h4>{userPost.publication}</h4>
            <p>{userPost.bookDescription}</p>
        </div>
        <div className='username'>posted by:{userPost.postedUser}</div>
        </div>
        
        <div className='deletePostBtn'><i class="fa-solid fa-trash"></i></div>

    </div>
  )
}

export default AdminProductLayout