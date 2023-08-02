import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const KhalidAndSonsPSOData = [
  {
    id: 1,
    name: "Add Today Data",
    path: "/khalid-&-sons-pso/add-todays-data"
  },
  {
    id: 2,
    name: "Get All Data",
    path: "/khalid-&-sons-pso/get-all-data"
  }
]
const KhalidAndSonsPSO = () => {
  return (
    <>
      <div class="ali-box-container">
        {KhalidAndSonsPSOData.map((item) => (<Link to={item.path}><div key={item.id} class="box">{item.name}</div></Link>))}
      </div>
    </>
  )
}

export default KhalidAndSonsPSO
