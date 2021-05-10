import React, { useEffect, useState } from "react";
import star from "../img/star.png";

const Nominations = (props) => {
  const { nominee } = props;
  const [nomineeData, setNomineeData] = useState({});
  const genre =
    typeof nomineeData.Genre === "string"
      ? nomineeData.Genre.split(",")[0]
      : "";

  useEffect(async () => {
    try {
      const url = `https://www.omdbapi.com/?i=${nominee}&apikey=92b81fc0`;
      const res = await fetch(url);
      const data = await res.json();
      setNomineeData({ ...data });
    } catch (err) {
      console.error(err);
    }
  }, []);
  return (
    <div className="nominationCard">
      <img className="nomineePoster" src={nomineeData.Poster} alt="" />
      <div className="nomineeInfo">
        <h3>{nomineeData.Title}</h3>
        <p className="movie-info">{`${nomineeData.Year} • ${genre}`}</p>
        <p className="movie-rating">
          <img src={star} alt="" />
          <span>{nomineeData.imdbRating}</span>
        </p>
      </div>
      <button
        className="removeNominee"
        id={nomineeData.imdbID}
        onClick={(e) => {
          props.onClick(e.target.id);
        }}
      ></button>
    </div>
  );
};

export default Nominations;
