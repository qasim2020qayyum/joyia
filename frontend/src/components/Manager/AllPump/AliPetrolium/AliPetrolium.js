import React, { useState } from 'react'
import "./AliPetrolium.css"
import { Link } from 'react-router-dom'
const AliPetroliumData = [
  {
    id: 1,
    name: "Add Today Data",
    path: "/ali-petrolium/add-todays-data"
  },
  {
    id: 2,
    name: "Get All Data",
    path: "/ali-petrolium/get-all-data"
  }
]
const AliPetrolium = () => {
  return (
    <>
      <div class="ali-box-container">
        {AliPetroliumData.map((item) => (<Link to={item.path}><div key={item.id} class="box">{item.name}</div></Link>))}
      </div>
    </>
  )
}

export default AliPetrolium
