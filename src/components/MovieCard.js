import React, { useState, useEffect } from "react";
import star from "../img/star.png";

const MovieCard = (props) => {
  const { movie } = props;
  let [movieData, setMovieData] = useState({});
  useEffect(async () => {
    try {
      const url = `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=92b81fc0`;
      const res = await fetch(url);
      const data = await res.json();
      setMovieData({ ...data });
    } catch (err) {
      console.error(err);
    }
  }, [movie.imdbID]);

  return (
    <div className="movie-card">
      <div className="movie-image">
        <img src={movieData.Poster} alt="" />
        <button
          className="nominateSmallBtn"
          onClick={(e) => props.onClick(e.target.id)}
          id={movie.imdbID}
        >
          +
        </button>
      </div>
      <h3 className="movie-title">{movieData.Title}</h3>
      <p className="movie-info">{`${movieData.Year} • ${
        movieData.Genre.split(",")[0]
      }`}</p>
      <p className="movie-rating">
        <img src={star} alt="" />
        <span>{movieData.imdbRating}</span>
      </p>
    </div>
  );
};

export default MovieCard;
