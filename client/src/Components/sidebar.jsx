import React from "react";
import {Link} from 'react-router-dom'

const SideBar = () => {


  return (
    <>
    <div className="sidebar">
      
        <aside>
        <nav>  
      <Link to ="/host">Dashboard </Link>
      <Link to ="/home">Home </Link>
      <Link to ="/host">Settings</Link>
      <Link to ="/">Log Out </Link>
        </nav>
        </aside>
    </div>
      
    </>
  )
};

export default SideBar;   