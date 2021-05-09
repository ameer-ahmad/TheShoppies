import React, { useState, useEffect } from "react";
import star from "../img/star.png";

const MovieCard = ({ movie }) => {
  let [movieData, setMovieData] = useState({});
  let [nominees, setNominees] = useState([]);
  useEffect(async () => {
    try {
      const url = `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=92b81fc0`;
      const res = await fetch(url);
      const data = await res.json();
      setMovieData({ ...data });
    } catch (err) {
      console.error(err);
    }
  });

  const addNominee = (e) => {
    setNominees((prevNominees) => {
      return [...prevNominees, e.target];
    });
    console.log(nominees);
  };

  return (
    <div className="movie-card">
      <div className="movie-image">
        <img src={movieData.Poster} alt="" />
        <button className="nominateSmallBtn" onClick={addNominee}>
          +
        </button>
      </div>
      <h3 className="movie-title">{movieData.Title}</h3>
      <p className="movie-info">{`${movieData.Year} • ${movieData.Genre}`}</p>
      <p className="movie-rating">
        <img src={star} alt="" />
        <span>{movieData.imdbRating}</span>
      </p>
    </div>
  );
};

export default MovieCard;
