import "./footer.css";
import github from "../assets/Images/github.png";
import linkedin from "../assets/Images/linkedin.png";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* About */}
        <div className="footer-section">
          <h3>Angel Acosta</h3>
          <p>
            Software Developer specializing in full-stack web applications,
            React, Vue, and Node.js. Passionate about clean code, responsive
            design, and modern web technologies.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul className="footer-links">
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className="social-icons">
            <a
              href="https://github.com/acosta-angel1988"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="GitHub" />
            </a>

            <a
              href="https://www.linkedin.com/in/angel-acosta-591966135"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>

          <ul>
            <li>
              Email:
              <a href="mailto:acosta.angel1988@gmail.com">
                acosta.angel1988@gmail.com
              </a>
            </li>

            <li>Location: San Antonio, Texas</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Angel Acosta. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
