import React from 'react'
import { Link } from 'react-router-dom'
import './component_css/SideBar.css'
import { useState } from 'react'
import Policy from './Policy'

function SideBar() {
  function btnCloseClick(){
    // const ads =document.getElementById('ad-image');
    alert('Just watch it')
  }
  // const [modal, setModal]=useState(false);
  
  // const toggleModal =()=>{
  //     setModal(!modal)
  //   }
  //   if(modal){
  //     document.body.classList.add('activeModal');
  //   }
  //   else{
  //     document.body.classList.remove('activeModal');
  //   }

  return (
    <div className='right-sidebar'>
        <div className='ads'>
            <div className='sidebar-title'>
                <h4>Advertisement</h4>
                <Link to="#" onClick={btnCloseClick}>Close</Link>
            </div>
            <img id='ad-image' src='/images/advertisement.png' alt='ads-photos'/>
        </div>
        <div className='imp-links'>
        <Link to='/'>
            <i class="fa-solid fa-house"></i>Home
            </Link>
            <Link to ='/profile'>
            <i class="fa-solid fa-user"></i>Your Profile
            </Link>
            {/* <Link>
            <i class="fa-regular fa-message"></i>Messages
            </Link> */}
            <Link>
            <i class="fa-regular fa-bookmark"></i>policy
            </Link>
            <Link to ='/aboutus'>
            <i class="fa-solid fa-info"></i>About Us
            </Link>
        </div>

    </div>
  )
}

export default SideBar