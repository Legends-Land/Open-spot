import React from "react"
import { useState,useEffect } from "react";
import HostSideBar from "../Components/HostSidebar";
import '../styles/hostDashboard.css'
import axios from "axios";

// function  Host(){
// return(
//   <div>
//     Host Dashboard from Legend
//     <input/>
//   </div>
// )
// };


const HostDashboard = () => {
  const [host, setHost] = useState({
    fistName:"",
    lastName: ""
  })

  const handleEvent = (e) =>{
    setHost({...host, [e.target.name]: e.target.host})
    console.log("Name", e.target.name)
    console.log("Value", e.target.value)
  }

  const handleSubmit = async (e) => {
    try {
      const response = await axios.post("http://localhost:3002/hostdashboard",host)
    } catch (err) {
      console.error ("Full Error")
    }
  }

  // useEffect(()=> {
  //   axios.get( `${VITE_SERVER_URL}/host`)
  // })

  return (
    <div>
      
      <h2>Host Dashboard</h2>
      <form>
        <input
        type=""
        name="firstName"
        onChange={handleEvent}
        placeholder="First Name"
        ></input>

        <input
        type=""
        name="lastName"
        onChange={handleEvent}
        placeholder="Last Name"
        ></input>

        <button
        onClick={handleSubmit}
        >
          Submit
        </button>


      </form>
      <HostSideBar/>
    </div>
  );
};

export default HostDashboard;

