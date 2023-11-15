import React from "react";
import "./Hero.css";
//import hand from "../Assets/handy.png";
import basket from "../Assets/basket3.png";
import arrow from "../Assets/arrow.png";
//import cow from "../Assets/cow.jpg";
import cow2 from "../Assets/cow3.jpg";
import SearchBar from "../Searchbox/SearchBar";
import data from "../Assets/all_prod.json";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div className="mantra">
          <SearchBar data={data} />
          <p>
            Farmer Friend: Your One-Stop Shop for Premium Farm Supplies,
            Livestock and Equipment.
          </p>
          <p>
            Explore our vast selection, backed by a commitment to quality and
            customer satisfaction. <br />
            Your thriving farm begins here at Farmer Friend – where agriculture
            meets excellence.
          </p>
        </div>
        <h2>New Items in Stock!</h2>
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
