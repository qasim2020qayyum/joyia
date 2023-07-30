import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const EditWorker = () => {
    
    const [name, setname] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [idCard, setIdCard] = useState('');
    const [pumpName, setPumpName] = useState('');
    const [salary, setSalary] = useState('');
    const [advanceSalary, setAdvanceSalary] = useState('');
    const [data, setData] = useState([]);


    const navigate = useNavigate();
    const params = useParams();
  
  
      const getUserDetail = async() =>{
          let res = await fetch(`http://localhost:8000/joiya/worker/${params.id}`)
          res = await res.json();

          setname(res.name)
          setMobileNumber(res.mobileNumber)
          setIdCard(res.idCard)
          setPumpName(res.pumpName)
          setSalary(res.salary)
          setAdvanceSalary(res.advanceSalary)
      }
  


      const updateData = async(e) =>{
        e.preventDefault();
       let res = await fetch(`http://localhost:8000/joiya/worker/${params.id}`,{
        method: "put",
        body: JSON.stringify({name, mobileNumber, idCard, pumpName, salary, advanceSalary

                              }),
        headers:{
            "Content-Type": "Application/json"
        }
       })
       res = await res.json();
       console.log(res);
       navigate('/all-worker');
       toast.success("Data is updated👌");
      }
    
      useEffect(() => {
        getUserDetail();
      }, [])


  return (
    <>
    <div className="form-container card border-0 shadow rounded-3 my-5 p-5">
        <h1 className="mb-5">Ali Petrolium</h1>
        <hr />
        <form>
            <div className="form-row">

                <div className="form-group">
                    <label htmlFor="name">Add Worker</label>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" required value={name} onChange={(e) => setname(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Mobile Number</label>
                    <input type="number" id="name" name="name" required value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">ID Card Number</label>
                    <input type="number" id="name" name="name" required value={idCard} onChange={(e) => setIdCard(e.target.value)}/>
                </div>
            </div>

            <div className="form-row">


                <div className="form-group">
                    <label htmlFor="name">Pump Name</label>
                    <input type="text" id="name" name="name" required value={pumpName} onChange={(e) => setPumpName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Salary </label>
                    <input type="number" id="name" name="name" required value={salary} onChange={(e) => setSalary(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Advance Salary</label>
                    <input type="number" id="name" name="name" value={advanceSalary} onChange={(e) => setAdvanceSalary(e.target.value)}/>
                </div>
            </div>
            <div style={{ textAlign: "center" }}>
                <button style={{ color: "white" }} className="btn btn-light login btn-login  fw-bold" type="submit"
                    onClick={updateData}
                >Submit</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default EditWorker
