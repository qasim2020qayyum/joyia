import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const AddSiaaFillingStation = () => {
    // get last reading 
    const [lastReadingSup1, setLastReadingSup1] = useState([]);
    const [lastReadingSup2, setLastReadingSup2] = useState([]);
    const [lastReadingSup3, setLastReadingSup3] = useState([]);
    const [lastReadingSup4, setLastReadingSup4] = useState([]);
    const [lastReadingSup5, setLastReadingSup5] = useState([]);
    const [lastReadingSup6, setLastReadingSup6] = useState([]);
    const [lastReadingSup7, setLastReadingSup7] = useState([]);
    const [lastReadingSup8, setLastReadingSup8] = useState([]);


    // insert table data 

    const [sup1_currentReading, setSup1CurrentReading] = useState('');
    const [sup2_currentReading, setSup2CurrentReading] = useState('');
    const [sup3_currentReading, setSup3CurrentReading] = useState('');
    const [sup4_currentReading, setSup4CurrentReading] = useState('');
    const [sup5_currentReading, setSup5CurrentReading] = useState('');
    const [sup6_currentReading, setSup6CurrentReading] = useState('');
    const [sup7_currentReading, setSup7CurrentReading] = useState('');
    const [sup8_currentReading, setSup8CurrentReading] = useState('');
    // rates 
    const [sup_purchase_rate, setSupPurchaseRate] = useState('');
    const [sup_sale_rate, setSupSaleRate] = useState('');
    // OTHER
    // payments 
    const [psoCard, setPsoCard] = useState(0);
    const [HBLCard, setHBLCard] = useState(0);
    const [bankDeposit, setBankDeposit] = useState(0);
    const [psoPayment, setPsoPayment] = useState('');
    const [advanceSalary, setAdvanceSalary] = useState('');
    // recieving 
    const [creditWasoli, setCreditWasoli] = useState('');
    const [lubricants, setLubricants] = useState('');
    const [tucShop, setTucShop] = useState('');
    const [cashFromOtherPumps, setCashFromOtherPumps] = useState('');

    const [miscPayment, setMiscPayment] = useState('');
    const [miscOther, setMiscOther] = useState('');

    const [data, setData] = useState([]);


    const [errorMsg, setErrorMsg] = useState(false);
    const navigate = useNavigate();
    const saveData = async (e) => {
        if (!sup1_currentReading ||
            !sup2_currentReading ||
            !sup3_currentReading ||
            !sup4_currentReading ||
            !sup5_currentReading ||
            !sup6_currentReading ||
            !sup7_currentReading ||
            !sup8_currentReading ||
            // rates
            !sup_purchase_rate ||
            !sup_sale_rate
        ) {
            setErrorMsg(true)
            return false
        }
        e.preventDefault();
        let pumpData = await fetch("http://localhost:8000/joiya/siaaFillingStation/data/", {
            method: 'POST',
            body: JSON.stringify({
                sup1_currentReading: Number(sup1_currentReading),
                sup2_currentReading: Number(sup2_currentReading),
                sup3_currentReading: Number(sup3_currentReading),
                sup4_currentReading: Number(sup4_currentReading),
                sup5_currentReading: Number(sup5_currentReading),
                sup6_currentReading: Number(sup6_currentReading),
                sup7_currentReading: Number(sup7_currentReading),
                sup8_currentReading: Number(sup8_currentReading),
                // rates 
                sup_purchase_rate: Number(sup_purchase_rate),
                sup_sale_rate: Number(sup_sale_rate),

                // recieving 
                creditWasoli: Number(creditWasoli),
                lubricants: Number(lubricants),
                tucShop: Number(tucShop),
                cashFromOtherPumps: Number(cashFromOtherPumps),

                // payments 
                psoCard: Number(psoCard),
                HBLCard:Number(HBLCard), 
                bankDeposit: Number(bankDeposit),
                psoPayment: Number(psoPayment),
                advanceSalary: Number(advanceSalary),

                // expense
                miscPayment: Number(miscPayment),
                miscOther: Number(miscOther),
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        pumpData = await pumpData.json();
        setData(pumpData);
        navigate('/siaa-filling-station/get-all-data')
        toast.success("Data added👌");
    }





    // get last reading 
    const userData = async () => {
        let res = await fetch("http://localhost:8000/joiya/siaaFillingStation/data")
        res = await res.json();
        setLastReadingSup1(res[res.length - 1].sup1_currentReading)
        setLastReadingSup2(res[res.length - 1].sup2_currentReading)
        setLastReadingSup3(res[res.length - 1].sup3_currentReading)
        setLastReadingSup4(res[res.length - 1].sup4_currentReading)
        setLastReadingSup5(res[res.length - 1].sup5_currentReading)
        setLastReadingSup6(res[res.length - 1].sup6_currentReading)
        setLastReadingSup7(res[res.length - 1].sup7_currentReading)
        setLastReadingSup8(res[res.length - 1].sup8_currentReading)
    }
    useEffect(() => {
        userData()
    }, [])



    return (
        <>
            <div className="form-container card border-0 shadow rounded-3 my-5 p-5">
                <h1 className="mb-5">Siaa Filling Station</h1>
                <hr />
                <form>
                    <div className="form-row">


                        <div className="form-group">
                            <label htmlFor="name">SUP Purchase Rate</label>
                            <input type="number" id="name" name="name" required onChange={(e) => setSupPurchaseRate(e.target.value)} />
                            {errorMsg && !sup_purchase_rate && <span className="errorHandle">Please enter SUP purchase rate before submit</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">SUP Sale Rate</label>
                            <input type="number" id="name" name="name" required onChange={(e) => setSupSaleRate(e.target.value)} />
                            {errorMsg && !sup_sale_rate && <span className="errorHandle">Please enter SUP sale rate before submit</span>}
                        </div>
                    </div>
                    
                    {/* sup 1 */}
                    <div className="form-row">
                        <div className="form-group">
                            <h3 style={{ marginTop: "3rem" }}>SUP1</h3>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Last Reading</label>
                            <input type="number" id="name" name="name" required value={lastReadingSup1} disabled />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Current Reading</label>
                            <input type="number" id="name" name="name" required onChange={(e) => setSup1CurrentReading(e.target.value)} />
                            {errorMsg && !sup1_currentReading && <span className="errorHandle">Please enter sup1 before submit</span>}
                        </div>
                    </div>
                    {/* sup 2 */}
                    <div className="form-row">
                        <div className="form-group">
                            <h3 style={{ marginTop: "3rem" }}>SUP2</h3>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Last Reading</label>
                            <input type="number" id="name" name="name" required value={lastReadingSup2} disabled />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Current Reading</label>
                            <input type="number" id="name" name="name" required onChange={(e) => setSup2CurrentReading(e.target.value)} />
                            {errorMsg && !sup2_currentReading && <span className="errorHandle">Please enter sup2 before submit</span>}
                        </div>
                    </div>
                    {/* sup 3 */}

                    <div className="form-row">
                        <div className="form-group">
                            <h3 style={{ marginTop: "3rem" }}>SUP3</h3>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Last Reading</label>
                            <input type="number" id="name" name="name" required value={lastReadingSup3} disabled />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Current Reading</label>
                            <input type="number" id="name" name="name" required onChange={(e) => setSup3CurrentReading(e.target.value)} />
                            {errorMsg && !sup3_currentReading && <span className="errorHandle">Please enter sup3 before submit</span>}
                        </div>
                    </div>
                    {/* sup 4 */}
                    <div className="form-row">
                        <div className="form-group">
                            <h3 style={{ marginTop: "3rem" }}>SUP4</h3>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Last Reading</label>
                            <input type="number" id="name" name="name" required value={lastReadingSup4} disabled />

                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Current Reading</label>
                            <input type="number" id="name" name="name" required onChange={(e) => setSup4CurrentReading(e.target.value)} />
                            {errorMsg && !sup4_currentReading && <span className="errorHandle">Please enter sup4 before submit</span>}
                        </div>
                    </div>
                    {/* sup 5 */}
                    <div className="form-row">
                        <div className="form-group">
                            <h3 style={{ marginTop: "3rem" }}>SUP5</h3>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Last Reading</label>
                            <input type="number" id="name" name="name" required value={lastReadingSup5} disabled />

                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Current Reading</label>
                            <input type="number" id="name" name="name" required onChange={(e) => setSup5CurrentReading(e.target.value)} />
                            {errorMsg && !sup5_currentReading && <span className="errorHandle">Please enter sup5 before submit</span>}
                        </div>
                    </div>
                    {/* sup 6 */}
                    <div className="form-row">
                        <div className="form-group">
                            <h3 style={{ marginTop: "3rem" }}>SUP6</h3>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Last Reading</label>
                            <input type="number" id="name" name="name" required value={lastReadingSup6} disabled />

                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Current Reading</label>
                            <input type="number" id="name" name="name" required onChange={(e) => setSup6CurrentReading(e.target.value)} />
                            {errorMsg && !sup6_currentReading && <span className="errorHandle">Please enter sup6 before submit</span>}
                        </div>
                    </div>
                    {/* sup 7 */}
                    <div className="form-row">
                        <div className="form-group">
                            <h3 style={{ marginTop: "3rem" }}>SUP7</h3>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Last Reading</label>
                            <input type="number" id="name" name="name" required value={lastReadingSup7} disabled />

                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Current Reading</label>
                            <input type="number" id="name" name="name" required onChange={(e) => setSup7CurrentReading(e.target.value)} />
                            {errorMsg && !sup7_currentReading && <span className="errorHandle">Please enter sup7 before submit</span>}
                        </div>
                    </div>
                    {/* sup 8 */}
                    <div className="form-row">
                        <div className="form-group">
                            <h3 style={{ marginTop: "3rem" }}>SUP8</h3>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Last Reading</label>
                            <input type="number" id="name" name="name" required value={lastReadingSup8} disabled />

                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Current Reading</label>
                            <input type="number" id="name" name="name" required onChange={(e) => setSup8CurrentReading(e.target.value)} />
                            {errorMsg && !sup8_currentReading && <span className="errorHandle">Please enter sup8 before submit</span>}
                        </div>
                    </div>


                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">PSO Card</label>
                            <input type="number" required onChange={(e) => setPsoCard(e.target.value)} />
                            {/* <input type="number" required onChange={(e) => setPsoCard(Number(e.target.value))} /> */}
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">HBL Card</label>
                            <input type="number"  required onChange={(e) => setHBLCard(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">BANK Deposit</label>
                            <input type="number"  required onChange={(e) => setBankDeposit(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">PSO Payment</label>
                            <input type="number"  required onChange={(e) => setPsoPayment(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Advance Salary</label>
                            <input type="number"  required onChange={(e) => setAdvanceSalary(e.target.value)} />
                        </div>
                    </div>


                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Credit Wasoli</label>
                            <input type="number" id="name" name="name" required onChange={(e) => setCreditWasoli(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Lubricants</label>
                            <input type="number" id="name" name="name" required onChange={(e) => setLubricants(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">TUC/TYRE Shop</label>
                            <input type="number" id="name" name="name" required onChange={(e) => setTucShop(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Cash From Other Pumps</label>
                            <input type="number" id="name" name="name" required onChange={(e) => setCashFromOtherPumps(e.target.value)} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">MISC Payment</label>
                            <input type="number" id="name" name="name" required onChange={(e) => setMiscPayment(e.target.value)} />

                        </div>
                        <div className="form-group">
                            <label htmlFor="name">MISC/Other</label>
                            <input type="number" id="name" name="name" required onChange={(e) => setMiscOther(e.target.value)} />
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

export default AddSiaaFillingStation
