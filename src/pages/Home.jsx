import React from "react";

import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import CuisineCard from "../components/CuisineCard";
import CategoryCard from "../components/CategoryCard";
import RecipeGrid from "../components/RecipeGrid";

import recipes from "../data/recipes";

function Home() {
  const featuredRecipes = recipes.slice(0, 6);

  return (
    <div className="home-page">

      {/* HERO */}
      <Hero />

      {/* SEARCH */}
      <section className="home-search">
        <h2>Find Your Perfect Recipe</h2>

        <SearchBar />
      </section>


      {/* CUISINES */}
      <section className="cuisine-section">

        <h2>Explore Cuisines</h2>

        <div className="cuisine-grid">

          <CuisineCard
            name="Indian"
            image="/images/cuisines/cusines/Indian.png"
            description="Explore rich and diverse flavors from India."
          />

          <CuisineCard
            name="Chinese"
            image="/images/cuisines/cusines/Chineese.jpg"
            description="Discover flavorful dishes inspired by Chinese cuisine."
          />

          <CuisineCard
            name="Western"
            image="/images/cuisines/cusines/western.jpg"
            description="Enjoy popular dishes and flavors from Western cuisine."
          />

          <CuisineCard
            name="Arabic"
            image="/images/cuisines/cusines/arabic.jpg"
            description="Experience aromatic dishes and traditional Arabic flavors."
          />

        </div>

      </section>


      {/* CATEGORIES */}
      <section className="category-section">

        <h2>Explore Categories</h2>

        <div className="category-grid">

          {/* DIETARY CATEGORY */}

          <CategoryCard
            name="Vegetarian"
            image="/images/categories/vegetarian.png"
            description="Delicious recipes made with fresh vegetarian ingredients."
            type="category"
          />

          <CategoryCard
            name="Non-Vegetarian"
            image="/images/categories/non-veg.png"
            description="Explore flavorful recipes featuring meat and other ingredients."
            type="category"
          />


          {/* MEAL CATEGORY */}

          <CategoryCard
            name="Breakfast"
            image="/images/categories/breakfast.png"
            description="Start your day with delicious breakfast recipes."
            type="meal"
          />

          <CategoryCard
            name="Lunch"
            image="/images/categories/lunch.png"
            description="Discover satisfying recipes perfect for lunch."
            type="meal"
          />

          <CategoryCard
            name="Dinner"
            image="/images/categories/dinner.png"
            description="Enjoy delicious dishes for a perfect dinner."
            type="meal"
          />

        </div>

      </section>


      {/* FEATURED RECIPES */}
      <section className="featured-section">

        <h2>Featured Recipes</h2>

        <RecipeGrid recipes={featuredRecipes} />

      </section>

    </div>
  );
}

export default Home;