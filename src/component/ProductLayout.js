import React from 'react'
import './component_css/ProductLayout.css'

function ProductLayout(props) {

 const userPost = props.post;
  return (
    <div className='ProductLayoutContainer'>
        <div className='productImage'><img src={userPost.postUrl}/></div>
        <div className='productDetails'>
            <h2>{userPost.productName}</h2>
            <h3>{userPost.brand}</h3>
            <p>{userPost.productDescription}</p>
        </div>
        <div className='requestExchangebtn'><a href='#'><img src='/images/request-item.png'/></a></div>
    </div>
  )
}

export default ProductLayout