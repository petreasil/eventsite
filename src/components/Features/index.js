import React from "react";
import Carusel from "./Carusel";
import Timmer from "./Timmer";

const Feature = () => {
  return (
    <div style={{ position: "relative" }}>
      <Carusel />
      <div className="artist_name">
        <div className="wrapper">ARIANA GRANDE</div>
      </div>
      <Timmer />
    </div>
  );
};

export default Feature;
