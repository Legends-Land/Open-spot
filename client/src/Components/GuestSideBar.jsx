import React, { useState } from "react";
import { Link } from 'react-router-dom';

const GuestSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sidebar-guest">
      
      {/* Hamburger button - only shows on mobile */}
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className={isOpen ? "bar bar1-open" : "bar"} />
        <span className={isOpen ? "bar bar2-open" : "bar"} />
        <span className={isOpen ? "bar bar3-open" : "bar"} />
      </button>

      {/* Nav links */}
      <aside>
        <nav className={isOpen ? "nav-links open" : "nav-links"}>
          <Link to="/home" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/guestdashboard" onClick={() => setIsOpen(false)}>Guest Dashboard</Link>
          <Link to="/guestusersettings" onClick={() => setIsOpen(false)}>Guest Settings</Link>
          <Link to="/registervehicle" onClick={() => setIsOpen(false)}>Register Vehicle</Link>
          <Link to="/" onClick={() => setIsOpen(false)}>Log Out</Link>
          <Link to="/hostdashboard" onClick={() => setIsOpen(false)}>Host Dashboard</Link>
        </nav>
      </aside>

    </div>
  );
};

export default GuestSideBar;