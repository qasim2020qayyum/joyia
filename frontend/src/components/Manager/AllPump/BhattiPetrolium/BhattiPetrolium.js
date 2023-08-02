import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const BhattiPetroliumData = [
  {
    id: 1,
    name: "Add Today Data",
    path: "/bhatti-petrolium/add-todays-data"
  },
  {
    id: 2,
    name: "Get All Data",
    path: "/bhatti-petrolium/get-all-data"
  }
]
const BhattiPetrolium = () => {
  return (
    <>
      <div class="ali-box-container">
        {BhattiPetroliumData.map((item) => (<Link to={item.path}><div key={item.id} class="box">{item.name}</div></Link>))}
      </div>
    </>
  )
}

export default BhattiPetrolium
