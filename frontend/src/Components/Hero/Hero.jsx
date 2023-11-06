import React from "react";
import "./Hero.css";
//import hand from "../Assets/handy.png";
import basket from "../Assets/basket3.png";
import arrow from "../Assets/arrow.png";
//import cow from "../Assets/cow.jpg";
import cow2 from "../Assets/cow3.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div className="mantra">
          <p>
            A hub for farmers to trade and advertise their farm-fresh goods with
            other farms. Seasonal fruits and veggies. Get in touch with your
            farming community!
          </p>
        </div>
        <h2>New Items for Trade!</h2>
        <div>
          <div className="hand-hand-icon">
            <p>
              Fresh!
              <img src={basket} alt="" />
            </p>
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
        <img src={cow2} alt="" />
      </div>
    </div>
  );
};

export default Hero;
