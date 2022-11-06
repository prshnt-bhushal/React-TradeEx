import React from 'react'
import './ForAuthorized.css'
import { Link } from 'react-router-dom'

function ForAdminRegister() {
  return (
    <div className='adminContainer'>
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
