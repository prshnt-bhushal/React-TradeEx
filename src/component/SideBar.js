import React from 'react'
import { Link } from 'react-router-dom'
import './component_css/SideBar.css'

function btnCloseClick(){
  // const ads =document.getElementById('ad-image');
  alert('Just watch it')
}

function SideBar() {
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
            <Link to ='/profile'>
            <i class="fa-solid fa-user"></i>Your Profile
            </Link>
            <Link to='/'>
            <i class="fa-solid fa-shop"></i>Market
            </Link>
            <Link>
            <i class="fa-regular fa-message"></i>Messages
            </Link>
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