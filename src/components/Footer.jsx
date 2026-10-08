import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-brand">
          <h2>Savorly</h2>

          <p>
            Discover delicious recipes and explore flavors
            from cuisines around the world.
          </p>
        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <Link to="/">
            Home
          </Link>

          <Link to="/recipes">
            Explore Recipes
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

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Savorly. All rights reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;