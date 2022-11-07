import React from 'react'
import './component_css/policy.css'
import SideBar from './SideBar'

function Policy() {
  return (
    <div className='showModalContainer'>
      <SideBar/>
        <div className='policyContainer'>
        <h3>Our Policies</h3>
        <img  src='/images/policy1.png'></img>
        <img  src='/images/policy2.png'></img>
        <img  src='/images/policy3.png'></img>
        </div>
    </div>
  )
}

export default Policy