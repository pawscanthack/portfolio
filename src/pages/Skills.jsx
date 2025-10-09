import "../css/skills.css";
import data from "../data/skills.json";
import SkillsCard from "../components/SkillsCard";

export const Skills = () => {
  return (
    <section className="skills-section">
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
      <h2>Certifications</h2>
      <div className="cert-list">
        <img src="/images/endpoint-administrator.webp" alt="Microsoft Endpoint Administrator" />
        {/* <li>
          Microsoft | MD-102 Certified Endpoint Administrator September 2025
        </li>
        <li>
          CompTia | IT Operations Specialist July 2025
        </li>
        <li>
          CompTia | Network+ July 2025
        </li>
        <li>
          CompTia | A+ April 2025
        </li>
        <li>
          Splunk | Certified Core User September 2025
        </li>
        <li>
          CompTia | CySA+ August 2024
        </li>
        <li>
          The Python Institute | Certified Associate Programmer May 2024
        </li> */}
      </div>
    </section>
  );
};
