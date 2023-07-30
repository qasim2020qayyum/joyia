import React from 'react'
import { Link } from 'react-router-dom'



const AllworkerData = [
  {
    id: 1,
    name: "Add Worker",
    path: "/add-worker"
  },
  {
    id: 2,
    name: "All Workers",
    path: "/all-worker"
  },
]
const Workers = () => {
  return (
    <>
      <div class="work-container">

        {AllworkerData.map((item) => (<Link to={item.path}><div key={item.id} class="work-box">{item.name}</div></Link>))}
      </div>
    </>
  )
}

export default Workers
