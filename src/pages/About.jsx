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
              My name is Scott Davis. I am a Cybersecurity and Network
              Administration graduate with a passion for coding and automation.
            </p>
          </div>
          <div className="about-content">
            <h2>Can do attitude!</h2>
            <p>
            I am a motivated IT professional with a proven track record of delivering fast, 
            friendly, and effective technical support. I am adaptable, quick to learn new technologies, 
            and capable of working independently or as part of a team. With experience in IT support, 
            systems administration, and cybersecurity, I excel at diagnosing and resolving complex issues, 
            ensuring smooth and secure operations. My hands-on approach, combined with strong communication skills,
            enables me to provide exceptional service and help businesses thrive in a rapidly changing tech landscape.
            </p>
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
