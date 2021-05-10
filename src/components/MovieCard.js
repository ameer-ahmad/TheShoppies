import React, { useState, useEffect } from "react";
import star from "../img/star.png";

const MovieCard = (props) => {
  const { movie, nominees } = props;
  const [movieData, setMovieData] = useState({});
  const genre =
    typeof movieData.Genre === "string" ? movieData.Genre.split(",")[0] : "";

  useEffect(async () => {
    try {
      const url = `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=92b81fc0`;
      const res = await fetch(url);
      const data = await res.json();
      setMovieData({ ...data });
    } catch (err) {
      console.log("error");
    }
  }, [movie.imdbID]);

  return (
    <div className="movie-card">
      <div className="movie-image">
        <img src={movieData.Poster} alt="" />
        <button
          disabled={nominees.includes(movie.imdbID) || nominees.length === 5}
          className={
            !nominees.includes(movie.imdbID) && nominees.length === 5
              ? "disabledBtn"
              : "nominateSmallBtn"
          }
          onClick={(e) => props.onClick(e.target.id)}
          id={movie.imdbID}
        ></button>
      </div>
      <h3 className="movie-title">{movieData.Title}</h3>
      <p className="movie-info">{`${movieData.Year} • ${genre}`}</p>
      <p className="movie-rating">
        <img src={star} alt="" />
        <span>{movieData.imdbRating}</span>
      </p>
    </div>
  );
};

export default MovieCard;
