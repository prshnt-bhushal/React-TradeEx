import React from 'react'
import './component_css/ProductLayout.css'
import { doc, deleteDoc , getDoc} from "firebase/firestore";
import {db ,store_age} from ".././FirebaseConfig"
import { refFromURL ,deleteObject} from "firebase/storage";
import { ref } from "firebase/storage";
function ProfileProductLayout(props) {
    const userPost = props.posttt;
    console.log(userPost)
    const username =userPost.postedUserId
    function deleteProduct(){
      getDoc(doc(db,'posts',username)).then((userPost)=>{
        const imgUrl= userPost.data().imageUrl;
        const imgRef = ref(store_age,imgUrl);
        deleteObject(imgRef).then(()=>{
          deleteDoc(doc(db,'posts',username)).then(()=>{
            alert('succesfully deleted your blog')
      
          }).catch((error)=>{
             alert('Error occured');
          })
        })
      })
    }
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
        <div className='deletePostBtn'onClick={deleteProduct}><i class="fa-solid fa-trash"></i></div>
    </div>
  )
}

export default ProfileProductLayout