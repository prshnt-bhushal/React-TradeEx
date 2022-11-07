import React from 'react'
import { useState } from 'react'
import './ForAuthorized.css'
import { Link, useNavigate } from 'react-router-dom'
import LoadingSpinner from '../component/LoadingSpinner';
import { sendPasswordResetEmail} from 'firebase/auth'
import { auth } from '../FirebaseConfig';


function ForgetPassword() {
    const [isLoading, setIsLoading] = useState(false);
    const navigate =useNavigate();
    const [email,setEmail]=useState('');

    function btnResetClick(){
        setIsLoading(true);
        sendPasswordResetEmail(auth,email).then(()=>{
            alert('Reset Mail has been sent check your Email.')
            setIsLoading(false);
            navigate('/signup-login')
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setIsLoading(false);
            alert(error.message)
    });
    }

  return (
    <div className='adminContainer'>
        {isLoading && <LoadingSpinner/>}
        <div className='login-box'>
        <h2 className='title'>TradeEx</h2>
        <h3>Enter your Email</h3>
        <input className='adminMail' type="email" name="adminMail" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
        <button onClick={btnResetClick} className='loginbtn' disabled={isLoading}>Send</button>
        <Link to='/signup-login'>Login</Link>
        </div>
    </div>
  )
}

export default ForgetPassword