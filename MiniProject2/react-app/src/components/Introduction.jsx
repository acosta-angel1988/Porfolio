import React from "react";
import mainImage from "../assets/Images/frontImage.png";
import githubIcon from "../assets/Images/icons8-github-48.png";
import gmailIcon from "../assets/Images/icons8-gmail-48.png";
import linkedinIcon from "../assets/Images/icons8-linkedin-48.png";
import scrollIcon from "../assets/Images/icons8-scroll-down-64.png";
import "./Introduction.css";

const Introduction = ({ language }) => {
  const texts = {
    en: {
      welcome: "Welcome",
      intro: "My name is Angel Acosta, I'm a front-end developer based in San Antonio, TX.",
      githubAlt: "GitHub",
      gmailAlt: "Gmail",
      linkedinAlt: "LinkedIn",
      scrollAlt: "Scroll down",
    },
    es: {
      welcome: "Bienvenido",
      intro: "Mi nombre es Angel Acosta, soy un desarrollador front-end basado en San Antonio, TX.",
      githubAlt: "GitHub",
      gmailAlt: "Gmail",
      linkedinAlt: "LinkedIn",
      scrollAlt: "Desplazar hacia abajo",
    },
  };

  const t = texts[language];

  // Example links, replace with your actual URLs or props
  const githubUrl = "https://github.com/yourusername";
  const gmailUrl = "mailto:your.email@example.com";
  const linkedinUrl = "https://linkedin.com/in/yourprofile";

  return (
    <div className="intro">
      <h1 id="home">{t.welcome}</h1>
      <p>{t.intro}</p>
      <img src={mainImage} alt="Main" className="mainImage" />
      <div className="socialMedia">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.githubAlt}
        >
          <img src={githubIcon} alt={t.githubAlt} />
        </a>
        <a
          href={gmailUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.gmailAlt}
        >
          <img src={gmailIcon} alt={t.gmailAlt} />
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.linkedinAlt}
        >
          <img src={linkedinIcon} alt={t.linkedinAlt} />
        </a>
      </div>
      <div className="scrollDown" />
      <img src={scrollIcon} alt={t.scrollAlt} />
    </div>
  );
};

export default Introduction;