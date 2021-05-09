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

  let numNominees = nominees.length;

  const searchQueries = async (e) => {
    e.preventDefault();

    const url = `http://www.omdbapi.com/?s=${query}&apikey=92b81fc0`;

    try {
      const res = await fetch(url);
      const movieInfo = await res.json();
      setMovies(movieInfo.Search);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteNominee = (id) => {
    if (nominees.length === 1 && nominees[0] === id) {
      setNominees([]);
    } else {
      let noms = nominees.filter((nom) => nom !== id);
      setNominees([noms]);
    }
    console.log(nominees[0]);
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
        {nominees.length > 0
          ? nominees.map((nominee) => (
              <Nominations
                nominees={nominees}
                nominee={nominee}
                key={nominee}
                onClick={deleteNominee}
              />
            ))
          : ""}
        <button className={numNominees === 5 ? "hide" : "addNominees"}>
          Add{" "}
          <span style={{ color: "rgba(242, 242, 242, 0.78)" }}>
            {5 - numNominees}
          </span>{" "}
          Movies
        </button>
        <button className={numNominees === 5 ? "nominateMovies" : "hide"}>
          ★ Nominate
        </button>
      </div>
    </>
  );
};

export default Search;
