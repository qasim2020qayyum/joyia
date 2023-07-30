import React from 'react'
import AllPump from './AllPump/AllPump'
import Rates from './PetrolAndDeiselRate/Rates'
import WorkersAndUsers from './WorkersAndUsers/WorkersAndUsers'

const ManagerBoard = () => {
  return (
    <div>
      <Rates/>
      <hr/>
      <AllPump/>
      <hr/>
      <WorkersAndUsers/>

    </div>
  )
}

export default ManagerBoard
