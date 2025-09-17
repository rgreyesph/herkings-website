import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // We will update this file next

function Navbar() {
  // 'useState' is a React Hook to manage the open/closed state of the menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // This function will be called when a link is clicked on mobile to close the menu
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo" onClick={handleLinkClick}>
        Herkings.com
      </Link>
      
      {/* This is the Hamburger Icon */}
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* We add the 'open' class conditionally based on the state */}
      <ul className={isMenuOpen ? "nav-menu open" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={handleLinkClick}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link" onClick={handleLinkClick}>About Us</Link>
        </li>
        <li className="nav-item dropdown">
          <div className="dropbtn">Offerings</div>
          <div className="dropdown-content">
            <Link to="/products" onClick={handleLinkClick}>Products</Link>
            <Link to="/services" onClick={handleLinkClick}>Services</Link>
          </div>
        </li>
        <li className="nav-item">
          <Link to="/gallery" className="nav-link" onClick={handleLinkClick}>Gallery</Link>
        </li>
        <li className="nav-item">
          <Link to="/blog" className="nav-link" onClick={handleLinkClick}>Blog</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link" onClick={handleLinkClick}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;