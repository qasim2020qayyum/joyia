import React, { useEffect, useState } from 'react'
import FirstAddNoorPetrolium from './FirstAddNoorPetrolium';
import AddNoorPetrolium from './AddNoorPetrolium';

const CheckAddNoorPetrolium = () => {
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
        uData.length >0 ? <AddNoorPetrolium/> : <FirstAddNoorPetrolium/>
      }
    </div>
  )
}

export default CheckAddNoorPetrolium
