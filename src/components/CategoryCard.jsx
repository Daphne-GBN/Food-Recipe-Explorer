import React from "react";
import { Link } from "react-router-dom";

function CategoryCard({
  name,
  image,
  description,
  type = "category",
}) {
  return (
    <div className="category-card">

      <img
        src={image}
        alt={name}
      />

      <div className="category-card-content">

        <h3>{name}</h3>

        <p>{description}</p>

        <Link
          to={`/recipes?${type}=${encodeURIComponent(name)}`}
          className="category-explore-button"
        >
          Explore
        </Link>

      </div>

    </div>
  );
}

export default CategoryCard;