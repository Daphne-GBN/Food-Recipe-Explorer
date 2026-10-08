import React, { useState } from "react";

function RecipeForm() {
  const [formData, setFormData] = useState({
    name: "",
    cuisine: "",
    category: "",
    meal: "",
    ingredients: "",
    instructions: "",
    cookingTime: "",
    difficulty: "",
    image: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Recipe submitted:", formData);
  };

  return (
    <form className="recipe-form" onSubmit={handleSubmit}>
      <h2>Add Your Recipe</h2>

      <div className="form-group">
        <label htmlFor="name">Recipe Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="cuisine">Cuisine</label>
        <select
          id="cuisine"
          name="cuisine"
          value={formData.cuisine}
          onChange={handleChange}
          required
        >
          <option value="">Select Cuisine</option>
          <option value="Indian">Indian</option>
          <option value="Chinese">Chinese</option>
          <option value="Western">Western</option>
          <option value="Arabic">Arabic</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Non-Vegetarian">Non-Vegetarian</option>
          <option value="Baked">Baked</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="meal">Meal</label>
        <select
          id="meal"
          name="meal"
          value={formData.meal}
          onChange={handleChange}
          required
        >
          <option value="">Select Meal</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="ingredients">Ingredients</label>
        <textarea
          id="ingredients"
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          placeholder="Enter ingredients..."
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="instructions">Cooking Instructions</label>
        <textarea
          id="instructions"
          name="instructions"
          value={formData.instructions}
          onChange={handleChange}
          placeholder="Enter cooking instructions..."
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="cookingTime">Cooking Time</label>
        <input
          type="text"
          id="cookingTime"
          name="cookingTime"
          value={formData.cookingTime}
          onChange={handleChange}
          placeholder="e.g. 30 mins"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="difficulty">Difficulty</label>
        <select
          id="difficulty"
          name="difficulty"
          value={formData.difficulty}
          onChange={handleChange}
          required
        >
          <option value="">Select Difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="image">Image URL</label>
        <input
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Enter image URL"
        />
      </div>

      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default RecipeForm;