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
import LoadingSpinner from './LoadingSpinner'


function ProductUpload() {
  

 const navigate = useNavigate();
 const [isLoading, setIsLoading] = useState(false);
  const [bookName, setBookName] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [author,setAuthor] = useState('');
  const [publication,setPublication] = useState('');
  const [bookDescription, setBookDescription] = useState('');
  const [bookPrice,setBookPrice] = useState();
  const [imageFile, setImageFile] = useState(null);
  const [currentUserId,setUserId] = useState(null);

  const user_name =auth.currentUser.displayName;
  const userEmail =auth.currentUser.email;

  useEffect(()=>{
    setInterval(()=>{
      setUserId(auth.currentUser.uid);
    },2000)
  },[])

  function uploadPost(){
    alert("Your Product is Uploading")
    setIsLoading(true);

    if(imageFile==null)
    return;
    
  const imgRef = ref(store_age,`images/${imageFile.name}`);
  uploadBytes(imgRef,imageFile).then((snapshot) =>{
      getDownloadURL(imgRef).then((url)=>{
          const imgUrl = url;

            const dataObject =  {
                bookName : bookName,
                category: selectValue,
                author: author,
                publication:publication,
                bookDescription: bookDescription,
                bookPrice: bookPrice,
                postedUserId: currentUserId,
                postedUser:user_name,
                postUrl: imgUrl,
                postUserEmail:userEmail
            } 
   
     const docRef = collection(db,'posts')
     addDoc(docRef,dataObject).then((userRef)=>{
        setIsLoading(false);
        alert('Product Uploaded Successfully')
        navigate('/profile');
        setModal(!modal);
        // window.location.reload();
     }).catch((error)=>{
      alert(error.message);
      setIsLoading(false);
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
    <>
    {isLoading && <LoadingSpinner/>}
    <div className='showModal'>
      <button onClick={toggleModal} className='btn-modal'>Add Books</button>
      {
        modal && (
          <div className='overlay'>
            <div className='productUploadContainer'>
        <div className='productDetails'>
        <i onClick={toggleModal} class="fa-solid fa-circle-xmark"></i>
            <h4>Book Details:</h4>
            <input required type='text' id='Name' placeholder='Name' className='input-field1' onChange={(e)=>setBookName(e.target.value)}/>
            <div className='input-selection'>
            <select required id="select-category" onChange={(e)=> setSelectValue(e.target.value)}>
                     <option value="none" selected disabled hidden>Category</option>
                     <option>Novel</option>
                     <option>Manga</option>
                     <option>Thriller</option>
                     <option>Educational</option>
                     <option>Bussiness</option>
                     <option>History</option>
                     <option>Biography</option>
                     <option>Mystery</option>
                     <option>Fiction</option>
                     <option>Fantasy</option>
                     <option>Others</option>
             </select>
            </div>
            <input required className='input-field1' type='text' id='Author' placeholder='Author' onChange={(e)=>setAuthor(e.target.value)}/>
            <input required className='input-field1' type='text' id='Publication' placeholder='Published year /Edition' onChange={(e)=>setPublication(e.target.value)}/>
            <div className='input-textarea'><textarea id='description' cols='30' rows='3' placeholder='Description' onChange={(e)=>setBookDescription(e.target.value)}/></div>
            <div className='productPrice'>
                <h4>Price:</h4>
                <div className=' priceValue'>
                  <h4>Nrs.</h4><input required className='input-field1' id='price' type='number' placeholder='Offered price' onChange={(e)=>setBookPrice(e.target.value)}/>
                </div>
            </div>
            <div className='productImages'>
            <h4>Images:</h4>
            <input id='productImg' type='file' accept="image/*" onChange={handleImageFile} />
        </div>
        </div>
        <div className='uploadbtn'>
            <button onClick={uploadPost} disabled={isLoading}>Upload</button>
        </div>
        <div className='toastshow'>
        <ToastContainer/>
        </div>
        
    </div>
          </div>
        )
      }
    </div>
    </>
  )
}

export default ProductUpload

