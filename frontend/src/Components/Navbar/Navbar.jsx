import { React, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.jpg";
import cart_icon from "../Assets/cart_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="farmer friends logo" />
        {/*<p>Farmer</p> */}
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          Shop{menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("livestock");
          }}
        >
          Livestock{menu === "livestock" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("produce");
          }}
        >
          Produce{menu === "produce" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("supplies");
          }}
        >
          Supplies{menu === "supplies" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="cart icon" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
