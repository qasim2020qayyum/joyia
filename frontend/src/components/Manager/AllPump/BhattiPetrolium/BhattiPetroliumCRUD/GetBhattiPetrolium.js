import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const GetBhattiPetrolium = () => {
    
const [uData, setUData] = useState([]);
    
const userData = async() =>{
    let res = await fetch("http://localhost:8000/joiya/bhattiPetrolium/data/reverse")
    res = await res.json();    
    setUData(res)
}

console.log(uData)

    useEffect(() => {
        userData()
    }, [])

    const deleteUser = async(id) =>{
        
        let res = await fetch("http://localhost:8000/joiya/bhattiPetrolium/data/"+id,{
            method: "delete"
        })
        res = await res.json()
        if(res){
            userData()
        }

    }



  return (
    <div>
        <h1 className='display-0 fw-bold my-4 text-danger'>Baba Fareed Filling Staion</h1>
        <hr />
    <table  class="table table-hover w-75 mx-auto">
    <thead>
    <tr className='bg-danger'>
      <th scope="col">Sr.No.</th>
      <th scope="col">Pump Name</th>
      <th scope="col">Date & Time</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
    <tbody>
        {
            uData.map((user, ind)=>{
                return(
                    <>
                        <tr key={user._id}>
                            <th scope="row">{ind+1}</th>
                            <td>Bhatti Petrolium</td>
                            <td>{user.createdDate}</td>
                            <td><Link to={`/bhatti-petrolium-details/${user._id}`} className='btn btn-success btn-sm me-2'>Check Details</Link> </td>
                            <td>
                                <Link to={`/edit-bhatti-petrolium-data/${user._id}`} className='btn btn-success btn-sm me-2'><i class="fas fa-edit"></i></Link> 
                                <a onClick={()=>deleteUser(user._id)}  className='btn btn-danger btn-sm'><i class="fa fa-trash" aria-hidden="true"></i></a>
                            </td>
                        </tr>
                    </>
                )
            })
        }
        </tbody>
    </table>



    </div>
  )
}

export default GetBhattiPetrolium