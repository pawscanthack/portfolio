import "../css/home.css";
import hero from "../img/profile-pic.jpg";
export const Home = () => {
  return (
    <section className="home-section">
      <div className="home-section-container">
        <img src={hero} alt="profile" className="home-section-image" />
        <div className="home-header">
          <h1>Welcome to My Portfolio</h1>
          <p>What can I do for you?</p>
          <ul>
            <li>Systems Administration</li>
            <li>Cybersecurity</li>
            <li>Application Development</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
