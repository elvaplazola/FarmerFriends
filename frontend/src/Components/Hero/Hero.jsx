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
      <div class="container" className="mantra">
        <p>
            Farmer Friend: Your One-Stop Shop for Premium Farm Supplies,
            Livestock and Produce.
          </p>    
         </div>
      <div class="container"className="hero-left">
      <SearchBar/>=
         <div class="container" className="mantra-ext">
          <p>
            Explore our vast selection, backed by a commitment to quality and
            customer satisfaction. <br />
            Your thriving farm begins here at Farmer Friend – where agriculture
            meets excellence.
          </p>
          </div>
        <h2 className="hero-left-text">New Items in Stock!</h2>
          <div class="container" className="hand-hand-icon" id="hand-hand-icon">
            <p>
              Fresh! 
               </p>
              <img class="container" src={basket} alt="basket" id="basket" />
          </div>
      </div>

      <div class="container" className="hero-right">
        <img src={cow2} alt="cow" class="img-fluid" id="cow"/>
          </div>
          <div class="container" className="hero-latest-btn">
          <div>Latest Arrivals</div>
          <img src={arrow} alt="" />
        </div>
        </div>
      );
};

export default Hero;