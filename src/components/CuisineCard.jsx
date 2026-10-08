import React from "react";
import { Link } from "react-router-dom";

function CuisineCard({ name, image, description }) {
  return (
    <div className="cuisine-card">

      <img src={image} alt={name} />

      <div className="cuisine-card-content">

        <h3>{name}</h3>

        <p>{description}</p>

        <Link to={`/recipes?cuisine=${encodeURIComponent(name)}`}>
          Explore
        </Link>

      </div>

    </div>
  );
}

export default CuisineCard;