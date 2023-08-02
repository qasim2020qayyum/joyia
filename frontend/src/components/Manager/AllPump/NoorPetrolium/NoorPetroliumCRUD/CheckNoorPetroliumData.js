import React, { useEffect, useState } from 'react'
import DataNotAdded from '../../../DataNotAdded';
import GetNoorPetrolium from './GetNoorPetrolium';

const CheckNoorPetroliumData = () => {
    const [uData, setUData] = useState([]);
    
    const userData = async() =>{
        let res = await fetch("http://localhost:8000/joiya/noorPetrolium/data/reverse")
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <GetNoorPetrolium/> : <DataNotAdded/>
      }
    </div>
  )
}

export default CheckNoorPetroliumData
