import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const SiaaFillingStationData = [
  {
    id: 1,
    name: "Add Today Data",
    path: "/siaa-filling-station/add-todays-data"
  },
  {
    id: 2,
    name: "Get All Data",
    path: "/siaa-filling-station/get-all-data"
  }
]
const SiaaFillingStation = () => {
  return (
    <>
      <div class="ali-box-container">
        {SiaaFillingStationData.map((item) => (<Link to={item.path}><div key={item.id} class="box">{item.name}</div></Link>))}
      </div>
    </>
  )
}

export default SiaaFillingStation
