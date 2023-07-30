import React from 'react'
import { Link } from 'react-router-dom'
import "./WorkersAndUsers.css"



const AllPumpData = [
    {
      id: 1,
      name: "Users",
      path: "/users"
    },
    {
      id: 2,
      name: "Workers",
      path: "/workers"
    },
  ]
const WorkersAndUsers = () => {
  return (
    <>
    <div class="work-container">

{AllPumpData.map((item) => (<Link to={item.path}><div key={item.id} class="work-box">{item.name}</div></Link>))}
</div>
    </>
  )
}

export default WorkersAndUsers
