import React from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-bar">

      <input
        type="text"
        placeholder="Search recipes or ingredients..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      <button type="button">
        Search
      </button>

    </div>
  );
}

export default SearchBar;