import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <h1>
          Discover Your Next Favorite Dish
        </h1>

        <p>
          Explore delicious recipes from different cuisines,
          discover new flavors, and find the perfect dish
          for every occasion.
        </p>

        <Link to="/recipes">
          Explore Recipes
        </Link>

      </div>

    </section>
  );
}

export default Hero;