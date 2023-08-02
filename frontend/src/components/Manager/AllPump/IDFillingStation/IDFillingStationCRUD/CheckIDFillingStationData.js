import React, { useEffect, useState } from 'react'
import DataNotAdded from '../../../DataNotAdded';
import GetIDFillingStation from './GetIDFillingStation';

const CheckIDFillingStationData = () => {
    const [uData, setUData] = useState([]);
    
    const userData = async() =>{
        let res = await fetch("http://localhost:8000/joiya/idFillingStation/data/reverse")
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <GetIDFillingStation/> : <DataNotAdded/>
      }
    </div>
  )
}

export default CheckIDFillingStationData
