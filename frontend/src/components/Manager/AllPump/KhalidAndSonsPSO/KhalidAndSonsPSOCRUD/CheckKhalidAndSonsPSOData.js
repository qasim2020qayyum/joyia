import React, { useEffect, useState } from 'react'
import DataNotAdded from '../../../DataNotAdded';
import GetKhalidAndSonsPSO from './GetKhalidAndSonsPSO';

const CheckKhalidAndSonsPSOData = () => {
    const [uData, setUData] = useState([]);
    
    const userData = async() =>{
        let res = await fetch("http://localhost:8000/joiya/khalidAndSon/data/reverse")
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <GetKhalidAndSonsPSO/> : <DataNotAdded/>
      }
    </div>
  )
}

export default CheckKhalidAndSonsPSOData
