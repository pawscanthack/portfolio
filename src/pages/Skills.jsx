import "../css/skills.css";
import data from "../data/skills.json";
import SkillsCard from "../components/SkillsCard";

export const Skills = () => {
  return (
    <section className="skills-section" id="skills">
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
        <img src="/images/comptia-cios.webp" alt="CompTia IT Operations Specialist" />
        <img src="/images/network+.webp" alt="CompTia Network+" />
        <img src="/images/a+.webp" alt="CompTia A+" />
        <img src="/images/cysa+.webp" alt="CompTia CySA+" />
        <img src="/images/splunk-core-user.webp" alt="Splunk Certified Core User" />
        <img src="/images/pcap.webp" alt="Python Institute Certified Associate Programmer" />
      </div>
    </section>
  );
};
