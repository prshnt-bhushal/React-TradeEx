import React from 'react'
import ButtonMailTo from './ButtonMailTo';
import './component_css/ProductLayout.css'

function ProductLayout(props) {

  function requestExchange(){
    <ButtonMailTo label="Write me an E-Mail" mailto="mailto:no-reply@example.com" />
  }

 const userPost = props.post;
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
        
        <div className='requestExchangebtn' data-hover='Request Exchange'><img onClick={requestExchange} src='/images/request-item.png'/></div>
    </div>
  )
}

export default ProductLayout