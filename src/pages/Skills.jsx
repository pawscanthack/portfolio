import "../css/skills.css";
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
            <ul className="skills-list-container">
              <li>
                Networking & Infrastructure: Proficient in TCP/IP, DHCP, DNS, VPN configuration, wireless performance optimization, and VoIP systems.
              </li>
              <li>
                Troubleshooting & Operating Systems: Experienced diagnosing application, hardware, and OS issues across Windows, macOS, Linux, iOS, and Android using GUI and command-line tools.
              </li>
              <li>
                Hardware Support: Skilled at repairing and provisioning client-side hardware including desktops, laptops, peripherals, mobile devices, printers, docking stations, and POS systems.
              </li>
              <li>
                Directory & Identity Management: Advanced user and access administration experience in Active Directory, Entra, and Google Workspace.
              </li>
              <li>
              Service Desk Platforms: Competent in Jira Service Management, AutoTask, ServiceNow, and similar ticketing systems.
              </li>
              <li>
              Scripting & Automation: Proficient in Python and PowerShell for automating tasks, managing systems, and enhancing workflows.
              </li>
              <li>
              Cybersecurity Fundamentals: Knowledgeable in firewalls, endpoint protection, vulnerability management, and security best practices to safeguard IT environments.
              </li>
            </ul>
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
