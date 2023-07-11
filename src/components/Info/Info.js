import React from 'react';
import './Info.css';

const Navbar = () => {
  
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="../houzdeal_logo 1.png" alt="Logo" className="logoImage" />
      </div>
      <div className="searchBar">
        <input type="text" placeholder="Search" className="searchInput" />
        <button className="searchButton">Search</button>
      </div>
      <div className="links">
        <a href="#" className="link">Loan Offers</a>
        <a href="#" className="link">List Property</a>

      </div>
    </nav>
  );
};

export default Navbar;
