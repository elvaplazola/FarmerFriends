import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo.jpg";
import cart_icon from "../Assets/cart_icon.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="farmer friends logo" />
        <p>Client</p>
      </div>
      <ul className="nav-menu">
        <li>
          Shop <hr />
        </li>
        <li>Livestock</li>
        <li>Produce</li>
        <li>Supplies</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="cart icon" />
        <div className="nav-cart-count"></div>
      </div>
    </div>
  );
};

export default Navbar;
