import React from 'react'
import './component_css/PolicyPopup.css'

function PolicyPopup(props) {
  return (props.trigger) ?(
    <div className='popup'>
        <div className='popup-inner'>
            {/* <button className='close-btn' onClick={()=> props.setTrigger(false)}>close</button> */}
            <div className='close-btn'>
            <i onClick={()=> props.setTrigger(false)} class="fa-solid fa-circle-xmark"></i>
            </div>
            {props.children}
        </div>
    </div>
  ):"";
}

export default PolicyPopup