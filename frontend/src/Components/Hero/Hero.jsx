import React from "react";
import "./Hero.css";
//import hand from "../Assets/handy.png";
import basket from "../Assets/basket3.png";
import arrow from "../Assets/arrow.png";
//import cow from "../Assets/cow.jpg";
import cow2 from "../Assets/cow3.jpg";
import SearchBar from "../Searchbox/SearchBar";

const Hero = () => {
  return (
    <div class="container" className="hero">
      <div class="container"className="hero-left">
      <SearchBar />
        <div class="container" className="mantra">
          <p>
            A hub for farmers to trade and advertise their farm-fresh goods with
            other farms. Seasonal fruits and veggies. Get in touch with your
            farming community!
          </p>
        </div>
        <h2 className="hero-left-text">New Items for Trade!</h2>
        <div>
          <div className="hand-hand-icon" id="hand-hand-icon">
            <p>
              Fresh!
              <img class="container" src={basket} alt="basket" id="basket" />
            </p>
          </div>
          <p>Trading Inventory</p>
          <p>for Farmers</p>
        <div class="container" className="hero-latest-btn">
          <div>Latest Arrivals</div>
          <img src={arrow} alt="" />
        </div>
      </div>
      </div>

      <div class="container" className="hero-right">
        <img src={cow2} alt="cow" class="img-fluid" id="cow"/>
          </div>
        </div>
      );
};

export default Hero;