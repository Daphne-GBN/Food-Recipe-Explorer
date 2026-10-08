import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import RecipeGrid from "../components/RecipeGrid";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    setFavorites(savedFavorites);
  }, []);

  return (
    <div className="favorites-page">

      <section className="favorites-header">

        <h1>Favorite Recipes</h1>

        <p>
          Your favorite recipes are saved here.
        </p>

      </section>

      <section className="favorites-content">

        <h2>
          My Favorites
        </h2>

        {favorites.length > 0 ? (

          <RecipeGrid recipes={favorites} />

        ) : (

          <div className="empty-favorites">

            <p>
              You haven't added any recipes to your
              favorites yet.
            </p>

            <Link to="/recipes">
              Explore Recipes
            </Link>

          </div>

        )}

      </section>

    </div>
  );
}

export default Favorites;