import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const NadirFillingStationData = [
  {
    id: 1,
    name: "Add Today Data",
    path: "/nadir-filling-station/add-todays-data"
  },
  {
    id: 2,
    name: "Get All Data",
    path: "/nadir-filling-station/get-all-data"
  }
]
const NadirFillingStation = () => {
  return (
    <>
      <div class="ali-box-container">
        {NadirFillingStationData.map((item) => (<Link to={item.path}><div key={item.id} class="box">{item.name}</div></Link>))}
      </div>
    </>
  )
}

export default NadirFillingStation
