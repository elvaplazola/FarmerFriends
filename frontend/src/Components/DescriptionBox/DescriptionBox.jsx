import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Features</div>
        <div className="descriptionbox-nav-box-fade">Reviews(10)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          A hub for farmers to trade and advertise their farm-fresh goods with
          other farms. Seasonal fruits and veggies. Get in touch with your
          farming community!
        </p>
        <p>
          Merchandise, Livestock, produce & supplies has its own page and
          accompanying information.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
