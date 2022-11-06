import React from 'react'
import './component_css/ProductLayout.css'

function ProfileProductLayout(props) {
    const userPost = props.posttt;
  return (
    <div className='ProductLayoutContainer'>
        <div className='productImage'><img src={userPost.postUrl}/></div>
        <div className='middleSection'>
        <div className='productDetails'>
            <h2>{userPost.bookName}</h2><span>{userPost.category}</span>
            <h3>{userPost.author}</h3>
            <h4>{userPost.publication}</h4>
            <p>{userPost.bookDescription}</p>
        </div>
        <div className='username'>posted by: You</div>
        </div>
        <div className='deletePostBtn'><i class="fa-solid fa-trash"></i></div>
    </div>
  )
}

export default ProfileProductLayout