import React from "react";
import "./AboutMe.css";

const AboutMe = ({ language, isDarkMode }) => {
  const texts = {
    en: {
      title: "About me",
      intro:
        "Here you will find information about me, what I do, and my current skills mostly in terms of programming and technology.",
      backgroundTitle: "Background",
      backgroundP1:
        "I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that lead to the success of the overall product. Check out some of my work in the Projects section.",
      backgroundP2:
        "I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community.",
      backgroundP3:
        "I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.",
      skillsTitle: "My Skills/Qualifications",
      skillsList: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "GitHub",
        "NodeJS",
        "ExpressJS",
        "Python",
        "Security+",
        "Network+",
        "CCNA",
        "Top Secret Clearance",
        "Bilingual (English and Spanish)",
      ],
    },
    es: {
      title: "Acerca de mí",
      intro:
        "Aquí encontrarás información sobre mí, lo que hago y mis habilidades actuales, principalmente en términos de programación y tecnología.",
      backgroundTitle: "Antecedentes",
      backgroundP1:
        "Soy un desarrollador web enfocado en Frontend, construyendo y gestionando el Front-end de sitios web y aplicaciones que conducen al éxito del producto en general. Revisa algunos de mis trabajos en la sección de Proyectos.",
      backgroundP2:
        "También me gusta compartir contenido relacionado con lo que he aprendido durante los años en Desarrollo Web para ayudar a otras personas de la comunidad de desarrolladores.",
      backgroundP3:
        "Estoy abierto a oportunidades laborales donde pueda contribuir, aprender y crecer. Si tienes una buena oportunidad que coincida con mis habilidades y experiencia, no dudes en contactarme.",
      skillsTitle: "Mis habilidades/cualificaciones",
      skillsList: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "GitHub",
        "NodeJS",
        "ExpressJS",
        "Python",
        "Security+",
        "Network+",
        "CCNA",
        "Autorización Top Secret",
        "Bilingüe (Inglés y Español)",
      ],
    },
  };

  const t = texts[language];

  return (
    <div className={`aboutMe ${isDarkMode ? "dark" : ""}`}>
      <div className="aboutmeIntro">
        <h1 id="about">{t.title}</h1>
        <p>{t.intro}</p>
      </div>
      <div className="flex-container">
        <div className="backgroundInfo">
          <h2>{t.backgroundTitle}</h2>
          <p>
            {t.backgroundP1}
            {t.backgroundP2}
            {t.backgroundP3}
          </p>
        </div>
        <div className="skills">
          <h2>{t.skillsTitle}</h2>
          <ul>
            {t.skillsList.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;