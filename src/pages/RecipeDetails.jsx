import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import recipes from "../data/recipes";

function RecipeDetails() {
  const { id } = useParams();

  const recipe = recipes.find(
    (item) => item.id === Number(id)
  );

  const [isFavorite, setIsFavorite] = useState(() => {
    const favorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    return favorites.some(
      (item) => item.id === Number(id)
    );
  });

  if (!recipe) {
    return (
      <div className="recipe-not-found">
        <h1>Recipe Not Found</h1>

        <p>
          Sorry, we couldn't find the recipe you're looking for.
        </p>

        <Link to="/recipes">
          Explore Recipes
        </Link>
      </div>
    );
  }

  const handleFavorite = () => {
    const favorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite) {
      const updatedFavorites = favorites.filter(
        (item) => item.id !== recipe.id
      );

      localStorage.setItem(
        "favorites",
        JSON.stringify(updatedFavorites)
      );

      setIsFavorite(false);
    } else {
      const updatedFavorites = [
        ...favorites,
        recipe
      ];

      localStorage.setItem(
        "favorites",
        JSON.stringify(updatedFavorites)
      );

      setIsFavorite(true);
    }
  };

  return (
    <div className="recipe-details-page">

      {/* Recipe Header */}
      <section className="recipe-details-header">

        <div className="recipe-details-image">
          <img
            src={recipe.image}
            alt={recipe.name}
          />
        </div>

        <div className="recipe-details-info">

          <h1>{recipe.name}</h1>

          <p className="recipe-cuisine">
            {recipe.cuisine} Cuisine
          </p>

          <div className="recipe-meta">

            <span>
              Category: {recipe.category}
            </span>

            <span>
              Meal: {recipe.meal}
            </span>

            <span>
              Cooking Time: {recipe.cookingTime}
            </span>

            <span>
              Difficulty: {recipe.difficulty}
            </span>

            <span>
              Rating: ⭐ {recipe.rating}
            </span>

          </div>

          <button
            type="button"
            onClick={handleFavorite}
          >
            {isFavorite
              ? "Remove from Favorites"
              : "Add to Favorites"}
          </button>

        </div>

      </section>

      {/* Ingredients */}
      <section className="recipe-ingredients">

        <h2>Ingredients</h2>

        <ul>
          {recipe.ingredients.map(
            (ingredient, index) => (
              <li key={index}>
                {ingredient}
              </li>
            )
          )}
        </ul>

      </section>

      {/* Cooking Instructions */}
      <section className="recipe-instructions">

        <h2>Cooking Instructions</h2>

        <ol>
          {recipe.instructions.map(
            (instruction, index) => (
              <li key={index}>
                {instruction}
              </li>
            )
          )}
        </ol>

      </section>

      {/* Fun Fact */}
      <section className="recipe-fun-fact">

        <h2>Fun Fact</h2>

        <p>
          {recipe.funFact}
        </p>

      </section>

    </div>
  );
}

export default RecipeDetails;