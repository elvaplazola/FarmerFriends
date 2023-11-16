import React from "react";
import "./CSS/Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <h1>Sign-In</h1>
        <div className="login-fields">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Proceed</button>
        <p className="login-login">
          Not yet registered?{" "}
          <span>
            <a href="/LoginSignup">Register here!</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;