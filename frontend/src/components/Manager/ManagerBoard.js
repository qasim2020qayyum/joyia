import React from 'react'
import AllPump from './AllPump/AllPump'
import WorkersAndUsers from './WorkersAndUsers/WorkersAndUsers'

const ManagerBoard = () => {
  return (
    <div>
      <br/>
      <AllPump/>
      <hr/>
      <WorkersAndUsers/>
    </div>
  )
}

export default ManagerBoard
