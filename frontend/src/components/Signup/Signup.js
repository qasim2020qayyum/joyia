import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "../login/login.css";
function Signup() {
  

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState([]);
  
  const [errorMsg, setErrorMsg] = useState(false);
  const navigate = useNavigate();
  const saveData = async (e) => {
    if(!name || !email || !phone || !password){
      setErrorMsg(true)
      return false
    }
    e.preventDefault();
    let abcd = await fetch("http://localhost:8000/joiya/user", {
      method: 'POST',
      body: JSON.stringify({ name, email, phone, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    abcd = await abcd.json();
    setData(abcd);
    navigate('/login')
    toast.success("SignUp Successful 👌");
  }


 

  return (
    <div
      className="bgimage"
      style={{ backgroundImage: "url(assets/images/truck.avif)" , marginBottom:"10rem"}}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <div className="card-title text-center mb-5 fw-light fs-5">
                <img src="assets/images/petrolium1.png" alt="" style={{width:"115px"}} />
                </div>
                <form>
                  <div className="form-floating mb-4">
                    <input
                      required
                      name="name"
                      type="text"
                      className="form-control input"
                      id="userName"
                      placeholder="Full Name"
                      onChange={(e) => setName(e.target.value)}
                    />
                     {errorMsg && !name && <span className="errorHandle">Please enter User name before signup</span>}         

                  </div>
                  <div className="form-floating mb-4">
                    <input
                      required
                      name="email"
                      type="email"
                      className="form-control input"
                      id="floatingInput"
                      placeholder="Email Address"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                     {errorMsg && !email && <span className="errorHandle">Email is mandatory to get signup</span>}              

                  </div>
                  <div className="form-floating mb-4">
                    <input
                      required
                      name="phone"
                      type="number"
                      className="form-control input"
                      id="floatingInput"
                      placeholder="Phone No."
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    {errorMsg && !phone && <span className="errorHandle">Please enter phone number before signup</span>}         

                  </div>
                  <div className="form-floating mb-4">
                    <input
                      required
                      name="password"
                      type="password"
                      className="form-control input"
                      id="floatingPassword"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                   {errorMsg && !password && <span className="errorHandle">Please enter password before signup</span>}         

                  </div>

                  <div className="d-grid">
                    <button
                      className="btn btn-light login btn-login  fw-bold"
                      type="submit"
                      onClick={saveData}
                    >
                      Sign Up
                    </button>
                  </div>
                  <br />
                  <div>
                    Don't have account?{" "}
                    <Link to="/login">
                      <span className="signup">Login</span>
                    </Link>{" "}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
