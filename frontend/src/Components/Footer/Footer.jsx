import React from "react";
import "./Footer.css";
import footerLogo from "../Assets/logo_big.jpg";
import instaLogo from "../Assets/instagram_icon.png";
import pinLogo from "../Assets/pinterest.png";
import whatsapp from "../Assets/whatsapp.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footerLogo} alt="" />
        <p>Farmer Friend</p>
      </div>
      <ul className="footer-links">
        <a
          href="https://github.com/elvaplazola/FarmerFriends/tree/main"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>Company</li>
        </a>
        <Link to="/admin">
          <li>Add Product</li>
        </Link>

        <li>Services</li>
        <li>About</li>
        <a
          href="https://digitalskills.unlv.edu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>Contact</li>
        </a>
      </ul>

      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <a
            href="https://www.instagram.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={instaLogo} alt="" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a
            href="https://www.pinterest.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pinLogo} alt="" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a
            href="https://www.whatsapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsapp} alt="" />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Milestone 3 by Team Farmer Friend for Digital Skills@UNLV 2023</p>
      </div>
    </div>
  );
};

export default Footer;