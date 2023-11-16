import React, { useContext } from "react";
import "./ProductDisplay.css";
import star1 from "../Assets/star.png";
import star2 from "../Assets/star2.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productDisplay">
      <div className="productDisplay-left">
        <div className="productDisplay-img">
          <img className="productDisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productDisplay-right">
        <h1>{product.name}</h1>
        <div className="productDisplay-right-star">
          <img src={star1} alt="" />
          <img src={star1} alt="" />
          <img src={star1} alt="" />
          <img src={star1} alt="" />
          <img src={star2} alt="" />
          <p>(10)</p>
        </div>
        <div className="productDisplay-right-prices">
          <div className="productDisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productDisplay-right-price-new">
            ${product.new_price}
          </div>
          <div className="productDisplay-right-description">
            FarmerFriend@2023
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDisplay;
