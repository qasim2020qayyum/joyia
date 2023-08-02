import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Go45Data = [
  {
    id: 1,
    name: "Add Today Data",
    path: "/go-45/add-todays-data"
  },
  {
    id: 2,
    name: "Get All Data",
    path: "/go-45/get-all-data"
  }
]
const Go45 = () => {
  return (
    <>
      <div class="ali-box-container">
        {Go45Data.map((item) => (<Link to={item.path}><div key={item.id} class="box">{item.name}</div></Link>))}
      </div>
    </>
  )
}

export default Go45
