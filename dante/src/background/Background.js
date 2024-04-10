import React from "react";
import "../styles/background.css";
import logo from "../assets/logo.jpg";

const Background = () => {
  return (
    <div className="background-container">
      <img src={logo} alt="Logo" className="background-image" />
      <div className="shadow-overlay"></div>
    </div>
  );
};

export default Background;



