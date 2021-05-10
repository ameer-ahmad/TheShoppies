import React from "react";
import logo from "../img/logo.png";
import shapes from "../img/shapes.png";

const Onboarding = () => {
  const start = () => {
    const splashPage = document.querySelector(".container");
    const main = document.querySelector(".main");
    splashPage.classList.add("hidden");

    setTimeout(() => {
      splashPage.classList.add("visuallyHidden");
      main.classList.remove("visuallyHidden");
    }, 350);
  };

  return (
    <div className="container">
      <img className="logo" src={logo} alt="logo" />
      <div className="onboarding">
        <h1>The Shoppies.</h1>
        <p>
          Shoppies is a web app that makes it easy to nominate your favourite
          movies for The Shoppies.
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
