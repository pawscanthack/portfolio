import "../css/about.css";
import aboutPic from "../img/BC_grad.jpeg";
import linkedInLogo from "../img/LI-In-Bug.png";

export const About = () => {
  return (
    <section className="about-section">
      <header className="about-section-heading">
        <h2>A Little About Me</h2>
      </header>
      <section className="about-content-container">
        <img src={aboutPic} alt="BC grad" className="about-section-image" />
      </section>
    </section>
  );
};
