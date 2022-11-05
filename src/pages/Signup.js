import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'
import Button from '../component/Button';

import { auth, db } from '../FirebaseConfig';
import {createUserWithEmailAndPassword ,signInWithEmailAndPassword ,updateProfile, signOut } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';



function btnloginclick(){
  const email$ =document.getElementById('sign-in-email').value;
  const pass$ =document.getElementById('sign-in-password').value;
  signInWithEmailAndPassword(auth, email$, pass$)
  .then((userCredential) => {
    const user = userCredential.user;
    alert("Login successful,Welcome To TradeEx")
    window.location.href='/';
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(error.message)
  });
}

function btnRegisterclick(){
  const email =document.getElementById('sign-up-email').value;
  const pass =document.getElementById('sign-up-password').value;
  const username =document.getElementById('sign-up-username').value;
  createUserWithEmailAndPassword(auth, email,pass).then((userCredential)=>{
    const user =userCredential.user;
    const user_id=userCredential.user.uid;
    const data={
      email:email,
      username:username,
      password:pass
    }
    const docRef= doc(db,'user',userCredential.user.uid);
    updateProfile(auth.currentUser,{displayName:username}).then(()=>{
      setDoc(docRef,data).then((documentRef)=>{
        alert('user has been registered proceed to login');
        window.location.reload(false);
      })
    })
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(error.message)
  });
}
function showSignup(){
  const container = document.querySelector('.container');
  container.classList.add('sign-up-mode');
}function hideSignup(){
  const container = document.querySelector('.container');
  container.classList.remove('sign-up-mode');
}
function Signup() {
  return (
    <div className='container'>
      <div className='forms-container'>
        <div className='signin-signup'>
          <form action='#' className='sign-in-form'>
            <h2 className='title'>LOGIN</h2>
            <div className='input-field'>
              <i class="fas fa-envelope"></i>
              <input type="email" name="email" id="sign-in-email" placeholder="Email"/>
            </div>
            <div className='input-field'>
              <i class="fas fa-lock"></i>
              <input type="password" name="password" id="sign-in-password" placeholder="Password"/>
            </div>
            <div className='forget-pass'>
            <Link to='#'>forget Password?
            </Link>
            </div>
            <button onClick={btnloginclick} type="button" id="btn-login" class="btn solid">LOGIN</button>
          </form>
        </div>

        <div className='signin-signup'>
          <form action='#' className='sign-up-form'>
            <h2 className='title'>SIGN UP</h2>
            <div className='input-field'>
              <i class="fas fa-user"></i>
              <input type="text" name="username" id="sign-up-username" placeholder="Username"/>
            </div>
            <div className='input-field'>
              <i class="fas fa-envelope"></i>
              <input type="email" name="email" id="sign-up-email" placeholder="Email"/>
            </div>
            <div className='input-field'>
              <i class="fas fa-lock"></i>
              <input type="password" name="password" id="sign-up-password" placeholder="Password"/>
            </div>
            <button type="button" onClick={btnRegisterclick} id="btn-register" class="btn solid">Register</button>
          </form>
        </div>
      </div>
      <div className='panels-container'>
        <div className='panel left-panel'>
          <img src='/images/logoName.png' className='image'/>
          <div className='content'>
            <p>Why to Buy, When you can Exchange.</p>
            <h3>New Trader?</h3>
            <button onClick={showSignup} className='btn transparent' id='sign-up-button'>Sign Up</button>
          </div>
        </div>
        <div className='panel right-panel'>
          <img src='/images/logoName.png' className='image'/>
          <div className='content'>
            <p>Why to Buy, When you can Exchange.</p>
            <h3>Already a Trader?</h3>
            <button onClick={hideSignup} className='btn transparent' id='sign-in-button'>Log In</button>
          </div>
        </div>
      </div>
        <div id="credit">
                ©TradeEx | Last Updated October, 2022
        </div>
    </div>
  )
}

export default Signup