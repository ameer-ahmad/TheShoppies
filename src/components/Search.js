import React, { useState, useEffect } from "react";
import logo from "../img/bigLogo.png";
import searchIcon from "../img/search.png";
import MovieCard from "./MovieCard";
import Nominations from "./Nominations";
import ModalCard from "./ModalCard";

const Search = () => {
  // State for search results
  const [query, setQuery] = useState("");
  // State for movies
  const [movies, setMovies] = useState([]);
  // State for nominees
  const [nominees, setNominees] = useState([]);
  // State for modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // State for nominated
  const [isNominated, setIsNominated] = useState(false);

  let numNominees = nominees.length;

  const searchQueries = async (e) => {
    e.preventDefault();

    const url = `https://www.omdbapi.com/?s=${query}&apikey=92b81fc0`;

    try {
      const res = await fetch(url);
      const movieInfo = await res.json();
      setMovies(movieInfo.Search);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteNominee = (id) => {
    console.log(id);
    console.log(nominees);
    if (nominees.length === 1 && nominees[0] === id) {
      setNominees([]);
    } else {
      let noms = nominees.filter((nom) => nom !== id);
      console.log(noms);
      setNominees(noms);
    }
  };

  useEffect(() => {
    if (nominees.length === 4) {
      return () => {
        setModalIsOpen((prevModal) => !prevModal);
      };
    }
  }, [nominees]);

  const share = (e) => {
    if (navigator.share) {
      navigator
        .share({
          title: "My Shoppies Nominees",
          url: "",
        })
        .then(() => {
          console.log("Thanks for sharing!");
        })
        .catch(console.error);
    }
  };

  return (
    <div className={modalIsOpen ? "blur" : "main"}>
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
            nominees={nominees}
            key={movie.imdbID}
            onClick={(value) =>
              setNominees((prevNominees) => [value, ...prevNominees])
            }
          />
        ))}
      </div>
      <div className="nominations-list">
        <h2>Nominations</h2>
        <button className={numNominees === 5 ? "hide" : "addNominees"}>
          Add{" "}
          <span style={{ color: "rgba(242, 242, 242, 0.78)" }}>
            ({5 - numNominees})
          </span>{" "}
          Movies
        </button>
        <button
          onClick={() => setModalIsOpen((prevModal) => !prevModal)}
          className={numNominees === 5 ? "nominateMovies" : "hide"}
        >
          ★ Nominate
        </button>
        {nominees.length > 0
          ? nominees.map((nominee) => (
              <Nominations
                nominee={nominee}
                key={nominee}
                onClick={deleteNominee}
              />
            ))
          : ""}
      </div>
      {modalIsOpen ? (
        <div className="modal">
          <h2>Nominate your movies.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere id
            consequatur quae illo quod ipsa!
          </p>
          <div className="modalNominees">
            {nominees.map((nominee) => (
              <ModalCard nominee={nominee} key={nominee} />
            ))}
          </div>
          <div className="modalBtns">
            <button
              onClick={share}
              disabled={!isNominated}
              className="shareModalBtn"
            >
              Share
            </button>
            <button
              disabled={isNominated}
              className="nominateModalBtn"
              onClick={() =>
                setIsNominated((prevIsNominated) => !prevIsNominated)
              }
            >
              Nominate for Shoppie
            </button>
          </div>
          <button
            className="closeModal"
            onClick={() => setModalIsOpen((prevModal) => !prevModal)}
          ></button>
        </div>
      ) : null}
    </div>
  );
};

export default Search;
