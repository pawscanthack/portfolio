import "../css/about.css";

export const About = () => {
  return (
    <section className="about-section">
      <div className="about-section-heading">
        <h1>Hello, my name is Scott Davis</h1>
      </div>
      <div className="about-section-container">
        <img
          src="../images/BC_grad.jpeg"
          alt="BC grad"
          className="about-section-image"
        />
        <div className="about-content-container">
          <div className="about-content">
            <p>
              I am a recent Cybersecurity and Network Administration Graduate
              with an aptitude for application development
            </p>
          </div>
          <div className="about-content">
            <h2>Summary</h2>
            <p>
              As a recent graduate in Cybersecurity and Network Administration,
              I bring a diverse skill set and a passion for learning to the
              table. I excel in quickly grasping new concepts and thrive in
              problem-solving scenarios.
            </p>
          </div>
          <div className="about-content">
            <h2>Experience</h2>
            <p>
              - Web Development Intern at Edmonds Community College (Spring
              2019)
              <br />- Front-end lead and API development for Cybersecurity
              Capstone Project
            </p>
          </div>
          <div className="about-content">
            <h2>Education & Skills</h2>
            <p>
              - Bachelor's Degree in Cybersecurity and Systems Information from
              Bellevue College (4.0 GPA)
              <br />
              - Extensive knowledge in Linux, Windows, VMWare, cloud platforms
              (GCP, AWS, Azure, Digital Ocean), shell scripting, SQL, Python,
              Ansible, PowerShell, PHP, JavaScript, C++
              <br />
              - Ability to troubleshoot TCP/IP network problems, locate
              vulnerabilities, and use security monitoring tools
              <br />- Proficient in project management methodologies (Scrum,
              Agile) and communication skills
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
