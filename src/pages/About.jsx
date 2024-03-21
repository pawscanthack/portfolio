import "../css/about.css";
import aboutPic from "../img/BC_grad.jpeg";
import linkedInLogo from "../img/LI-In-Bug.png";

export const About = () => {
  return (
    <section className="about-section">
      <div className="about-section-heading">
        <h1 hidden="true">Let's get to know each other!</h1>
      </div>
      <div className="about-section-container">
        <img src={aboutPic} alt="BC grad" className="about-section-image" />
        <div className="about-content-container">
          <div className="about-content">
            <p>
              My name is Scott Davis. I am a recent Cybersecurity and Network
              Administration Graduate with a passion for application development
            </p>
          </div>
          <div className="about-content">
            <h2>Can do attitude!</h2>
            <p>
              As a recent graduate, I bring a diverse skill set and a passion
              for learning to the table. I excel in quickly grasping new
              concepts and thrive in problem-solving scenarios.
            </p>
          </div>
          <div className="about-content">
            <h2>Experience</h2>
            <ul>
              <li>
                Web Development Intern at Edmonds Community College (Spring
                2019)
              </li>
              <li>
                Front-end lead and API development for Cybersecurity Capstone
                Project
              </li>
            </ul>
          </div>
          <div className="about-content">
            <h2>Skills</h2>
            <ul className="skills-list-container">
              <li>OS support: Linux, Windows, and MacOS</li>
              <li>
                Cloud and Virtualization administration: VMWare, GCP, AWS,
                Azure, Digital Ocean
              </li>
              <li>
                Programming and scripting: Python, React, JavaScript, HTML, CSS,
                SQL, Ansible, PowerShell, PHP, C++
              </li>
              <li>
                Network Security and Administration: Wireshark, Nessus, Security
                Onion, Cisco
              </li>
              <li>Project management: Scrum, Agile, Jira</li>
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
