import React from "react";
import "./Hero.css";
import hand from "../Assets/handy.png";
import arrow from "../Assets/arrow.png";
import cow from "../Assets/cow.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Items for Trade</h2>
        <div>
          <div className="hand-hand-icon">
            <p>new</p>
            <img src={hand} alt="" />
          </div>
          <p>Trading Inventory</p>
          <p>for Farmers</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Arrivals</div>
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={cow} alt="" />
      </div>
    </div>
  );
};

export default Hero;
