import React from "react";
import "./Projects.css";

const Projects = ({ language }) => {
  const texts = {
    en: {
      title: "Projects",
      description:
        "Here you will find some of the personal and client projects that I created, with each project containing its own case study.",
    },
    es: {
      title: "Proyectos",
      description:
        "Aquí encontrarás algunos de los proyectos personales y de clientes que he creado, cada uno con su propio estudio de caso.",
    },
  };

  const t = texts[language];

  return (
    <section className="projects">
      <h1 id="projects">{t.title}</h1>
      <p>{t.description}</p>
      <div className="flex-container">
        <div className="preview">
          <h2>Picture</h2>
          {/* Replace with project image or carousel */}
        </div>
        <div className="case">
          <h2>Case</h2>
          {/* Replace with project case study details */}
        </div>
      </div>
    </section>
  );
};

export default Projects;