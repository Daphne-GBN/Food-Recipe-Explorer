import React from "react";
import RecipeForm from "../components/RecipeForm";

function AddRecipe() {
  return (
    <div className="add-recipe-page">

      {/* Page Header */}
      <section className="add-recipe-header">
        <h1>Add Your Recipe</h1>

        <p>
          Share your favorite recipe with the Savorly community.
        </p>
      </section>

      {/* Recipe Form */}
      <section className="add-recipe-content">
        <RecipeForm />
      </section>

    </div>
  );
}

export default AddRecipe;