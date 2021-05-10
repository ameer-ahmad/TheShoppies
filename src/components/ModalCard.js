import React, { useState, useEffect } from "react";

const ModalCard = ({ nominee }) => {
  const [modalData, setModalData] = useState({});

  useEffect(async () => {
    try {
      const url = `http://www.omdbapi.com/?i=${nominee}&apikey=92b81fc0`;
      const res = await fetch(url);
      const data = await res.json();
      setModalData({ ...data });
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div className="modalNomineeCard">
      <img src={modalData.Poster} />
      <h3>{modalData.Title}</h3>
    </div>
  );
};

export default ModalCard;
