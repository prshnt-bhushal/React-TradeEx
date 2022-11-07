import React from 'react'

function OptionLayout(props) {
    const userPost = props.posttt;

    function sendEmail(){
        // ${userPost.postUserEmail}
    window.location = `mailto:abc@gmail.com?subject=REQUEST TO EXCHANGE &body=I want to trade your book ${userPost.bookName} with my ${userPost.bookName} `;
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