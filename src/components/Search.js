import React from "react";
import logo from "../img/logo.png";
import searchIcon from "../img/search.png";

const Search = () => {
  return (
    <div class="searchContainer">
      <img className="logo" src={logo} alt="logo" />
      <div class="input-wrapper">
        <img src={searchIcon} />
        <input type="text" placeholder="Search for a Movie..." />
      </div>
    </div>
  );
};

export default Search;
