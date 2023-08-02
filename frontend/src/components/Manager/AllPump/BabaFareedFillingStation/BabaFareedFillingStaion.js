import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const BabaFareedFillingStaionData = [
  {
    id: 1,
    name: "Add Today Data",
    path: "/baba-fareed-filling-station/add-todays-data"
  },
  {
    id: 2,
    name: "Get All Data",
    path: "/baba-fareed-filling-station/get-all-data"
  }
]
const BabaFareedFillingStaion = () => {
  return (
    <>
      <div class="ali-box-container">
        {BabaFareedFillingStaionData.map((item) => (<Link to={item.path}><div key={item.id} class="box">{item.name}</div></Link>))}
      </div>
    </>
  )
}

export default BabaFareedFillingStaion
