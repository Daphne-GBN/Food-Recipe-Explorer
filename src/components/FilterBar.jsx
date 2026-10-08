import React from "react";

function FilterBar({
  cuisine,
  setCuisine,
  category,
  setCategory,
  meal,
  setMeal,
  difficulty,
  setDifficulty,
  cookingTime,
  setCookingTime,
}) {
  return (
    <div className="filter-bar">

      {/* Cuisine */}
      <div className="filter-group">
        <label htmlFor="cuisine">
          Cuisine
        </label>

        <select
          id="cuisine"
          value={cuisine}
          onChange={(event) => setCuisine(event.target.value)}
        >
          <option value="">
            All Cuisines
          </option>

          <option value="Indian">
            Indian
          </option>

          <option value="Chinese">
            Chinese
          </option>

          <option value="Western">
            Western
          </option>

          <option value="Arabic">
            Arabic
          </option>
        </select>
      </div>

      {/* Category */}
      <div className="filter-group">
        <label htmlFor="category">
          Category
        </label>

        <select
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">
            All Categories
          </option>

          <option value="Vegetarian">
            Vegetarian
          </option>

          <option value="Non-Vegetarian">
            Non-Vegetarian
          </option>

          <option value="Baked">
            Baked
          </option>
        </select>
      </div>

      {/* Meal */}
      <div className="filter-group">
        <label htmlFor="meal">
          Meal
        </label>

        <select
          id="meal"
          value={meal}
          onChange={(event) => setMeal(event.target.value)}
        >
          <option value="">
            All Meals
          </option>

          <option value="Breakfast">
            Breakfast
          </option>

          <option value="Lunch">
            Lunch
          </option>

          <option value="Dinner">
            Dinner
          </option>
        </select>
      </div>

      {/* Difficulty */}
      <div className="filter-group">
        <label htmlFor="difficulty">
          Difficulty
        </label>

        <select
          id="difficulty"
          value={difficulty}
          onChange={(event) => setDifficulty(event.target.value)}
        >
          <option value="">
            All Levels
          </option>

          <option value="Easy">
            Easy
          </option>

          <option value="Medium">
            Medium
          </option>

          <option value="Hard">
            Hard
          </option>
        </select>
      </div>

      {/* Cooking Time */}
      <div className="filter-group">
        <label htmlFor="cookingTime">
          Cooking Time
        </label>

        <select
          id="cookingTime"
          value={cookingTime}
          onChange={(event) => setCookingTime(event.target.value)}
        >
          <option value="">
            Any Time
          </option>

          <option value="Under 30 mins">
            Under 30 mins
          </option>

          <option value="30-60 mins">
            30–60 mins
          </option>

          <option value="Over 60 mins">
            Over 60 mins
          </option>
        </select>
      </div>

    </div>
  );
}

export default FilterBar;