import React, { useEffect, useState } from "react";
import star from "../img/star.png";

const Nominations = (props) => {
  const { nominee } = props;
  const [movieData, setMovieData] = useState({});
  const genre =
    typeof movieData.Genre === "string" ? movieData.Genre.split(",")[0] : "";

  useEffect(async () => {
    try {
      const url = `http://www.omdbapi.com/?i=${nominee}&apikey=92b81fc0`;
      const res = await fetch(url);
      const data = await res.json();
      setMovieData({ ...data });
    } catch (err) {
      console.error(err);
    }
  }, []);
  return (
    <div className="nominationCard">
      <img className="nomineePoster" src={movieData.Poster} alt="" />
      <div className="nomineeInfo">
        <h3>{movieData.Title}</h3>
        <p className="movie-info">{`${movieData.Year} • ${genre}`}</p>
        <p className="movie-rating">
          <img src={star} alt="" />
          <span>{movieData.imdbRating}</span>
        </p>
      </div>
      <button
        className="removeNominee"
        onClick={(e) => {
          props.onClick(nominee);
        }}
      >
        X
      </button>
    </div>
  );
};

export default Nominations;
