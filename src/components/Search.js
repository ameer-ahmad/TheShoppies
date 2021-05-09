import React, { useState } from "react";
import logo from "../img/bigLogo.png";
import searchIcon from "../img/search.png";
import MovieCard from "./MovieCard";
import Nominations from "./Nominations";

const Search = () => {
  // State for search results
  const [query, setQuery] = useState("");
  // State for movies
  const [movies, setMovies] = useState([]);
  // State for nominees
  const [nominees, setNominees] = useState([]);

  const searchQueries = async (e) => {
    e.preventDefault();

    const url = `http://www.omdbapi.com/?s=${query}&apikey=92b81fc0`;

    try {
      const res = await fetch(url);
      const movieInfo = await res.json();
      setMovies(movieInfo.Search);
      console.log(movies);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="searchContainer">
        <img className="logo" src={logo} alt="logo" />
        <form class="input-wrapper" onSubmit={searchQueries}>
          <img src={searchIcon} />
          <input
            name="query"
            type="text"
            placeholder="Search for a Movie..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </form>
      </div>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard
            movie={movie}
            key={movie.imdbID}
            onClick={(value) =>
              setNominees((prevNominees) => [value, ...prevNominees])
            }
          />
        ))}
      </div>
      <div className="nominations-list">
        <h2>Nominations</h2>
        {nominees.map((nominee) => (
          <Nominations nominee={nominee} key={nominee} />
        ))}
        <button className="addNominees">
          Add <span style={{ color: "rgba(242, 242, 242, 0.78)" }}>(5)</span>{" "}
          Movies
        </button>
      </div>
    </>
  );
};

export default Search;
