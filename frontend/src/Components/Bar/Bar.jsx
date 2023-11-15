import React from "react";
import "./Bar.css";
import addproduct from "../Assets/Prod.svg";
import listprod from "../Assets/Prod_l.svg";
import { Link } from "react-router-dom";

const Bar = () => {
  return (
    <div className="bar">
      <Link to="/addproduct" style={{ textDecoration: "none" }}>
        <div className="bar-item">
          <img src={addproduct} alt="" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to="/listproduct" style={{ textDecoration: "none" }}>
        <div className="bar-item">
          <img src={listprod} alt="" />
          <p>Inventory</p>
        </div>
      </Link>
    </div>
  );
};

export default Bar;
