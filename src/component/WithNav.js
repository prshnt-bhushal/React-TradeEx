import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import Header from './Header'

function WithNav() {
  return (
    <>
    <NavBar/>
    <Outlet/>
    </>
  )
}

export default WithNav