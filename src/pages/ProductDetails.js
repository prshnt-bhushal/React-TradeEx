import React from 'react'
import '../component/component_css/ProductDetails.css'

function ProductDetails() {
  return (
    <div className='productDetailsContainer'>
      <div className='productDetailsBox'>
        <img className='productImagepage' src='/images/user-icon.png'/>
        <div className='productDetail'>
          <div className='userInfo'>
            <h2>Username</h2>
            {/* <h3>Contact Info:</h3>
            <div className='socialHandels'>
            <i class="fa-regular fa-envelope"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-solid fa-phone"></i>
            </div> */}
          </div>
          <div className='productInfo'>
          <h2>ProductName</h2><span>Category</span>
            <h3>Author</h3>
            <h4>Publication</h4>
            <p>Description</p>
            </div>  
        </div>
        <div className='requestE' data-hover='Request Exchange'><img src='/images/request-item.png'/></div> 
      </div>  
      <div className='RecommendationBox'>
        <h1>Similar Products</h1>
        <div className='RecommendationProducts'></div>
        </div>  
    </div>
  )
}

export default ProductDetails