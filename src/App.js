import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import RecipeDetails from "./pages/RecipeDetails";
import Favorites from "./pages/Favorites";
import SavedRecipes from "./pages/SavedRecipes";
import AddRecipe from "./pages/AddRecipe";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <main>
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/recipes" element={<Recipes />} />

          <Route
            path="/recipes/:id"
            element={<RecipeDetails />}
          />

          <Route
            path="/favorites"
            element={<Favorites />}
          />

          <Route
            path="/saved-recipes"
            element={<SavedRecipes />}
          />

          <Route
            path="/add-recipe"
            element={<AddRecipe />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

        </Routes>
      </main>

      <Footer />

    </BrowserRouter>
  );
}

export default App;