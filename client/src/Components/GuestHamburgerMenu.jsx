import { useState } from "react";
import { Link } from "react-router-dom";

const GuestHamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{ background: "#139536", padding: "1rem" }}>
      {/* Hamburger button - only shows on mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: "block",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <span style={barStyle} />
        <span style={barStyle} />
        <span style={barStyle} />
      </button>

      {/* Links - hidden on mobile until hamburger is clicked */}
      <ul
        style={{
          display: isOpen ? "flex" : "none",
          flexDirection: "column",
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        <div className="">
        <li>
          <Link to="/home" onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li>
        <Link to="/guestdashboard" onClick={() => setIsOpen(false)}>Guest Dashboard</Link>
        </li>
        <li>
          <Link to="/guestusersettings" onClick={() => setIsOpen(false)}>Guest Settings</Link>
        </li>
        <li>
          <Link to="/registervehicle" onClick={() => setIsOpen(false)}>Register Vehicle</Link>
        </li>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>Log Out</Link>
        </li>
        <li>
          <Link to="/hostdashboard" onClick={() => setIsOpen(false)}>Host Dashboard</Link>
        </li>
      </div>
      </ul>
      
    </nav>
  );
};

const barStyle = {
  display: "block",
  width: "25px",
  height: "3px",
  background: "white",
  margin: "5px 0",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  padding: "0.5rem 0",
  display: "block",
};

export default GuestHamburgerMenu;
