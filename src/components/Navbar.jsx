import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // We will create this CSS file next

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">Herkings.com</Link>
      <ul className="nav-menu">
        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
        <li className="nav-item"><Link to="/about" className="nav-link">About Us</Link></li>
        <li className="nav-item">
          <div className="dropdown">
            <button className="dropbtn">Offerings</button>
            <div className="dropdown-content">
              <Link to="/products">Products</Link>
              <Link to="/services">Services</Link>
            </div>
          </div>
        </li>
        <li className="nav-item"><Link to="/gallery" className="nav-link">Gallery</Link></li>
        <li className="nav-item"><Link to="/blog" className="nav-link">Blog</Link></li>
        <li className="nav-item"><Link to="/contact" className="nav-link">Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;