import React, { useEffect, useState } from 'react'
import DataNotAdded from '../../../DataNotAdded';
import GetBabaFareedFillingStaion from './GetBabaFareedFillingStaion';

const CheckBabaFareedFillingStaionData = () => {
    const [uData, setUData] = useState([]);
    
    const userData = async() =>{
        let res = await fetch("http://localhost:8000/joiya/babafareed/data/reverse")
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <GetBabaFareedFillingStaion/> : <DataNotAdded/>
      }
    </div>
  )
}

export default CheckBabaFareedFillingStaionData
