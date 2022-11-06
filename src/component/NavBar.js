import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './component_css/NavBar.css'
import { useAuth } from '../FirebaseConfig'
import { auth } from '../FirebaseConfig'
import { signOut } from 'firebase/auth'
import { useState } from 'react'



function NavBar() {
  const [userid,setUserId] = useState(null);
 const [usernameExist,setUsernameExist] = useState(false);
 const [userName,setUserName] = useState('');
 const [link,setLink] = useState(true);
  function logoutClick(){
    signOut(auth).then(()=>{
      alert('user signned out');
    })
  }

  useEffect(()=>{
    setInterval(()=>{
      setUserId(auth.currentUser.uid);
      setUserName(auth.currentUser.displayName);
      if(!userid){
        setUsernameExist(true); 
        setLink(false);
    
      }else{
        setUsernameExist(false);
      }
    },2000)    

  },[])
  const currentUser=useAuth();
  const Loggedin=useAuth();
  return (
  <div>
  <nav>
    <div className='nav-left-section'>
        <Link to='/'>
        <img src='/images/logoName.png' alt='mainLogo' className='logo'/>
        </Link>
        {/* <div className='search-box'>
            <input type='text' placeholder='Search'/>
            <i class="fa-solid fa-magnifying-glass"></i>
        </div> */}
    </div>
    <div className="nav-right-section">
       {link && <Link to='/signup-login'> Signup/Login</Link>}
       {usernameExist && <Link to='/signup-login' onClick={logoutClick}> Logout: {userName}</Link> }
        
        <Link to='/profile'>
                <img src='/images/user-icon.png' className='user-icon'/>
        </Link>
        </div>
  </nav>
  
  </div>
  )
}

export default NavBar