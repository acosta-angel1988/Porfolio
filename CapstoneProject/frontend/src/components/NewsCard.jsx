import React from "react";
import "./NewsCard.css";

const NewsCard = ({ title, description, link, image }) => {
  return (
    <div className="news-card">
      {image && <img src={image} alt={title} />}
      
      <div className="news-content">
        <h2>{title || "Untitled Article"}</h2>
        <p>{description || "No description available."}</p>
        
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More →
          </a>
        )}
      </div>
    </div>
  );
};

export default NewsCard;