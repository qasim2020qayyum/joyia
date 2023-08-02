import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const EditSiaaFillingStation = () => {
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

    const [psoCard, setPsoCard] = useState('');
    const [HBLCard, setHBLCard] = useState('');
    const [bankDeposit, setBankDeposit] = useState('');
    const [lubricants, setLubricants] = useState('');
    const [tucShop, setTucShop] = useState('');
    const [miscPayment, setMiscPayment] = useState('');
    const [miscOther, setMiscOther] = useState('');

    const [psoPayment, setPsoPayment] = useState('');
    const [advanceSalary, setAdvanceSalary] = useState('');
    const [creditWasoli, setCreditWasoli] = useState('');
    const [cashFromOtherPumps, setCashFromOtherPumps] = useState('');


    //   const [data, setData] = useState([]);
    const navigate = useNavigate();

    const params = useParams();


    const getUserDetail = async () => {
        let res = await fetch(`http://localhost:8000/joiya/siaaFillingStation/data/${params.id}`)
        res = await res.json();

        setLastReadingSup1(res.lastReadingSup1)
        setLastReadingSup2(res.lastReadingSup2)
        setLastReadingSup3(res.lastReadingSup3)
        setLastReadingSup4(res.lastReadingSup4)
        setLastReadingSup5(res.lastReadingSup5)
        setLastReadingSup6(res.lastReadingSup6)
        setLastReadingSup7(res.lastReadingSup7)
        setLastReadingSup8(res.lastReadingSup8)

        setSup1CurrentReading(res.sup1_currentReading)
        setSup2CurrentReading(res.sup2_currentReading)
        setSup3CurrentReading(res.sup3_currentReading)
        setSup4CurrentReading(res.sup4_currentReading)
        setSup5CurrentReading(res.sup5_currentReading)
        setSup6CurrentReading(res.sup6_currentReading)
        setSup7CurrentReading(res.sup7_currentReading)
        setSup8CurrentReading(res.sup8_currentReading)

        setPsoCard(res.psoCard)
        setHBLCard(res.HBLCard)
        setBankDeposit(res.bankDeposit)
        setLubricants(res.lubricants)
        setTucShop(res.tucShop)
        setMiscPayment(res.miscPayment)
        setMiscOther(res.miscOther)

        setPsoPayment(res.psoPayment)
        setAdvanceSalary(res.advanceSalary)
        setCreditWasoli(res.creditWasoli)
        setCashFromOtherPumps(res.cashFromOtherPumps)
    }


    const updateData = async (e) => {
        e.preventDefault();
        let res = await fetch(`http://localhost:8000/joiya/siaaFillingStation/data/${params.id}`, {
            method: "put",
            body: JSON.stringify({
                lastReadingSup1: Number(lastReadingSup1),
                lastReadingSup2: Number(lastReadingSup2),
                lastReadingSup3: Number(lastReadingSup3),
                lastReadingSup4: Number(lastReadingSup4),
                lastReadingSup5: Number(lastReadingSup5),
                lastReadingSup6: Number(lastReadingSup6),
                lastReadingSup7: Number(lastReadingSup7),
                lastReadingSup8: Number(lastReadingSup8),

                sup1_currentReading: Number(sup1_currentReading),
                sup2_currentReading: Number(sup2_currentReading),
                sup3_currentReading: Number(sup3_currentReading),
                sup4_currentReading: Number(sup4_currentReading),
                sup5_currentReading: Number(sup5_currentReading),
                sup6_currentReading: Number(sup6_currentReading),
                sup7_currentReading: Number(sup7_currentReading),
                sup8_currentReading: Number(sup8_currentReading),


                // payments 
                psoCard: Number(psoCard),
                HBLCard: Number(HBLCard),
                bankDeposit: Number(bankDeposit),
                psoPayment: Number(psoPayment),
                advanceSalary: Number(advanceSalary),
                // recieving
                creditWasoli: Number(creditWasoli),
                lubricants: Number(lubricants),
                tucShop: Number(tucShop),
                cashFromOtherPumps: Number(cashFromOtherPumps),
                // expense
                miscPayment: Number(miscPayment),
                miscOther: Number(miscOther),
            }),
            headers: {
                "Content-Type": "Application/json"
            }
        })
        res = await res.json();
        console.log(res);
        navigate('/siaa-filling-station/get-all-data');
        toast.success("Data is updated👌");
    }

    useEffect(() => {
        getUserDetail();
    }, [])


    return (
        <>
            <div className="form-container card border-0 shadow rounded-3 my-5 p-5">
                <h1 className="mb-5">Siaa Filling Station</h1>
                <hr />
                <form>
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
                            <input type="number" id="name" name="name" required value={sup1_currentReading} onChange={(e) => setSup1CurrentReading(e.target.value)} />
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
                            <input type="number" id="name" name="name" required value={sup2_currentReading} onChange={(e) => setSup2CurrentReading(e.target.value)} />
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
                            <input type="number" id="name" name="name" required value={sup3_currentReading} onChange={(e) => setSup3CurrentReading(e.target.value)} />
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
                            <input type="number" id="name" name="name" required value={sup4_currentReading} onChange={(e) => setSup4CurrentReading(e.target.value)} />
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
                            <input type="number" id="name" name="name" required value={sup5_currentReading} onChange={(e) => setSup5CurrentReading(e.target.value)} />
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
                            <input type="number" id="name" name="name" required value={sup6_currentReading} onChange={(e) => setSup6CurrentReading(e.target.value)} />
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
                            <input type="number" id="name" name="name" required value={sup7_currentReading} onChange={(e) => setSup7CurrentReading(e.target.value)} />
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
                            <input type="number" id="name" name="name" required value={sup8_currentReading} onChange={(e) => setSup8CurrentReading(e.target.value)} />
                        </div>
                    </div>
                    


                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">PSO Card</label>
                            <input type="number" required value={psoCard} onChange={(e) => setPsoCard(e.target.value)} />
                            {/* <input type="number" required onChange={(e) => setPsoCard(Number(e.target.value))} /> */}
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">HBL Card</label>
                            <input type="number" required value={HBLCard} onChange={(e) => setHBLCard(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">BANK Deposit</label>
                            <input type="number" required value={bankDeposit} onChange={(e) => setBankDeposit(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">PSO Payment</label>
                            <input type="number" required value={psoPayment} onChange={(e) => setPsoPayment(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Advance Salary</label>
                            <input type="number" required value={advanceSalary} onChange={(e) => setAdvanceSalary(e.target.value)} />
                        </div>
                    </div>



                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Credit Wasoli</label>
                            <input type="number" id="name" name="name" required value={creditWasoli} onChange={(e) => setCreditWasoli(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Lubricants</label>
                            <input type="number" id="name" name="name" required value={lubricants} onChange={(e) => setLubricants(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">TUC/TYRE Shop</label>
                            <input type="number" id="name" name="name" required value={tucShop} onChange={(e) => setTucShop(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Cash From Other Pumps</label>
                            <input type="number" id="name" name="name" required value={cashFromOtherPumps} onChange={(e) => setCashFromOtherPumps(e.target.value)} />
                        </div>
                    </div>





                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">MISC Payment</label>
                            <input type="number" id="name" name="name" required value={miscPayment} onChange={(e) => setMiscPayment(e.target.value)} />

                        </div>
                        <div className="form-group">
                            <label htmlFor="name">MISC/Other</label>
                            <input type="number" id="name" name="name" required value={miscOther} onChange={(e) => setMiscOther(e.target.value)} />
                        </div>
                    </div>




                    <div style={{ textAlign: "center" }}>
                        <button style={{ color: "white" }} className="btn btn-light login btn-login  fw-bold" onClick={updateData} type="submit"
                        >Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditSiaaFillingStation