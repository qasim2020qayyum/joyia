import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    let admin = sessionStorage.getItem("userEmail")
  return (
    admin==="info@joyiapetroleum.com" ? <Outlet/> : <Navigate to="/login"/>
  )
}

export default PrivateRoutes
