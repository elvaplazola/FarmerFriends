import React from "react";
import "./Footer.css";
import footerLogo from "../Assets/logo_big.jpg";
import instaLogo from "../Assets/instagram_icon.png";
import pinLogo from "../Assets/pinterest.png";
import whatsapp from "../Assets/whatsapp.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footerLogo} alt="" />
        <p>CUSTOMER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Merchandise</li>
        <li>Services</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instaLogo} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pinLogo} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Milestone 3 by Group 3 @ 2023</p>
      </div>
    </div>
  );
};

export default Footer;
