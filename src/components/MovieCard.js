import React, { useState, useEffect } from "react";

const MovieCard = ({ movie }) => {
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
  });

  return (
    <div className="movie-card">
      <div className="movie-image">
        <img src={movieData.Poster} alt="" />
        <button className="nominateSmallBtn">+</button>
      </div>
      <h3 className="movie-title">{movieData.Title}</h3>
      <p className="movie-info">{`${movieData.Year} • ${movieData.Genre}`}</p>
      <p className="movie-rating"></p>
    </div>
  );
};

export default MovieCard;
