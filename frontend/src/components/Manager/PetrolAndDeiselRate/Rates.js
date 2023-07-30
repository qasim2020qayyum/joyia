import React, { useEffect, useState } from 'react'
import "./Rates.css"
import { Link, useNavigate } from 'react-router-dom';
const Rates = () => {

  const [uData, setUData] = useState([]);

  const userData = async () => {
    let res = await fetch("http://localhost:8000/joiya/petrolrate")
    res = await res.json();
    setUData(res)
  }
  useEffect(() => {
    userData()
  }, [])

  return (
    <>
      <div>
        {
          uData.map((item) => {
            return (
              <>
              <div className="box-containerr" key={item._id}>

                <div  className="rate_box">
                  <h5>SUP Purchase Rate </h5>
                  <h5 className='ratebox_clr'>: {item.sup_purchase_rate}</h5>
                </div>
                <div className="rate_box">
                  <h5>SUP sale Rate </h5>
                  <h5 className='ratebox_clr'>: {item.sup_sale_rate}</h5>
                </div>
                <div className="rate_box">
                  <h5>HSD Purchase Rate </h5><br />
                  <h5 className='ratebox_clr'>: {item.hsd_purchase_rate}</h5>
                </div>
                <div className="rate_box">
                  <h5>HSD Purchase Rate </h5>
                  <h5 className='ratebox_clr'>: {item.hsd_sale_rate}</h5>
                </div>
                  <Link to={`/editrates/${item._id}`} style={{position:"absolute", left:"5.2rem", top:"11.5rem"}} className='btn btn-success btn-sm me-2 mt-5'><i class="fas fa-edit"></i></Link>
              </div>
              </>
            )
          })
        }

      </div>
    </>
  )
}

export default Rates
