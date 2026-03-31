import React, { useState } from "react";
import { Link } from 'react-router-dom';

const GuestSideBar = () => {
  

  return (
    <div className="sidebar-guest">
      
      {/* Hamburger button - only shows on mobile */}
      {/* <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className={isOpen ? "bar bar1-open" : "bar"} />
        <span className={isOpen ? "bar bar2-open" : "bar"} />
        <span className={isOpen ? "bar bar3-open" : "bar"} />
      </button> */}

      {/* Nav links */}
      <aside>
        <nav >
          <Link to="/home" >Home</Link>
          <Link to="/guestdashboard" >Guest Dashboard</Link>
          <Link to="/guestusersettings" >Guest Settings</Link>
          <Link to="/registervehicle" >Register Vehicle</Link>
          <Link to="/">Log Out</Link>
          <Link to="/hostdashboard" >Host Dashboard</Link>
        </nav>
      </aside>

    </div>
  );
};

export default GuestSideBar;