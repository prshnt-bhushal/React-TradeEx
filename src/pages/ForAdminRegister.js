import React from 'react'
import './ForAuthorized.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import LoadingSpinner from '../component/LoadingSpinner';

function ForAdminRegister() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className='adminContainer'>
      {isLoading && <LoadingSpinner/>}
        <div className='login-box'>
        <h2 className='title'>REGISTER</h2>
        <input className='adminMail' type="email" name="adminRegisterMail" placeholder="Email"/>
        <input className='adminPass' type="password" name="adminRegisterPass" placeholder="Password"/>
        <button className='loginbtn'>Register</button>
        <Link to='/admin'>Login</Link>
        </div>
    </div>
  )
}

export default ForAdminRegister
