import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate()
  let adminemail = sessionStorage.getItem("userEmail")
  const sesionExpire = ()=>{
    sessionStorage.clear()
    navigate("/login")
    toast.info("Logout from your role")
  }
  return (
    <div>
      <nav>
        <Link to="/" className="title">
        <img src="assets/images/petrolium1.png" alt="" className="img1" />
        </Link>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {
          (adminemail)?
          
            <ul>

      <button onClick={sesionExpire} style={{background:"transparent" ,color:"white", border:"none", fontWeight:"bold", marginLeft:"5px"}} ><i class='fa me-2'></i>Logout</button>
          <li>
            <Link to="/admin-Dashboard">Manager</Link>
          </li>
            </ul>

      :
          <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          </ul>
}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
