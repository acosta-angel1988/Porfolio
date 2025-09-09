import React from "react";
import "./BackgroundAnimation.css";

const BackgroundAnimation = ({ isDarkMode }) => (
  <div className={`wrapper ${isDarkMode ? "dark" : ""}`}>
    <div className="box">
      {[...Array(10)].map((_, i) => (
        <div key={i}></div>
      ))}
    </div>
  </div>
);

export default BackgroundAnimation;