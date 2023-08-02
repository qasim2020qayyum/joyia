import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const AddAwanBrother = () => {
    // get last reading 
    const [lastReadingSup1, setLastReadingSup1] = useState([]);
    const [lastReadingSup2, setLastReadingSup2] = useState([]);
    const [lastReadingHsd1, setLastReadingHsd1] = useState([]);
    const [lastReadingHsd2, setLastReadingHsd2] = useState([]);
    const [lastReadingHsd3, setLastReadingHsd3] = useState([]);
    const [lastReadingHsd4, setLastReadingHsd4] = useState([]);
    const [lastReadingHsd5, setLastReadingHsd5] = useState([]);
    const [lastReadingHsd6, setLastReadingHsd6] = useState([]);


    // insert table data 

    const [sup1_currentReading, setSup1CurrentReading] = useState('');
    const [sup2_currentReading, setSup2CurrentReading] = useState('');
    const [hsd1_currentReading, setHsd1CurrentReading] = useState('');
    const [hsd2_currentReading, setHsd2CurrentReading] = useState('');
    const [hsd3_currentReading, setHsd3CurrentReading] = useState('');
    const [hsd4_currentReading, setHsd4CurrentReading] = useState('');
    const [hsd5_currentReading, setHsd5CurrentReading] = useState('');
    const [hsd6_currentReading, setHsd6CurrentReading] = useState('');
    // rates 
    const [sup_purchase_rate, setSupPurchaseRate] = useState('');
    const [sup_sale_rate, setSupSaleRate] = useState('');
    const [hsd_purchase_rate, setHsdPurchaseRate] = useState('');
    const [hsd_sale_rate, setHsdSaleRate] = useState('');
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
            !hsd1_currentReading ||
            !hsd2_currentReading ||
            !hsd3_currentReading ||
            !hsd4_currentReading ||
            !hsd5_currentReading ||
            !hsd6_currentReading ||
            // rates
            !sup_purchase_rate ||
            !sup_sale_rate ||
            !hsd_purchase_rate ||
            !hsd_sale_rate
        ) {
            setErrorMsg(true)
            return false
        }
        e.preventDefault();
        let pumpData = await fetch("http://localhost:8000/joiya/awanbrothers/data/", {
            method: 'POST',
            body: JSON.stringify({
                sup1_currentReading: Number(sup1_currentReading),
                sup2_currentReading: Number(sup2_currentReading),
                hsd1_currentReading: Number(hsd1_currentReading),
                hsd2_currentReading: Number(hsd2_currentReading),
                hsd3_currentReading: Number(hsd3_currentReading),
                hsd4_currentReading: Number(hsd4_currentReading),
                hsd5_currentReading: Number(hsd5_currentReading),
                hsd6_currentReading: Number(hsd6_currentReading),
                // rates 
                sup_purchase_rate: Number(sup_purchase_rate),
                sup_sale_rate: Number(sup_sale_rate),
                hsd_purchase_rate: Number(hsd_purchase_rate),
                hsd_sale_rate: Number(hsd_sale_rate),

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
        navigate('/awan-brother/get-all-data')
        toast.success("Data added👌");
    }





    // get last reading 
    const userData = async () => {
        let res = await fetch("http://localhost:8000/joiya/awanbrothers/data")
        res = await res.json();
        setLastReadingSup1(res[res.length - 1].sup1_currentReading)
        setLastReadingSup2(res[res.length - 1].sup2_currentReading)
        setLastReadingHsd1(res[res.length - 1].hsd1_currentReading)
        setLastReadingHsd2(res[res.length - 1].hsd2_currentReading)
        setLastReadingHsd3(res[res.length - 1].hsd3_currentReading)
        setLastReadingHsd4(res[res.length - 1].hsd4_currentReading)
        setLastReadingHsd5(res[res.length - 1].hsd5_currentReading)
        setLastReadingHsd6(res[res.length - 1].hsd6_currentReading)
    }
    useEffect(() => {
        userData()
    }, [])



    return (
        <>
            <div className="form-container card border-0 shadow rounded-3 my-5 p-5">
                <h1 className="mb-5">Awan Brother</h1>
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

                        <div className="form-group">
                            <label htmlFor="name">HSD Purchase Rate</label>
                            <input type="number" id="name" name="name" required onChange={(e) => setHsdPurchaseRate(e.target.value)} />
                            {errorMsg && !hsd_purchase_rate && <span className="errorHandle">Please enter HSD purchase rate before submit</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">HSD Sale Rate</label>
                            <input type="number" id="name" name="name" required onChange={(e) => setHsdSaleRate(e.target.value)} />
                            {errorMsg && !hsd_sale_rate && <span className="errorHandle">Please enter HSD sale rate before submit</span>}
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
                    {/* HSD 1 */}
                    <div className="form-row">
                        <div className="form-group">
                            <h3 style={{ marginTop: "3rem" }}>HSD1</h3>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Last Reading</label>
                            <input type="number" id="name" name="name" required value={lastReadingHsd1} disabled />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Current Reading</label>
                            <input type="number" id="name" name="name" required onChange={(e) => setHsd1CurrentReading(e.target.value)} />
                            {errorMsg && !hsd1_currentReading && <span className="errorHandle">Please enter HSD1 before submit</span>}

                        </div>
                    </div>
                    {/* HSD 2 */}
                    <div className="form-row">
                        <div className="form-group">
                            <h3 style={{ marginTop: "3rem" }}>HSD2</h3>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Last Reading</label>
                            <input type="number" id="name" name="name" required value={lastReadingHsd2} disabled />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Current Reading</label>
                            <input type="number" id="name" name="name" required onChange={(e) => setHsd2CurrentReading(e.target.value)} />
                            {errorMsg && !hsd2_currentReading && <span className="errorHandle">Please enter HSD2 before submit</span>}
                        </div>
                    </div>
                    {/* HSD 3 */}
                    <div className="form-row">
                        <div className="form-group">
                            <h3 style={{ marginTop: "3rem" }}>HSD3</h3>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Last Reading</label>
                            <input type="number" id="name" name="name" required value={lastReadingHsd3} disabled />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Current Reading</label>
                            <input type="number" id="name" name="name" required onChange={(e) => setHsd3CurrentReading(e.target.value)} />
                            {errorMsg && !hsd3_currentReading && <span className="errorHandle">Please enter HSD4 before submit</span>}
                        </div>
                    </div>
                    {/* HSD 4 */}
                    <div className="form-row">
                        <div className="form-group">
                            <h3 style={{ marginTop: "3rem" }}>HSD4</h3>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Last Reading</label>
                            <input type="number" id="name" name="name" required value={lastReadingHsd4} disabled />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Current Reading</label>
                            <input type="number" id="name" name="name" required onChange={(e) => setHsd4CurrentReading(e.target.value)} />
                            {errorMsg && !hsd4_currentReading && <span className="errorHandle">Please enter HSD4 before submit</span>}
                        </div>
                    </div>
                    {/* HSD 5 */}
                    <div className="form-row">
                        <div className="form-group">
                            <h3 style={{ marginTop: "3rem" }}>HSD5</h3>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Last Reading</label>
                            <input type="number" id="name" name="name" required value={lastReadingHsd5} disabled />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Current Reading</label>
                            <input type="number" id="name" name="name" required onChange={(e) => setHsd5CurrentReading(e.target.value)} />
                            {errorMsg && !hsd5_currentReading && <span className="errorHandle">Please enter HSD5 before submit</span>}
                        </div>
                    </div>
                    {/* HSD 6 */}
                    <div className="form-row">
                        <div className="form-group">
                            <h3 style={{ marginTop: "3rem" }}>HSD6</h3>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Last Reading</label>
                            <input type="number" id="name" name="name" required value={lastReadingHsd6} disabled />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Current Reading</label>
                            <input type="number" id="name" name="name" required onChange={(e) => setHsd6CurrentReading(e.target.value)} />
                            {errorMsg && !hsd6_currentReading && <span className="errorHandle">Please enter HSD6 before submit</span>}
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

export default AddAwanBrother
