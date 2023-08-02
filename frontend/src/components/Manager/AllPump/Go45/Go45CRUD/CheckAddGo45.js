import React, { useEffect, useState } from 'react'
import FirstAddGo45 from './FirstAddGo45';
import AddGo45 from './AddGo45';

const CheckAddGo45 = () => {
    const [uData, setUData] = useState([]);
    
    const userData = async() =>{
        let res = await fetch("http://localhost:8000/joiya/go45/data/reverse")
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <AddGo45/> : <FirstAddGo45/>
      }
    </div>
  )
}

export default CheckAddGo45
