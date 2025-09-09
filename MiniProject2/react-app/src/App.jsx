import React, { useState } from "react";
import Header from "./components/Header";
import BackgroundAnimation from "./components/BackgroundAnimation";
import Introduction from "./components/Introduction";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [language, setLanguage] = useState("en");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "es" : "en"));
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`app-container ${isDarkMode ? "dark" : ""}`}>
      <Header
        language={language}
        toggleLanguage={toggleLanguage}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <BackgroundAnimation />
      <Introduction language={language} isDarkMode={isDarkMode} />
      <AboutMe language={language} isDarkMode={isDarkMode} />
      <Projects language={language} isDarkMode={isDarkMode} />
      <ContactForm language={language} isDarkMode={isDarkMode} />
      <Footer language={language} isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;