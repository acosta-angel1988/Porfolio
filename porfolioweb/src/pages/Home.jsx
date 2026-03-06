import React from "react";
import "./Home.css";

import MainImage from "../assets/Images/MainImage.png";
import JS from "../assets/Images/js.png";
import reactIcon from "../assets/Images/atom.png";
import bootstrap_Icon from "../assets/Images/bootstrap.png";
import cssIcon from "../assets/Images/css3.png";
import databaseIcon from "../assets/Images/database-storage.png";
import figmaIcon from "../assets/Images/figma.png";
import htmlIcon from "../assets/Images/html-5.png";
import mysqlIcon from "../assets/Images/mysql.png";
import nodeIcon from "../assets/Images/nodejs.png";
import pythonIcon from "../assets/Images/python.png";


import Header from "../components/Header";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div className="wrapper">
    <Header/>
      {/*Introduction Image*/}
      <div>
        <img src={MainImage} alt="Main" className="mainImage" />
      </div>
      
      {/* Introduction*/}
      <div className="Introduction">
        <h1>HELLO, I'M ANGEL ACOSTA</h1>
        <div class="intro_info">
          <p>  I am a motivated Junior Software Developer with experience in building
          modern, responsive, and scalable web applications. I specialize in
          full-stack development using React, Node.js, and database-driven
          architectures. With a background in IT support and cybersecurity, I
          bring strong problem-solving skills, attention to detail, and a
          security-focused mindset to every project. I enjoy learning new
          technologies, solving complex problems, and building applications that
          deliver real value to users</p>
        </div>
      </div>
      

      {/*AbouT Me */}
      <div className="AboutMe">
        <h1>ABOUT ME</h1>
        <div className="Description">
          <div className="MeInfo">
            <h2>Degrees/Certifications</h2>
            <lu>
              <li>Security+</li>
              <li>Network+</li>
              <li>Bachelor Computer Science</li>
              <li>Master Network and Security</li>
              <li>Certified Software Engineering Professional(CSEP) </li>
            </lu>
          </div>

          <div className="Skills_wrapper">
            <h2>SKILLS</h2>
            <div className="skill_List">
              <img src={JS} alt="JS" className="skill_Icon" />
              <img src={reactIcon} alt="JS" className="skill_Icon" />
              <img src={bootstrap_Icon} alt="JS" className="skill_Icon" />
              <img src={cssIcon} alt="JS" className="skill_Icon" />
              <img src={databaseIcon} alt="JS" className="skill_Icon" />
              <img src={figmaIcon} alt="JS" className="skill_Icon" />
              <img src={htmlIcon} alt="JS" className="skill_Icon" />
              <img src={mysqlIcon} alt="JS" className="skill_Icon" />
              <img src={nodeIcon} alt="JS" className="skill_Icon" />
              <img src={pythonIcon} alt="JS" className="skill_Icon" />
            </div>
          </div>
        </div>
      </div>

      {/*Projects*/}
      <div className="Projects">
        <h1>PROJECTS</h1>
        <p>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
        <h2>Coming Soon!</h2>
      </div>

      {/*Contact Us*/}
      <div className="ContactForm">
        <h1>CONTACT US</h1>
      </div>
      <ContactUs/>
  
      {/*Footer*/}
      <Footer/>
    
    </div>
  );
};

export default Home;