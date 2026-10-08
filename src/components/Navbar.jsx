import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <Link to="/">
          Savorly
        </Link>
      </div>

      <div className="navbar-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/recipes">
          Explore
        </Link>

        <Link to="/favorites">
          Favorites
        </Link>

        <Link to="/about">
          About
        </Link>

        <Link to="/contact">
          Contact
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;