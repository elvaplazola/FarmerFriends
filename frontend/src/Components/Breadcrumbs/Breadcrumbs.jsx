import React from "react";
import "./Breadcrumbs.css";
import arrow2 from "../Assets/arrow2.png";

const Breadcrumbs = (props) => {
  const { product } = props;
  return (
    <div className="breadcrumbs">
      HOME <img src={arrow2} alt="" />
      SHOP <img src={arrow2} alt="" />
      {product.category} <img src={arrow2} alt="" />
      {product.name}
    </div>
  );
};

export default Breadcrumbs;
