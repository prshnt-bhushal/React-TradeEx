import React from 'react'
import { useState } from 'react'
import './ForAuthorized.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../FirebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'

function ForAuthorized({setLoggedin}) {
    const navigate =useNavigate();
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');

    function btnLoginClick(){
        signInWithEmailAndPassword(auth,email,pass).then((userDetails)=>{
            localStorage.setItem('isAuth',true);
            setLoggedin(true);
            navigate('/')
        }).catch((error)=>{
            const err=error.message;
            alert(err);
        })
    }

  return (
    <div className='adminContainer'>
        <div className='login-box'>
        <h2 className='title'>LOGIN</h2>
        <input className='adminMail' type="email" name="adminMail" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
        <input className='adminPass' type="password" name="adminPass" placeholder="Password" onChange={(e)=>setPass(e.target.value)}/>
        <a href='#'>Forget Password?</a>
        <button onClick={btnLoginClick} className='loginbtn'>Login</button>
        <Link to='/admin-register'>Register</Link>
        </div>
    </div>
  )
}

export default ForAuthorized