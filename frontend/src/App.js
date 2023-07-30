import React from "react";
import {Routes,Route} from "react-router-dom";
import Navbar from "./components/Landingpage/Navbar";
import Home from "./components/Landingpage/Home";
import Login from "./components/login/Login";
import Signup from "./components/Signup/Signup";
import Header from "./components/Landingpage/Header";
import Footer from "./components/Landingpage/Footer";
import { ToastContainer } from 'react-toastify'
import ManagerBoard from "./components/Manager/ManagerBoard";
import UpdateRates from "./components/Manager/PetrolAndDeiselRate/UpdateRates";
import AliPetrolium from "./components/Manager/AllPump/AliPetrolium/AliPetrolium";
import AddAliPetrolium from "./components/Manager/AllPump/AliPetrolium/AliPetroliumCRUD/AddAliPetrolium";
import GetSingleAliPetroliumData from "./components/Manager/AllPump/AliPetrolium/AliPetroliumCRUD/GetSingleAliPetroliumData";
import EditAliPetrolium from "./components/Manager/AllPump/AliPetrolium/AliPetroliumCRUD/EditAliPetrolium";
import Workers from "./components/Manager/WorkersAndUsers/Workers/Workers";
import AddWorkers from "./components/Manager/WorkersAndUsers/Workers/AddWorkers";
import EditWorker from "./components/Manager/WorkersAndUsers/Workers/EditWorker";
import Users from "./components/Manager/WorkersAndUsers/Users/Users";
import CheckWorker from "./components/Manager/WorkersAndUsers/Workers/CheckWorker";
import CheckAliPetroliumData from "./components/Manager/AllPump/AliPetrolium/AliPetroliumCRUD/CheckAliPetroliumData";
import CheckAddAliPetrolium from "./components/Manager/AllPump/AliPetrolium/AliPetroliumCRUD/CheckAddAliPetrolium";
function App() {
  return (
    <div>
      
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nav" element={<Navbar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          
          <Route path="/admin-Dashboard" element={<ManagerBoard/>} />
          <Route path='/editrates/:id' element={<UpdateRates />} />
          <Route path='/ali-petrolium' element={<AliPetrolium />} />
          <Route path='/ali-petrolium/add-todays-data' element={<CheckAddAliPetrolium />} />
          <Route path='/ali-petrolium/get-all-data' element={<CheckAliPetroliumData />} />
          <Route path='/ali-petrolium-details/:id' element={<GetSingleAliPetroliumData />} />
          <Route path='/edit-ali-petrolium-data/:id' element={<EditAliPetrolium />} />


          {/* worker  */}
          <Route path='/workers' element={<Workers />} />
          <Route path='/all-worker' element={<CheckWorker />} />
          <Route path='/users' element={<Users />} />
          <Route path='/add-worker' element={<AddWorkers />} />
          <Route path='/edit-worker/:id' element={<EditWorker />} />


        </Routes>
      <Footer/>
      <ToastContainer theme="danger"/>
    </div>
  );
}

export default App;
