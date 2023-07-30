import React, { useEffect, useState } from 'react'
import GetWorkers from './GetWorkers';
import DataNotAdded from '../../DataNotAdded';

const CheckWorker = () => {
    const [uData, setUData] = useState([]);
    
const userData = async() =>{
    let res = await fetch("http://localhost:8000/joiya/worker")
    res = await res.json();    
    setUData(res)
}
useEffect(() => {
    userData()
}, [uData])
  return (
    <div>
      {
        uData.length >0 ? <GetWorkers/> : <DataNotAdded/>
      }
    </div>
  )
}

export default CheckWorker
