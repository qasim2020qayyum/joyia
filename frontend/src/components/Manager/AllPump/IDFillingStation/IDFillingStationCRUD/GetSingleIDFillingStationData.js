import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useReactToPrint } from 'react-to-print';
import logo from "../../../../../assets/petrolium1.png"
const GetSingleIDFillingStationData = () => {

    const componentPDF = useRef();

    const [aliPetroliumPump, setAliPetroliumPump] = useState([]);
    const { id } = useParams();
const pumpData = async() =>{
    let res = await fetch(`http://localhost:8000/joiya/idFillingStation/data/${id}`)
    res = await res.json();    
    setAliPetroliumPump(res)
}

    useEffect(() => {
        pumpData()
    }, [])

 const generatePDF= useReactToPrint({
    content: ()=> componentPDF.current,
    documentTitle: "IDFillingStation",
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
            <p>Station: ID Filling Station</p>
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
  <div className="table-container">

    <table>
      <thead>
        <tr>
          <th>HSD Purchase Rate</th>
          <th>HSD Sale Rate</th>
          <th>HSD Sold Qty</th>
          <th>HSD Sale Amount</th>
          <th>HSD Profit</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{aliPetroliumPump.hsd_purchase_rate}</td>
          <td >{aliPetroliumPump.hsd_sale_rate}</td>
          <td >{aliPetroliumPump.hsdSoldQty}</td>
          <td >{aliPetroliumPump.hsdSaleAmount}</td>
          <td >{aliPetroliumPump.hsdProfit}</td>
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
          <td >HSD</td>
          <td >HSD1=COM</td>
          <td >{aliPetroliumPump.lastReadingHsd1}</td>
          <td >{aliPetroliumPump.hsd1_currentReading}</td>
          <td >{aliPetroliumPump.comSalehsd1}</td>
        </tr>
        <tr>
          <td>4</td>
          <td >HSD</td>
          <td >HSD2=COM</td>
          <td >{aliPetroliumPump.lastReadingHsd2}</td>
          <td >{aliPetroliumPump.hsd2_currentReading}</td>
          <td >{aliPetroliumPump.comSalehsd2}</td>
        </tr>
        <tr>
          <td>5</td>
          <td >HSD</td>
          <td >HSD3=COM</td>
          <td >{aliPetroliumPump.lastReadingHsd3}</td>
          <td >{aliPetroliumPump.hsd3_currentReading}</td>
          <td >{aliPetroliumPump.comSalehsd3}</td>
        </tr>
        <tr>
          <td>6</td>
          <td >HSD</td>
          <td >HSD4=COM</td>
          <td >{aliPetroliumPump.lastReadingHsd4}</td>
          <td >{aliPetroliumPump.hsd4_currentReading}</td>
          <td >{aliPetroliumPump.comSalehsd4}</td>
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

export default GetSingleIDFillingStationData
