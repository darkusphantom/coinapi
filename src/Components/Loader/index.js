import React from "react";
import loader from "../../Assets/Img/rolling-cat-cat-rolling.webp";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loading-container">
      <img
        src={loader}
        alt="loader-cat"
        width="100px"
        height="100px"
        loading="lazy"
      />
      <p className="loading-text">Loading...</p>
    </div>
  );
};

export { Loader };
