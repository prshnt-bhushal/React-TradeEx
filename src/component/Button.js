import React, { Children } from 'react'
import './component_css/Button.css'

function Button(type,onClick,id,className,Children) {
  return (
    <button type={type} onClick={onClick} id={id} className={className}>{Children}</button>
  )
}

export default Button