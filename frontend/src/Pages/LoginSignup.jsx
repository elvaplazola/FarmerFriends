import React from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign-Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Proceed</button>
        <p className="loginsignup-login">
          Join us! <span>Login here!</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>
            Signup terms and policy is governed by Farmer Friends & Team 3
            policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
