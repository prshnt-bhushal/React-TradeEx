import React from 'react'
import './ProfilePage.css'
import ProductLayout from '../component/ProductLayout'
import ProductUpload from '../component/ProductUpload'
import Sidebar from '../component/SideBar'

function ProfilePage() {
  return (
    <div>
      <Sidebar/>
      <ProductUpload/>
      <div className='profileContainerBox'>
      <div className='profileContainer'>
        
      </div>
      </div>
    </div>
  )
}

export default ProfilePage