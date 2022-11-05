import React, { useEffect } from 'react'
import Button from './Button'
import './component_css/ProductUpload.css'
import SelectOptions from './SelectOptions'
import { useState } from 'react'
import { auth,db,store_age } from '../FirebaseConfig'
import { uploadBytes, getDownloadURL } from 'firebase/storage'
import { collection, addDoc } from 'firebase/firestore'
import { ref } from 'firebase/storage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'


function ProductUpload() {

 const navigate = useNavigate();
  const [productName, setProductName] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [brand,setBrand] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice,setProductPrice] = useState();
  const [imageFile, setImageFile] = useState(null);
  const [currentUserId,setUserId] = useState(null);

  useEffect(()=>{
    setInterval(()=>{
      setUserId(auth.currentUser.uid);
    },2000)
  },[])

  function uploadPost(){
    alert("Your Product is Uploading")

    if(imageFile==null)
    return;
    
  const imgRef = ref(store_age,`images/${imageFile.name}`);
  uploadBytes(imgRef,imageFile).then((snapshot) =>{
      getDownloadURL(imgRef).then((url)=>{
          const imgUrl = url;

            const dataObject = {
                productName : productName,
                category: selectValue,
                brand: brand,
                productDescription: productDescription,
                productPrice: productPrice,
                postedUserId: currentUserId,
                postUrl: imgUrl
            } 
   
     const docRef = collection(db,'posts')
     addDoc(docRef,dataObject).then((userRef)=>{
        alert('Product Uploaded Successfully')
        navigate('/profile');
        window.location.reload();
     }).catch((error)=>{
      alert(error.message);
     })
        })
  }).catch((error)=>{
      alert(error.message);
  })
  }

  const handleImageFile = (e) => {

    setImageFile(e.target.files[0]);
  }


  const [modal, setModal]=useState(false);
  
  const toggleModal =()=>{
      setModal(!modal)
    }
    if(modal){
      document.body.classList.add('activeModal');
    }
    else{
      document.body.classList.remove('activeModal');
    }
  
  return (
    <div className='showModal'>
      <button onClick={toggleModal} className='btn-modal'>Add product</button>
      {
        modal && (
          <div className='overlay'>
            <div className='productUploadContainer'>
        <div className='productDetails'>
        <i onClick={toggleModal} class="fa-solid fa-circle-xmark"></i>
            <h4>Product Details:</h4>
            <input type='text' id='name' placeholder='Name of the product' className='input-field1' onChange={(e)=>setProductName(e.target.value)}/>
            <div className='input-selection'>
            <select id="select-category" onChange={(e)=> setSelectValue(e.target.value)}>
                      Choose Category
                     <option value="none" selected disabled hidden>Select an Option</option>
                     <option>clothes</option>
                     <option>Books</option>
                     <option>others</option>
             </select>
            </div>
            <input className='input-field1' type='text' id='brand' placeholder='Brand' onChange={(e)=>setBrand(e.target.value)}/>
            <div className='input-textarea'><textarea id='description' cols='30' rows='3' placeholder='Product Description' onChange={(e)=>setProductDescription(e.target.value)}/></div>
            <div className='productPrice'>
                <h4>Price:</h4>
                <div className=' priceValue'>
                  <h4>Nrs.</h4><input className='input-field1' id='price' type='number' placeholder='Offered price' onChange={(e)=>setProductPrice(e.target.value)}/>
                </div>
            </div>
            <div className='productImages'>
            <h4>Images:</h4>
            <input id='productImg' type='file' accept="image/*" onChange={handleImageFile} />
        </div>
        </div>
        <div className='uploadbtn'>
            <button onClick={uploadPost}>Upload</button>
        </div>
        <div className='toastshow'>
        <ToastContainer/>
        </div>
        
    </div>
          </div>
        )
      }
    </div>
   
  )
}

export default ProductUpload