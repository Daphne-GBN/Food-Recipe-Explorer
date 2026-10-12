
import React from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/", image: "/images/Home.png" },
  { name: "Explore", path: "/recipes", image: "/images/explore.png" },
  { name: "Favorites", path: "/favorites", image: "/images/favorites.png" },
  { name: "Quiz", path: "/food-quiz", image: "/images/quiz.png" },
  { name: "About", path: "/about", image: "/images/About.png" },
  { name: "Contact", path: "/contact", image: "/images/Contact.png" },
];

function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav className={`navbar ${isHomePage ? "navbar-home" : "navbar-other"}`}>
      <div className="navbar-logo">
        <Link to="/">Savorly</Link>
      </div>

      <div className="navbar-links">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="navbar-item"
          >
            <div className="navbar-icon-crop">
              <img
                src={item.image}
                alt=""
                className="navbar-icon"
              />
            </div>

            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
