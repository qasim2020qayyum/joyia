import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Go09Data = [
  {
    id: 1,
    name: "Add Today Data",
    path: "/go-09/add-todays-data"
  },
  {
    id: 2,
    name: "Get All Data",
    path: "/go-09/get-all-data"
  }
]
const Go09 = () => {
  return (
    <>
      <div class="ali-box-container">
        {Go09Data.map((item) => (<Link to={item.path}><div key={item.id} class="box">{item.name}</div></Link>))}
      </div>
    </>
  )
}

export default Go09
