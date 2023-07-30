import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const AddWorkers = () => {
 
 
     // insert table data 
 
     const [name, setname] = useState('');
     const [mobileNumber, setMobileNumber] = useState('');
     const [idCard, setIdCard] = useState('');
     const [pumpName, setPumpName] = useState('');
     const [salary, setSalary] = useState('');
     const [advanceSalary, setAdvanceSalary] = useState('');
     const [data, setData] = useState([]);
 
 
 
     const [errorMsg, setErrorMsg] = useState(false);
     
     const navigate = useNavigate();
     const saveData = async (e) => {
         if (
             !name ||
             !mobileNumber ||
             !idCard ||
             !pumpName ||
             !salary 
         ) {
             setErrorMsg(true)
             return false
         }
         e.preventDefault();
         let pumpData = await fetch("http://localhost:8000/joiya/worker", {
             method: 'POST',
             body: JSON.stringify({
                 
                name,
                mobileNumber,
                idCard,
                pumpName,
                salary,
                advanceSalary,
             }),
             headers: {
                 'Content-Type': 'application/json'
             }
         })
         pumpData = await pumpData.json();
         setData(pumpData);
         navigate('/all-worker')
         toast.success("worker added👌");
     }
 
 
 
 
  return (
    <>
    <div className="form-container card border-0 shadow rounded-3 my-5 p-5">
        <h1 className="mb-5">Add Worker</h1>
        <hr />
        <form>
            <div className="form-row">

                <div className="form-group">
                    <label htmlFor="name">Add Worker</label>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" required onChange={(e) => setname(e.target.value)}/>
                    {errorMsg && !name && <span className="errorHandle">Please enter Name before submit</span>} 
                </div>
                <div className="form-group">
                    <label htmlFor="name">Mobile Number</label>
                    <input type="number" id="name" name="name" required onChange={(e) => setMobileNumber(e.target.value)}/>
                    {errorMsg && !mobileNumber && <span className="errorHandle">Please enter Mobile Number before submit</span>} 
                </div>
                <div className="form-group">
                    <label htmlFor="name">ID Card Number</label>
                    <input type="number" id="name" name="name" required onChange={(e) => setIdCard(e.target.value)}/>
                    {errorMsg && !idCard && <span className="errorHandle">Please enter Id Card Number before submit</span>} 
                </div>
            </div>

            <div className="form-row">


                <div className="form-group">
                    <label htmlFor="name">Pump Name</label>
                    <input type="text" id="name" name="name" required onChange={(e) => setPumpName(e.target.value)}/>
                    {errorMsg && !pumpName && <span className="errorHandle">Please enter Pump Name before submit</span>} 
                </div>
                <div className="form-group">
                    <label htmlFor="name">Salary </label>
                    <input type="number" id="name" name="name" required onChange={(e) => setSalary(e.target.value)}/>
                    {errorMsg && !salary && <span className="errorHandle">Please enter tuc/tyre Shop before submit</span>} 
                </div>
                <div className="form-group">
                    <label htmlFor="name">Advance Salary</label>
                    <input type="number" id="name" name="name" onChange={(e) => setAdvanceSalary(e.target.value)}/>
                </div>
            </div>
            <div style={{ textAlign: "center" }}>
                <button style={{ color: "white" }} className="btn btn-light login btn-login  fw-bold" type="submit"
                    onClick={saveData}
                >Submit</button>
            </div>
        </form>
    </div>
</>
  )
}

export default AddWorkers
