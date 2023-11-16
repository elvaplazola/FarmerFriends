import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div class="container" className="newsletter">
      <h1>Subscribe for the latest on Farmer Friends</h1>
      <p>Stay informed!</p>
      <div>
        <input class="container" type="email" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
