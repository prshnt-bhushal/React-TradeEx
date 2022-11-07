import React from 'react'
import { Link } from 'react-router-dom'
// import Mailto from 'react-mailto'

const ButtonMailTo = ({ mailto, label }) => {
  return (
    <Link to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
  )
}

export default ButtonMailTo