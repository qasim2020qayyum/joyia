import React, { useEffect, useState } from 'react'
import DataNotAdded from '../../../DataNotAdded';
import GetJahangirPetroliumService from './GetJahangirPetroliumService';

const CheckJahangirPetroliumServiceData = () => {
    const [uData, setUData] = useState([]);
    
    const userData = async() =>{
        let res = await fetch("http://localhost:8000/joiya/jahangirPetrolium/data/reverse")
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <GetJahangirPetroliumService/> : <DataNotAdded/>
      }
    </div>
  )
}

export default CheckJahangirPetroliumServiceData
