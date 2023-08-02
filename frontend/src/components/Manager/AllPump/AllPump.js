import React, { useState } from 'react'
import "./AllPump.css"
import { Link } from 'react-router-dom'
const AllPumpData = [
  {
    id: 1,
    name: "Ali Petrolium", //
    path: "/ali-petrolium"
  },
  {
    id: 2,
    name: "Awan Brother", //
    path: "/awan-brother"
  },
  {
    id: 3,
    name: "Baba Fareed Filling Station", //
    path: "/baba-fareed-filling-station"
  },
  {
    id: 4,
    name: "Bhatti Petrolium", //
    path: "/bhatti-petrolium"
  },
  {
    id: 5,
    name: "GO 09", //
    path: "/go-09"
  },
  {
    id: 6,
    name: "GO 45", //
    path: "/go-45"
  },
  {
    id: 7,
    name: "ID Filling Station", //
    path: "/id-filling-station"
  },
  {
    id: 8,
    name: "Jahangir Petrolium Service", //
    path: "/jahangir-petrolium-service"
  },
  {
    id: 9,
    name: "Khalid & Sons PSO", //
    path: "/khalid-&-sons-pso"
  },
  {
    id: 10,
    name: "Nadir Filling Station", //
    path: "/nadir-filling-station"
  },
  {
    id: 11,
    name: "Noor Petrolium", //
    path: "/noor-petrolium"
  },
  {
    id: 12,
    name: "AL Siddique Filling Station", //
    path: "/al-siddique-filling-station"
  },
  {
    id: 13,
    name: "SIAA Filling Station", //
    path: "/siaa-filling-station"
  },
]


const AllPump = () => {
  const [inputValue, setInputValue] = useState("");
  const filteredUsers = AllPumpData.filter((u) =>
      u.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  return (
    <>
     <form style={{margin:"0 2rem ", fontWeight:"900"}}>
          <input
          style={{fontWeight:"500",}}
            type="text"
            className="form-control w-25 mb-3 rounded-pill search_fieldd"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Search Pump by Name..."
            value={inputValue}
            onChange={handleInputChange}
          />
        </form>

      <div class="box-container">

        {filteredUsers.map((item) => (<Link to={item.path}><div key={item.id} class="box">{item.name}</div></Link>))}
      </div>
    </>
  )
}

export default AllPump
