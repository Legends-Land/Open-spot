import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/HamburgerMenu.css";

const GuestHamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="hamburger-nav guest">

      {/* Hamburger button */}
      <button
        className="hamburger-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      {/* Nav links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
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
      </ul>

    </nav>
  );
};

export default GuestHamburgerMenu;