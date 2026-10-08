import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import RecipeGrid from "../components/RecipeGrid";

import recipes from "../data/recipes";

function Recipes() {
  const [searchParams] = useSearchParams();

  /* ================================
     SEARCH
  ================================= */

  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || ""
  );


  /* ================================
     FILTERS
  ================================= */

  const [cuisine, setCuisine] = useState(
    searchParams.get("cuisine") || ""
  );

  const [category, setCategory] = useState(
    searchParams.get("category") || ""
  );

  const [meal, setMeal] = useState(
    searchParams.get("meal") || ""
  );

  const [difficulty, setDifficulty] = useState("");

  const [cookingTime, setCookingTime] = useState("");


  /* ================================
     UPDATE FILTERS FROM URL
  ================================= */

  useEffect(() => {
    setSearchTerm(searchParams.get("search") || "");

    setCuisine(
      searchParams.get("cuisine") || ""
    );

    setCategory(
      searchParams.get("category") || ""
    );

    setMeal(
      searchParams.get("meal") || ""
    );

  }, [searchParams]);


  /* ================================
     FILTER RECIPES
  ================================= */

  const filteredRecipes = recipes.filter((recipe) => {

    /* SEARCH */

    const search = searchTerm.toLowerCase();

    const matchesSearch =
      recipe.name.toLowerCase().includes(search) ||

      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(search)
      );


    /* CUISINE */

    const matchesCuisine =
      cuisine === "" ||
      recipe.cuisine === cuisine;


    /* CATEGORY */

    const matchesCategory =
      category === "" ||
      recipe.category === category;


    /* MEAL */

    const matchesMeal =
      meal === "" ||
      recipe.meal === meal;


    /* DIFFICULTY */

    const matchesDifficulty =
      difficulty === "" ||
      recipe.difficulty === difficulty;


    /* COOKING TIME */

    let matchesCookingTime = true;

    const time = parseInt(recipe.cookingTime);


    if (cookingTime === "Under 30 mins") {

      matchesCookingTime = time < 30;

    }


    if (cookingTime === "30-60 mins") {

      matchesCookingTime =
        time >= 30 && time <= 60;

    }


    if (cookingTime === "Over 60 mins") {

      matchesCookingTime = time > 60;

    }


    return (
      matchesSearch &&
      matchesCuisine &&
      matchesCategory &&
      matchesMeal &&
      matchesDifficulty &&
      matchesCookingTime
    );

  });


  /* ================================
     PAGE
  ================================= */

  return (
    <div className="recipes-page">


      {/* HEADER */}

      <section className="recipes-header">

        <h1>Explore Recipes</h1>

        <p>
          Discover delicious recipes from different cuisines
          and find the perfect dish for every occasion.
        </p>

      </section>


      {/* SEARCH */}

      <section className="recipes-search">

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

      </section>


      {/* FILTERS */}

      <section className="recipes-filters">

        <FilterBar
          cuisine={cuisine}
          setCuisine={setCuisine}

          category={category}
          setCategory={setCategory}

          meal={meal}
          setMeal={setMeal}

          difficulty={difficulty}
          setDifficulty={setDifficulty}

          cookingTime={cookingTime}
          setCookingTime={setCookingTime}
        />

      </section>


      {/* RESULTS */}

      <section className="all-recipes">

        <h2>
          {filteredRecipes.length} Recipes Found
        </h2>


        {filteredRecipes.length > 0 ? (

          <RecipeGrid
            recipes={filteredRecipes}
          />

        ) : (

          <div className="no-recipes">

            <p>
              No recipes found.
            </p>

            <p>
              Try changing your search or filters.
            </p>

          </div>

        )}

      </section>

    </div>
  );
}

export default Recipes;