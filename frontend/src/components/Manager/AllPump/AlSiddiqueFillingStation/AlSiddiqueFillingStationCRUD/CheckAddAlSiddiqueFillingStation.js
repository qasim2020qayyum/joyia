import React, { useEffect, useState } from 'react'
import FirstAddAlSiddiqueFillingStation from './FirstAddAlSiddiqueFillingStation';
import AddAlSiddiqueFillingStation from './AddAlSiddiqueFillingStation';

const CheckAddAlSiddiqueFillingStation = () => {
    const [uData, setUData] = useState([]);
    
    const userData = async() =>{
        let res = await fetch("http://localhost:8000/joiya/alSiddique/data/reverse")
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <AddAlSiddiqueFillingStation/> : <FirstAddAlSiddiqueFillingStation/>
      }
    </div>
  )
}

export default CheckAddAlSiddiqueFillingStation
