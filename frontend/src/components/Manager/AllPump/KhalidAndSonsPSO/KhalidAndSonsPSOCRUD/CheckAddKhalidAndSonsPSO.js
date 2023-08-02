import React, { useEffect, useState } from 'react'
import FirstAddKhalidAndSonsPSO from './FirstAddKhalidAndSonsPSO';
import AddKhalidAndSonsPSO from './AddKhalidAndSonsPSO';

const CheckAddKhalidAndSonsPSO = () => {
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
        uData.length >0 ? <AddKhalidAndSonsPSO/> : <FirstAddKhalidAndSonsPSO/>
      }
    </div>
  )
}

export default CheckAddKhalidAndSonsPSO
