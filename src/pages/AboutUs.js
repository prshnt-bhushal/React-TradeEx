import React from 'react'
import './AboutUs.css'
import SideBar from '../component/SideBar'
import UserLayout from '../component/UserLayout'
import { Link } from 'react-router-dom'

function Aboutus() {
  return (
    <div className='aboutUsContainer'>
        <SideBar/>
        <div className='aboutUsContent'>
            <h1>ABOUT TradeEX</h1>
            <p>Explore Below</p>
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
      <div className="input">
        <form>
          <input
            type="email"
            name="email"
            placeholder="Your Feedback"
            className="footer-input"
          />
          <button>Send Feedback</button>
        </form>
      </div>
      <div className='representative'>
         <h1>Meet our team!</h1>
         <div className='users__container'>
            <div className='users__wrapper'>
            <ul className='users__item'>
                  <UserLayout src='/images/user1.png'
                  text='Mr. RN Sharma, TradeEX Head'
                  label='Authorized Representative '
                  path='/'/>
                   
                  <UserLayout src='/images/user2.png'
                  text='Mr. Harinarayan Pandey'
                   label='Supervising Officer '
                   path='/'/> 
                  
                  <UserLayout src='/images/user3.png'
                  text='Contact at support@tradeex.inc'
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
          <small class="website-rights">TradeEXÂ© 2022</small>
          
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
        </div>
        </div>
      </section>
        </div>
        </div>
    </div>
  )
}

export default Aboutus