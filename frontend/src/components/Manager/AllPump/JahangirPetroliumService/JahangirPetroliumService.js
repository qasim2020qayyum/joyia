import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const JahangirPetroliumServiceData = [
  {
    id: 1,
    name: "Add Today Data",
    path: "/jahangir-petrolium-service/add-todays-data"
  },
  {
    id: 2,
    name: "Get All Data",
    path: "/jahangir-petrolium-service/get-all-data"
  }
]
const JahangirPetroliumService = () => {
  return (
    <>
      <div class="ali-box-container">
        {JahangirPetroliumServiceData.map((item) => (<Link to={item.path}><div key={item.id} class="box">{item.name}</div></Link>))}
      </div>
    </>
  )
}

export default JahangirPetroliumService
