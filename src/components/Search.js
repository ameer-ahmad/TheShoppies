import React, { useState } from "react";
import logo from "../img/logo.png";
import searchIcon from "../img/search.png";

const Search = () => {
  // State for search results
  const [query, setQuery] = useState("");
  // State for movies
  const [movies, setMovies] = useState([]);

  const searchQueries = async (e) => {
    setQuery(e.target.value);

    const url = `http://www.omdbapi.com/?s=${query}&apikey=92b81fc0`;

    try {
      const res = await fetch(url);
      const movies = await res.json();
      console.log(movies);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="searchContainer">
      <img className="logo" src={logo} alt="logo" />
      <div class="input-wrapper">
        <img src={searchIcon} />
        <input
          name="query"
          type="text"
          placeholder="Search for a Movie..."
          value={query}
          onChange={searchQueries}
        />
      </div>
    </div>
  );
};

export default Search;
