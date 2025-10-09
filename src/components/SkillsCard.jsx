export default function SkillsCard({ cardTitle, cardContent }) {

  return (
    <section aria-label={cardTitle} className="skills-card">
      <h3 className="skills-card-title">{cardTitle}</h3>
      <div className="skills-content-container">
        {cardContent.map((item, index) => (
          <div key={index} className="skill-item">
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  )

}