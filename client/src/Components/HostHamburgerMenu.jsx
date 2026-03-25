import { useState } from "react";
import { Link } from "react-router-dom";

const HostHamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{ background: "#ad21f3", padding: "1rem" }}>
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
        <div className="sidebar-host">
        <li>
        <Link to="/hostdashboard" onClick={() => setIsOpen(false)}>Host Dashboard</Link>
        </li>
        <li>
          <Link to="/hostusersettings" onClick={() => setIsOpen(false)}>Guest Settings</Link>
        </li>
        <li>
          <Link to="/registerproperty" onClick={() => setIsOpen(false)}>Register Property</Link>
        </li>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>Log Out</Link>
        </li>
        <li>
          <Link to="/guestdashboard" onClick={() => setIsOpen(false)}>Guest Dashboard</Link>
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

export default HostHamburgerMenu;
