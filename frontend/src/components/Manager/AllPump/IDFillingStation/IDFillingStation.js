import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const IDFillingStationData = [
  {
    id: 1,
    name: "Add Today Data",
    path: "/id-filling-station/add-todays-data"
  },
  {
    id: 2,
    name: "Get All Data",
    path: "/id-filling-station/get-all-data"
  }
]
const IDFillingStation = () => {
  return (
    <>
      <div class="ali-box-container">
        {IDFillingStationData.map((item) => (<Link to={item.path}><div key={item.id} class="box">{item.name}</div></Link>))}
      </div>
    </>
  )
}

export default IDFillingStation
