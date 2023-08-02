import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import "../login/login.css";
function Login() {
 
  const navigate = useNavigate()
  const empty = {
    email: "",
    password: ""
  }

  // state for handle the login inputs

  const [handle, setHandle] = useState(empty)

  const loginHandler = (e) => {
    const { name, value } = e.target;
    setHandle({ ...handle, [name]: value })
    console.log(handle)
  }


  //function for login
  const loginApi = async () => {
    if (handle.email == "" || handle.password == "") {
      toast.warning("Enter the Fields First 😒");
    } else {
      let record = await fetch("http://localhost:8000/joiya/user/login", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(handle)
      })
      record = await record.json()
      if (record.message == "Login Successfully") {
        // store id in SessionStorage
        sessionStorage.setItem("userId", record.LoginUser._id)
        sessionStorage.setItem("userEmail", record.LoginUser.email)
        sessionStorage.setItem("name", record.LoginUser.name)
        // sessionStorage.setItem("userPassword",record.LoginUser.email)
        let adminemail = sessionStorage.getItem("userEmail")
        // let adminPassword = sessionStorage.getItem("userPassword")
        if (adminemail == "info@joyiapetroleum.com") {
          navigate("/admin-Dashboard")
          toast.success("Manager Login Successfully 👌");
        } else {
          navigate("/")
          toast.success("Login Successfully 👌");
        }


      } else {
        alert("Username and Password is invalid")
      }
    }
  }




  return (
    <div
      className="bgimage"
      style={{ backgroundImage: "url(assets/images/truck.avif)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <div className="card-title text-center mb-5 fw-light fs-5">
                <img src="assets/images/petrolium1.png" alt="" style={{width:"115px"}} />
                </div>
                <form onSubmit={(e) => {
                e.preventDefault()
              }}>
                 
                  <div className="form-floating mb-4">
                    <input
                      name="email"
                      type="email"
                      className="form-control input"
                      id="floatingInput"
                      placeholder="Email Address"
                      onChange={loginHandler}
                    />
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      name="password"
                      type="password"
                      className="form-control input"
                      id="floatingPassword"
                      placeholder="Password"
                      onChange={loginHandler}
                    />
                  </div>

                  <div className="d-grid">
                    <button
                    onClick={loginApi}
                      className="btn btn-light login btn-login  fw-bold"
                      type="submit"
                    >
                      Sign in
                    </button>
                  </div>
                  <br />
                  <div>
                    Don't have account?{" "}
                    <Link to="/signup">
                      <span className="signup">Sign Up</span>
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

export default Login;
