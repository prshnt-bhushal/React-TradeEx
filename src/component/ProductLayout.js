import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import ButtonMailto from './ButtonMailTo'
import './component_css/ProductLayout.css'
// import Mailto from 'react-mailto'

function ProductLayout(props) {

  const navigate=useNavigate();
  

  // function sendEmail(){
  //   window.location = `mailto:${userPost.postUserEmail}?subject=Exchange Requested&body=I want to trade this book ${userPost.bookName}`;
  //   console.log('clicked');
  // }



 const userPost = props.post;
 const userId = userPost.postedUserId;

  return (
    <div className='ProductLayoutContainer'>
        <div className='productImage'><img src={userPost.postUrl}/></div>
        <div className='middleSection'>
        <div className='productDetails'>
            <h2>{userPost.bookName}</h2><span>{userPost.category}</span>
            <h3>{userPost.author}</h3>
            <h4>{userPost.publication}</h4>
            <p>{userPost.bookDescription}</p>
            {/* <h1>Nrs.{userPost.bookPrice}</h1> */}
        </div>
        <div className='username'>posted by:{userPost.postedUser}</div>
        </div>
        
        <div className='requestExchangebtn' data-hover='Request Exchange'><Link to ={{
          pathname: '/choose-option',
          // state:userPost.postUserEmail
        }}>
          <img src='/images/request-item.png'/>
          </Link></div>
    </div>
  )
}

export default ProductLayout