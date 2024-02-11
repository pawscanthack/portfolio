import data from "../data/projects.json";
import "../css/projects.css";

export const Projects = () => {
  return (
    <section className="project-section">
      <div>
        <div>
          <h2>Recent Projects</h2>
        </div>
        <div className="project-section-container">
          {data?.portfolio?.map((item, index) => (
            <div key={index}>
              <div>
                <img src={item.src} alt={item.src} />
                <div></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
