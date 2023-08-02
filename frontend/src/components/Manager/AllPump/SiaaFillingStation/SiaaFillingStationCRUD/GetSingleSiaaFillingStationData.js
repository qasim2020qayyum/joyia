import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useReactToPrint } from 'react-to-print';
import logo from "../../../../../assets/petrolium1.png"
const GetSingleSiaaFillingStationData = () => {

    const componentPDF = useRef();

    const [aliPetroliumPump, setAliPetroliumPump] = useState([]);
    const { id } = useParams();
const pumpData = async() =>{
    let res = await fetch(`http://localhost:8000/joiya/siaaFillingStation/data/${id}`)
    res = await res.json();    
    setAliPetroliumPump(res)
}

    useEffect(() => {
        pumpData()
    }, [])

 const generatePDF= useReactToPrint({
    content: ()=> componentPDF.current,
    documentTitle: "SiaaFillingStation",
    onAfterPrint:()=>toast.success("invoice generated")
 })
 let userName = sessionStorage.getItem("name")
  return (
    <>
    <div style={{ padding:"1rem", border:"1px solid black"}} className='table-container'>
    <div ref={componentPDF} style={{textAlign:"center",width:"100%"}}>
    <div>
        <div className='headcss'>
            <img className='headcss_name' src={logo}/>
        </div>
        <div className='headcss_2'>
            <p>Station: Siaa Filling Station</p>
            <p>Date: {aliPetroliumPump.createdDate}</p>
        </div>
        <div className='headcss_2'>
            <p className='headcss_closing'>CLOSING: {aliPetroliumPump.closing}</p>
            <p>User: {userName}</p>
        </div>
    </div>
  <div className="table-container">

    <table>
      <thead>
        <tr>
          <th>Gross Profit</th>
          <th>Total Expense</th>
          <th>Net Profit</th>
          <th>Total Sale Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{aliPetroliumPump.totalProfit}</td>
          <td >{aliPetroliumPump.totalExpense}</td>
          <td >{aliPetroliumPump.netProfit}</td>
          <td >{aliPetroliumPump.totalSaleAmount}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div className="table-container">

    <table>
      <thead>
        <tr>
          <th>Super Purchase Rate</th>
          <th>Super Sale Rate</th>
          <th>Super Sold Qty</th>
          <th>Super Sale Amount</th>
          <th>Super Profit</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{aliPetroliumPump.sup_purchase_rate}</td>
          <td >{aliPetroliumPump.sup_sale_rate}</td>
          <td >{aliPetroliumPump.supSoldQty}</td>
          <td >{aliPetroliumPump.supSaleAmount}</td>
          <td >{aliPetroliumPump.supProfit}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h4 style={{margin:"2rem 0"}}>Today's Reading</h4>


  <div className="table-container">

    <table>
      <thead>
        <tr>
          <th>SR</th>
          <th>Type</th>
          <th>Title</th>
          <th>Last Reading</th>
          <th>Current Reading</th>
          <th>Computer Sale</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td >SUP</td>
          <td >SUP1=COM</td>
          <td >{aliPetroliumPump.lastReadingSup1}</td>
          <td >{aliPetroliumPump.sup1_currentReading}</td>
          <td >{aliPetroliumPump.comSaleSup1}</td>
        </tr>
        <tr>
          <td>2</td>
          <td >SUP</td>
          <td >SUP2=COM</td>
          <td >{aliPetroliumPump.lastReadingSup2}</td>
          <td >{aliPetroliumPump.sup2_currentReading}</td>
          <td >{aliPetroliumPump.comSaleSup2}</td>
        </tr>
        <tr>
          <td>3</td>
          <td >SUP</td>
          <td >SUP3=COM</td>
          <td >{aliPetroliumPump.lastReadingSup3}</td>
          <td >{aliPetroliumPump.sup3_currentReading}</td>
          <td >{aliPetroliumPump.comSaleSup3}</td>
        </tr>
        <tr>
          <td>4</td>
          <td >SUP</td>
          <td >SUP4=COM</td>
          <td >{aliPetroliumPump.lastReadingSup4}</td>
          <td >{aliPetroliumPump.sup4_currentReading}</td>
          <td >{aliPetroliumPump.comSaleSup4}</td>
        </tr>
        <tr>
          <td>5</td>
          <td >SUP</td>
          <td >SUP5=COM</td>
          <td >{aliPetroliumPump.lastReadingSup5}</td>
          <td >{aliPetroliumPump.sup5_currentReading}</td>
          <td >{aliPetroliumPump.comSaleSup5}</td>
        </tr>
        <tr>
          <td>6</td>
          <td >SUP</td>
          <td >SUP6=COM</td>
          <td >{aliPetroliumPump.lastReadingSup6}</td>
          <td >{aliPetroliumPump.sup6_currentReading}</td>
          <td >{aliPetroliumPump.comSaleSup6}</td>
        </tr>
        <tr>
          <td>7</td>
          <td >SUP</td>
          <td >SUP7=COM</td>
          <td >{aliPetroliumPump.lastReadingSup7}</td>
          <td >{aliPetroliumPump.sup7_currentReading}</td>
          <td >{aliPetroliumPump.comSaleSup7}</td>
        </tr>
        <tr>
          <td>8</td>
          <td >SUP</td>
          <td >SUP8=COM</td>
          <td >{aliPetroliumPump.lastReadingSup8}</td>
          <td >{aliPetroliumPump.sup8_currentReading}</td>
          <td >{aliPetroliumPump.comSaleSup8}</td>
        </tr>
        
      </tbody>
    </table>
  </div>
  <h4 style={{margin:"2rem 0"}}>Today's Cash Flow</h4>
  <div className="table-container">

    <table>
      <thead>
        <tr>
          <th colSpan={6}>PAYMENTS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>PSO Card</td>
          <td>HBL Card</td>
          <td >BANK Deposit</td>
          <td >PSO Payment</td>
          <td >Advance Salary</td>
          <td >Total</td>
        </tr>
        <tr>
          <td>{aliPetroliumPump.psoCard}</td>
          <td>{aliPetroliumPump.HBLCard}</td>
          <td >{aliPetroliumPump.bankDeposit}</td>
          <td >{aliPetroliumPump.psoPayment}</td>
          <td >{aliPetroliumPump.advanceSalary}</td>
          <td >{aliPetroliumPump.totalPayment}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div className="table-container">

    <table>
      <thead>
        <tr>
          <th colSpan={6}>RECIEVINGS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Credit Wasoli</td>
          <td>Lubricants</td>
          <td >TUC/TYRE Shop</td>
          <td >PRE Closing</td>
          <td >Cash From Other Pumps</td>
          <td >Total</td>
        </tr>
        <tr>
          <td>{aliPetroliumPump.creditWasoli}</td>
          <td>{aliPetroliumPump.lubricants}</td>
          <td>{aliPetroliumPump.tucShop}</td>
          <td>{aliPetroliumPump.preClosing}</td>
          <td>{aliPetroliumPump.cashFromOtherPumps}</td>
          <td>{aliPetroliumPump.totalRecieving}</td>
        </tr>
      </tbody>
    </table>
  </div>
  
  

  </div>
  <button className='btn btn-danger text-light' onClick={generatePDF}>Generate Invoice</button>
    </div>
</>

  )
}

export default GetSingleSiaaFillingStationData
