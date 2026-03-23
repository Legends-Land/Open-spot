import { useState } from "react";

const GuestHamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{ background: "#2196F3", padding: "1rem" }}>
      
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
      <ul style={{
        display: isOpen ? "flex" : "none",
        flexDirection: "column",
        listStyle: "none",
        padding: 0,
        margin: 0,
      }}>
        <li><a href="#" style={linkStyle}>Home</a></li>
        <li><a href="#" style={linkStyle}>Guest Dashboard</a></li>
        <li><a href="#" style={linkStyle}>Guest Settings</a></li>
        <li><a href="#" style={linkStyle}>Register Vehicle</a></li>
        <li><a href="#" style={linkStyle}>Log Out</a></li>
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