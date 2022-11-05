import React from 'react'
import './component_css/Header.css'

function Header() {
  return (
    <div className='category-icons'>
        <div className='category-icon1 icons'>
            <div className='hovertext' data-hover='clothes'>
                <i class="fa-solid fa-shirt"></i>
            </div>
        </div>
        <div className='category-icon2 icons'>
            <div className='hovertext' data-hover='Books'>
                <i class="fa-solid fa-book"></i>
            </div>
        </div>
        <div className='category-icon3 icons'>
            <div className='hovertext' data-hover='Toys'>
                <i class="fa-solid fa-gamepad"></i>
            </div>
        </div>
        <div className='category-icon4 icons'>
            <div className='hovertext' data-hover='Bags'>
                <i class="fa-solid fa-briefcase"></i>
            </div>
        </div>
        <div className='category-icon5 icons'>
            <div className='hovertext' data-hover='Gifts'>
                <i class="fa-solid fa-gift"></i>
            </div>
        </div>
    </div>
  )
}

export default Header