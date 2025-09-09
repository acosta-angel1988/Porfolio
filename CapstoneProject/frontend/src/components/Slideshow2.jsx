import React from "react";
import "./Slideshow2.css";

const Slideshow2 = () => {
  const images2 = [
    './Images/cat1.jpg',
    './Images/dog1.jpg',
    './Images/dog2.jpg',
    './Images/cat2.jpg',
    './Images/dog3.jpg',
  ];

  // Duplicate images for smooth looping
  const loopImages = images2.concat(images2);

  return (
    <div className="slideshow2-container">
      <div className="slideshow2-track">
        {loopImages.map((src, index) => (
          <div className="slide2" key={index}>
            <img src={src} alt={`slide-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow2;