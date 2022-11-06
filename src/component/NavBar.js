import React from 'react'
import { Link } from 'react-router-dom'
import './component_css/NavBar.css'
import { useAuth } from '../FirebaseConfig'
import { auth } from '../FirebaseConfig'
import { signOut } from 'firebase/auth'



function NavBar() {
  function logoutClick(){
    signOut(auth).then(()=>{
      alert('user signned out');
    })
  }

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
        {
          Loggedin ? (<Link to='/signup-login'> Signup/Login</Link> ) : (<Link to='/signup-login' onClick={logoutClick}> Logout</Link>)
        }
        
        <Link to='/profile'>
                <img src='/images/user-icon.png' className='user-icon'/>
        </Link>
        </div>
  </nav>
  
  </div>
  )
}

export default NavBar