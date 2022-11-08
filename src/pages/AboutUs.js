import React from 'react'
import './AboutUs.css'
import Sidebar from '../component/SideBar'
import UserLayout from '../component/UserLayout'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Aboutus() {

  const [feedback,setFeedback]=useState('');

  function sendEmail(){
window.location = `mailto:feedback@tradeex.com?subject=Feedback &body= ${feedback} `;
}
  return (
    <div className='aboutUsContainer'>
      <Sidebar/>
      <img src='/images/panelImg'/>   
        <div className='aboutUsContent'>
          <h1>About TradeEx</h1>
            <div className="heading">
        <p>
          TradeEX is web-based goods exchanging dedicated application. We run as
          an independent, registered company under Commerce Act Laws,2050 BS.
          TradeEx is a goods exchange web-based application, 
          where people can surf to exchange/trade millions of listed products and it act as the
           middleman between two customers. 
          The exchange can be between any two products as long as both parties are in agreement.
        </p>
    </div>
      
      <div className='footer-container'>
          
          <div className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Join the newsletter to receive our updates and benefits!
            </p>
            </div>
      <div className="input-areas">
        <form>
          <input
            type="text"
            name="text"
            placeholder="Your Feedback"
            className="footer-input"
            onChange={(e)=>setFeedback(e.target.value)}
          />
          <button onClick={sendEmail} >Send Feedback</button>
        </form>
      </div>
      </div>
      
      <div className='users'>
         <h1>Meet our team!</h1>
         <div className='users__container'>
            <div className='users__wrapper'>
            <ul className='users__item'>
                  <UserLayout src='/images/user1.png'
                  text='Mr. RN Sharma,
                  Central Authorized Representative,
                  TradeEX
                  Roles
                  Co-ordinates and controls all the activities of departments
                  Manages the branch representatives
                  Holds timely meetings and discusses stats'
                   label='Authorized Representative '
                  path='/'/>
                   
                  
                  <UserLayout src='/images/user2.png'
                  text='Mr. Harinarayan Pandey, Supervising Officer
                  <u>Roles</u>
                  Supervises the valaution department
                  Make sure all are within compliance of policies of company
                  Notifies the updates and ciculates among all departments'
                   label='Supervising Officer '
                   path='/'/> 
                  
                  <UserLayout src='/images/user3.png'
                  text='Customer Support Representative,
                  Contact at support@tradeex.inc
                  <u>Roles</u>
                  Manages all the user complaints
                  Reports to customer services
                  Make sure complaints gets resolved timely


                  '
                   label='Customer Support'
                   path='/'/>  
                </ul>
          </div>
         </div>
        </div>
        <div>
       
        <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
         
          
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
            <small class="website-rights">Last Updated November, 2022 || Â©TradeEX</small>
        </div>
        <button className='btn'>Goto HomePage</button>
        </div>
      </section>
        </div>
        </div>
    </div>
  )
}

export default Aboutus