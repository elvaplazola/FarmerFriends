import React from "react";
import "./Offers.css";
import exclusive from "../Assets/exclusive.jpg";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Featured</h1>
        <h1>Farmer supplies in stock</h1>
        <p>While inventory lasts</p>
        <button>Reserve Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive} alt="" />
      </div>
    </div>
  );
};

export default Offers;
