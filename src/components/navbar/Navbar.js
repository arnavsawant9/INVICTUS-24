import React from "react";
import "./Navbar.css";
//import Message from "../message/Message.js";
//import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { BrowserRouter as Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>InternConnect</h2>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search for internship openings" />
      </div>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Messages</a>
      </div>
    </nav>
  );
}

export default Navbar;
