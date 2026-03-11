import React from "react";
import {Link} from 'react-router-dom'


const HostSideBar = () => {


  return (
    <>
    <div className="sidebar-host">
      
        <aside>
        <nav>  
      <Link to ="/hostdashboard"> Host Dashboard </Link>
      <Link to ="/hostusersettings">User Settings</Link>
      <Link to ="/property">Register Property</Link>
      <Link to ="/">Log Out </Link>
      <Link to ="/guestdashboard">Guest Dashboard </Link>
        </nav>
        </aside>
    </div>
      
    </>
  )
};

export default HostSideBar;   