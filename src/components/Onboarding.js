import React from "react";
import logo from "../img/logo.png";
import shapes from "../img/shapes.png";

const Onboarding = () => {
  return (
    <div className="container">
      <img className="logo" src={logo} alt="logo" />
      <div className="onboarding">
        <h1>Lorem Ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac sit
          tristique nam tortor rhoncus dignissim interdum id. Feugiat lorem
          adipiscing.
        </p>
        <button>Get Started</button>
      </div>
      <div className="shapes">
        <img src={shapes} />
      </div>
    </div>
  );
};

export default Onboarding;
