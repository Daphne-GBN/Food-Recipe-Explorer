import React from "react";
import { Link } from "react-router-dom";

function SavedRecipes() {
  return (
    <div className="saved-recipes-page">

      <section className="saved-recipes-header">

        <h1>My Saved Recipes</h1>

        <p>
          Your saved recipes will appear here.
        </p>

      </section>

      <section className="saved-recipes-content">

        <h2>Saved Recipes</h2>

        <div className="empty-saved-recipes">

          <p>
            You haven't saved any recipes yet.
          </p>

          <Link to="/recipes">
            Explore Recipes
          </Link>

        </div>

      </section>

    </div>
  );
}

export default SavedRecipes;