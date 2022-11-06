import React from 'react'
import { Link } from 'react-router-dom'

const UserLayout = (props) => {
  return (
    <>
    <li className='user__item'>
            <Link className='user__item__link' to={props.path}>
                <figure className='user__item__pic-wrap' data-category={props.label}>
                    <img src={props.src} alt="travel image" className='user__item__img'/>
                    </figure>
                    <div className='user__item__info'>
                        <h5 className='user__item__text'>{props.text}</h5>
                    </div>
            </Link>
         </li>
    </>
  )
}
export default UserLayout;