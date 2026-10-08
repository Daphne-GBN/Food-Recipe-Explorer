import React from "react";

function About() {
  return (
    <div className="about-page">

      {/* Page Header */}
      <section className="about-header">
        <h1>About Savorly</h1>

        <p>
          Discover delicious recipes and explore flavors
          from cuisines around the world.
        </p>
      </section>

      {/* About Content */}
      <section className="about-content">

        <h2>About Our Application</h2>

        <p>
          Savorly is a recipe discovery application designed
          to help users explore a variety of food options
          across different cuisines.
        </p>

        <p>
          Recipes are organized by cuisine, dietary preference,
          and meal category, making it easier to discover the
          perfect dish for any occasion.
        </p>

        <p>
          Explore recipes, search for dishes, save your favorites,
          and discover new flavors with Savorly.
        </p>

      </section>

    </div>
  );
}

export default About;