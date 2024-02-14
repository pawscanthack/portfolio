import data from "../data/projects.json";
import "../css/projects.css";
import gitLogo from "../img/github-mark.png";

export const Projects = () => {
  return (
    <section className="project-section">
      <div>
        <div className="project-section-heading">
          <h2>Recent Projects</h2>
        </div>
        <div className="project-section-container">
          {data?.portfolio?.map((item, index) => (
            <div key={index}>
              <div className="project-content">
                <div className="project-image-container">
                  <img
                    src={item.src}
                    alt={item.src}
                    className="project-image"
                  />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  Visit Project
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="github-link-container">
          <a
            href="https://github.com/pawscanthack"
            target="_blank"
            rel="noreferrer"
            className="github-link"
          >
            <img src={gitLogo} alt="Github Logo" className="github-logo" />
            <p>Visit my GitHub page</p>
          </a>
        </div>
      </div>
    </section>
  );
};
