import { React, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/logo2.png";
import cart_icon from "../Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

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
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("livestock");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/livestock">
            Livestock
          </Link>
          {menu === "livestock" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("produce");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/produce">
            Produce
          </Link>
          {menu === "produce" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("supplies");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/supplies">
            Supplies
          </Link>
          {menu === "supplies" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="cart icon" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
