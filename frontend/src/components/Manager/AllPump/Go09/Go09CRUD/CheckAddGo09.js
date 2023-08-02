import React, { useEffect, useState } from 'react'
import FirstAddGo09 from './FirstAddGo09';
import AddGo09 from './AddGo09';

const CheckAddGo09 = () => {
    const [uData, setUData] = useState([]);
    
    const userData = async() =>{
        let res = await fetch("http://localhost:8000/joiya/go09/data/reverse")
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <AddGo09/> : <FirstAddGo09/>
      }
    </div>
  )
}

export default CheckAddGo09
