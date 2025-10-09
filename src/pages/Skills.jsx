import "../css/skills.css";
import data from "../data/skills.json";
import SkillsCard from "../components/SkillsCard";
import linkedInLogo from "../img/LI-In-Bug.png";

export const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-section-heading">
        <h1 hidden="true">Let's get to know each other!</h1>
      </div>
      <div className="skills-section-container">
        <div className="skills-content-container">
          <div className="skills-content">
            <h2>Skills</h2>
            <div className="skills-card-container">
              {Object.keys(data?.skills)?.map((category, index) => (
                <SkillsCard
                  key={index}
                  cardTitle={category}
                  cardContent={data.skills[category]}
                />
              ))}
            </div>
          </div>
          <div className="skills-content">
            <h2>Certifications</h2>
            <ul className="skills-list-container">
              <li>
              Microsoft | MD-102 Certified Endpoint Administrator	September 2025              
              </li>
              <li>
              CompTia | IT Operations Specialist	July 2025
              </li>
              <li>
              CompTia | Network+	July 2025
              </li>
              <li>
              CompTia | A+	April 2025
              </li>
              <li>
              Splunk | Certified Core User	September 2025
              </li>
              <li>
              CompTia | CySA+	August 2024
              </li>
              <li>
              The Python Institute | Certified Associate Programmer	May 2024              
              </li>
            </ul>
          </div>
          <div className="linkedin-link-container">
            <a
              href="https://www.linkedin.com/in/scottdaviscyberpro/"
              target="_blank"
              rel="noreferrer"
              className="linkedin-link"
            >
              <img
                src={linkedInLogo}
                alt="LinkedIn Logo"
                className="linkedin-logo"
              />
              <p>Visit my LinkedIn page</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
