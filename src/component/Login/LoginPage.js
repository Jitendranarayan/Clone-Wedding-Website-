import React, { useState } from "react";
import "./LoginPage.css";
import Navbar from "../Navbar/Navbar";
// import image from '../Images/wallpaper.jpg'
const LoginPage = () => {
  const [popupStyle, showPopup] = useState("hide");
  const popup = () => {
    showPopup("login-popup");
    setTimeout(() => showPopup("hide"), 3000);
  };
  return (
    <>
      <Navbar />
      <div className="cover1">
        <div className="container">
          <div className="row">
            <div className="cover">
              <h1>Login</h1>
              <input type="text" placeholder="username" />
              <input type="password" placeholder="Password" />
              <div className="login-button" onClick={popup}>
                Login
              </div>
              <div className={popupStyle}>
                <h3>Login Failed</h3>
                <p>Username or Password incorrect</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="touch-container">
        <div className="bold">
          <h1>Get in touch</h1>
        </div>
        <h2>mail@domain.com</h2>
        <p>
          Feel free to write us. We’ll consider all suggestions, ideas and
          projects.
        </p>
      </div>
      <div className="footer">
        <hr />
        <p>Copyright @ Ajileminds </p>
      </div>
    </>
  );
};

export default LoginPage;
