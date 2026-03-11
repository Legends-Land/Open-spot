import React from "react";
import {Link} from 'react-router-dom'


const GuestSideBar = () => {


  return (
    <>
    <div className="sidebar-guest">
      
        <aside>
        <nav>  
      <Link to ="/guestdashboard"> Guest Dashboard </Link>
      <Link to ="/home">Home </Link>
      <Link to ="/guestusersettings">User Settings</Link>
      <Link to ="/registervehicle">Register Vehicle</Link>
      <Link to ="/">Log Out </Link>
      <Link to ="/hostdashboard">Host Dashboard</Link>
        </nav>
        </aside>
    </div>
      
    </>
  )
};

export default GuestSideBar;   