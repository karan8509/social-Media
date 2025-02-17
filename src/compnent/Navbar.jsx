import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>logo my</h2>
      <ul>
        <li>
          <NavLink to="/" className="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin-dashboard" className="active">
            Create Post
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
