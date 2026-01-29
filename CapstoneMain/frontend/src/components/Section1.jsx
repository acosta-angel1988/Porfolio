import React from 'react';
import './Section1.css';

const Section1 = () => {
  const dogVideo = './videos/dog_background.mp4';

  return (
    <div className="section1">
      <div className="text-overlay">
        <h1>Adopt a Pet</h1>
        <p>Dogs and Cats</p>
      </div>
      <div className="video-container">
        <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
          <source src={dogVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Section1;