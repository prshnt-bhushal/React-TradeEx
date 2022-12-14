import React from 'react'
import { useParams } from 'react-router-dom';

function OptionLayout(props) {
    const userPost = props.posttt;

    const {eMailTo,ebookName} = useParams();
   

    function sendEmail(){
        // ${userPost.postUserEmail}
    window.location = `mailto:${eMailTo}?subject=REQUEST TO EXCHANGE &body=I want to trade your Book ${ebookName} with my ${userPost.bookName} Book `;
    console.log('clicked');
  }

  return (
    <div onClick={()=>sendEmail()} className='finalChooiceBox'>
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
    </div>
    </div>
  )
}

export default OptionLayout