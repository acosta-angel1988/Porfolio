import React from "react";
import "./Footer.css";

const Footer = ({ language }) => {
  const texts = {
    en: {
      copyright: "© Copyright 2025. Made by Angel A. Acosta.",
    },
    es: {
      copyright: "© Derechos de Autor 2025. Creado por Angel A. Acosta.",
    },
  };

  const t = texts[language];

  return (
    <footer className="footer">
      <div className="container">
        <p>{t.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;