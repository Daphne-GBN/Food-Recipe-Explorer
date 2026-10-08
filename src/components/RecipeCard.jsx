import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({
  id,
  name,
  image,
  cuisine,
  category,
  meal,
  cookingTime,
  difficulty,
}) {
  return (
    <div className="recipe-card">

      <img
        src={image}
        alt={name}
      />

      <div className="recipe-card-content">

        <h3>{name}</h3>

        <p>{cuisine} Cuisine</p>

        <div className="recipe-info">
          <span>{category}</span>
          <span>{meal}</span>
          <span>{cookingTime}</span>
          <span>{difficulty}</span>
        </div>

        <Link
          to={`/recipes/${id}`}
          className="view-recipe-button"
        >
          View Recipe
        </Link>

      </div>

    </div>
  );
}

export default RecipeCard;