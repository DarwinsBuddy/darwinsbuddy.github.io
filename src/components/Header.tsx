import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export function Header() {
  return (
    <div className="header">
      <div className="persona">
        <div className="portrait"></div>
        <div className="title-container">
          <div className="header-title">DI Christoph Spörk, BSc, MSc</div>
          <div className="header-sub-title">
            Product Owner | Data Scientist & Analyst | ML/AI Professional Lead
            Software Engineer | Technical Team Lead
          </div>
        </div>
      </div>
      <div className="contact">
        <div>
          <h4>Address</h4>
          <p className="nowrap">Fontanastrasse 1 / 4 / 18</p>
          <p className="nowrap">1100 Vienna, Austria</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p className="nowrap">
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            <a href="mailto:christoph.spoerk@gmail.com" target="_blank">
              christoph.spoerk@gmail.com
            </a>
          </p>
          <p className="nowrap">
            <FontAwesomeIcon icon={faPhone} />{" "}
            <a href="tel:+436766430055">+43 676 643 00 55</a>
          </p>
          <p className="nowrap">
            <FontAwesomeIcon icon={faGithub} />{" "}
            <a href="https://github.com/DarwinsBuddy" target="_blank">
              github.com/DarwinsBuddy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
