import React from "react";
import RecipeCard from "./RecipeCard";

function RecipeGrid({ recipes }) {
  return (
    <div className="recipe-grid">

      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          id={recipe.id}
          name={recipe.name}
          image={recipe.image}
          cuisine={recipe.cuisine}
          category={recipe.category}
          meal={recipe.meal}
          cookingTime={recipe.cookingTime}
          difficulty={recipe.difficulty}
        />
      ))}

    </div>
  );
}

export default RecipeGrid;