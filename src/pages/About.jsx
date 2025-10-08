import "../css/about.css";
import aboutPic from "../img/BC_grad.jpeg";
import { Linkedin, Github } from "lucide-react";

export const About = () => {
  return (
    <section className="about-section" id="about">
      <header className="about-section-heading">
        <h2>A Little About Me</h2>
      </header>
      <section className="about-content-container">
        <div className="about-image-link-container">
          <img src={aboutPic} alt="BC grad" className="about-section-image" />
          <div className="link-container">
            <a
              href="https://www.linkedin.com/in/scottdaviscyberpro/"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/scottdaviscyberpro/"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <Github size={32} />
            </a>
          </div>
        </div>
        <div className="about-articles-container">
          <article className="about-content">
            <p>
              Hello! I'm <strong>Scott Davis</strong>, a cybersecurity and IT professional based in Bellevue, WA. 
              With a strong foundation in <em>IT support</em>, <em>network administration</em>, and <em>security operations</em>, 
              I bring a unique blend of technical expertise and customer-first service to every challenge I tackle.
            </p>
          </article>
          <article className="about-content">
            <h2>Cybersecurity is a Lifestyle</h2>
            <p>
              In today’s digital age, <strong>IT is cybersecurity</strong>—and for me, it's more than just a profession; 
              it's a way of life. I thrive on solving complex problems, automating workflows with scripting, and ensuring 
              systems run securely and efficiently. My experience spans across cloud platforms like <em>Azure</em>, identity 
              management with <em>Entra</em> and <em>Active Directory</em>, and endpoint administration using <em>Intune</em> 
              and <em>PowerShell</em>.
            </p>
            <p>
              Whether it's a <strong>part-time</strong>, <strong>full-time</strong>, <strong>contract</strong>, or 
              <strong>volunteer</strong> opportunity, I’m passionate about contributing to teams that value innovation, 
              security, and collaboration. I’ve supported diverse environments, responded to security incidents, and helped 
              organizations recover from ransomware attacks—all while maintaining a 96% customer satisfaction rate.
            </p>
          </article>
          <article className="about-content">
            <h2>Beyond the Keyboard</h2>
            <p>
              Outside of work, I enjoy playing guitar 🎸, diving into <em>Hack The Box</em> challenges, gaming, and spending 
              time with my two miniature Australian shepherds, <strong>Shu</strong> and <strong>Yulie</strong>. 
              I believe that staying curious and creative is key to thriving in tech.
            </p>
          </article>
          </div>
      </section>
    </section>
  );
};
