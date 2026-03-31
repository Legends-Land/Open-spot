import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/HamburgerMenu.css"

const HostHamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="hamburger-nav">

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
    <Link to="/hostdashboard" onClick={() => setIsOpen(false)}>Host Dashboard</Link>
  </li>
  <li>
    <Link to="/hostusersettings" onClick={() => setIsOpen(false)}>Host Settings</Link>
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
</ul>

    </nav>
  );
};

export default HostHamburgerMenu;