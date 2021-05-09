import React, { useEffect, useState } from "react";
import star from "../img/star.png";

const Nominations = ({ nominee }) => {
  let [movieData, setMovieData] = useState({});

  useEffect(async () => {
    try {
      const url = `http://www.omdbapi.com/?i=${nominee}&apikey=92b81fc0`;
      const res = await fetch(url);
      const data = await res.json();
      setMovieData({ ...data });
    } catch (err) {
      console.error(err);
    }
  });

  return (
    <div className="nominationCard">
      <img className="nomineePoster" src={movieData.Poster} alt="" />
      <div className="nomineeInfo">
        <h3>{movieData.Title}</h3>
        <p className="movie-info">{`${movieData.Year} • ${
          movieData.Genre.split(",")[0]
        }`}</p>
        <p className="movie-rating">
          <img src={star} alt="" />
          <span>{movieData.imdbRating}</span>
        </p>
      </div>
      <button className="removeNominee">X</button>
    </div>
  );
};

export default Nominations;
