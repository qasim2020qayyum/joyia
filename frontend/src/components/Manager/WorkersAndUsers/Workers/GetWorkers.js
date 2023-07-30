import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const GetWorkers = () => {
    
const [uData, setUData] = useState([]);
    
const userData = async() =>{
    let res = await fetch("http://localhost:8000/joiya/worker")
    res = await res.json();    
    setUData(res)
}
console.log(uData)

    useEffect(() => {
        userData()
    }, [])

    const deleteUser = async(id) =>{
        
        let res = await fetch("http://localhost:8000/joiya/worker/"+id,{
            method: "delete"
        })
        res = await res.json()
        if(res){
            userData()
        }

    }


    const [inputValue, setInputValue] = useState("");
    const filteredUsers = uData.filter((u) =>
        u.mobileNumber.toLowerCase().includes(inputValue.toLowerCase())
      );
      const handleInputChange = (e) => {
        setInputValue(e.target.value);
      };


      
  return (
    <div>
         <form style={{margin:"2rem 2rem ", fontWeight:"900"}}>
          <input
          style={{fontWeight:"500",}}
            type="text"
            className="form-control w-25 mb-3 rounded-pill search_fieldd"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Search Worker by number..."
            value={inputValue}
            onChange={handleInputChange}
          />
        </form>
        <h1 className='display-0 fw-bold my-4 text-danger'>WORKERS</h1>
        <hr />
    <table  class="table table-hover w-75 mx-auto text-center">
    <thead>
    <tr className='bg-danger'>
      <th scope="col">ID Number</th>
      <th scope="col">Mobile Number</th>
      <th scope="col">Pump Name</th>
      <th scope="col">Name</th>
      <th scope="col">Salary</th>
      <th scope="col">Advance Salary</th>
      <th scope="col">Remaining Salary</th>
      <th scope="col"></th>
    </tr>
  </thead>
    <tbody>
        {
            filteredUsers.map((user, ind)=>{
                return(
                    <>
                        <tr key={user._id}>
                            <th scope="row">{user.idCard}</th>
                            <td>{user.mobileNumber}</td>
                            <td>{user.pumpName}</td>
                            <td>{user.name}</td>
                            <td>{user.salary}</td>
                            <td>{user.advanceSalary}</td>
                            <td>{user.remainingSalary}</td>
                            <td>
                                <Link to={`/edit-worker/${user._id}`} className='btn btn-success btn-sm me-2'><i class="fas fa-edit"></i></Link> 
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

export default GetWorkers
