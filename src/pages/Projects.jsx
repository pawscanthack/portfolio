import data from "../data/projects.json";
import "../css/projects.css";

export const Projects = () => {

  const addFlex = (e) => {
    const description = e.currentTarget.querySelector('.project-description');
    if (description) {
      description.style.display = 'flex';
    }
  }

  const removeFlex = (e) => {
    const description = e.currentTarget.querySelector('.project-description');
    if (description) {
      description.style.display = 'none';
    }
  }

  return (
    <section className="project-section" id="projects">
      <div className="project-section-heading">
        <h2>Recent Projects</h2>
      </div>
      <div className="project-section-container">
        {data?.portfolio?.map((item, index) => (
          <div key={index}>
            <div className="project-container"
              onMouseEnter={addFlex}
              onMouseLeave={removeFlex}
              onTap={addFlex}
              onTapCancel={removeFlex}
            >
              <img
                src={item.src}
                alt={item.src}
                className="project-image"
              />
              <div className="project-text-container">
                <h3>{item.title}</h3>
              </div>
              <div className="project-description">
                <p>{item.description}</p>
                <a className="project-link" href={item.link} target="_blank" rel="noreferrer">View Project</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
