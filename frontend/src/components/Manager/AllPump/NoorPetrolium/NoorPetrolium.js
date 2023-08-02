import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const NoorPetroliumData = [
  {
    id: 1,
    name: "Add Today Data",
    path: "/noor-petrolium/add-todays-data"
  },
  {
    id: 2,
    name: "Get All Data",
    path: "/noor-petrolium/get-all-data"
  }
]
const NoorPetrolium = () => {
  return (
    <>
      <div class="ali-box-container">
        {NoorPetroliumData.map((item) => (<Link to={item.path}><div key={item.id} class="box">{item.name}</div></Link>))}
      </div>
    </>
  )
}

export default NoorPetrolium
