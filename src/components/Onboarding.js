import React from "react";
import logo from "../img/logo.png";
import shapes from "../img/shapes.png";

const Onboarding = () => {
  const start = () => {
    const splashPage = document.querySelector(".container");
    splashPage.classList.add("hidden");
    setTimeout(() => {
      splashPage.classList.add("visuallyHidden");
    }, 350);
  };

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
        <button onClick={start}>Get Started</button>
      </div>
      <div className="shapes">
        <img src={shapes} />
      </div>
    </div>
  );
};

export default Onboarding;
