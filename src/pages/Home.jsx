import { NavLink } from "react-router-dom";
import "../css/home.css";
import hero from "../img/profile-pic.jpg";
export const Home = () => {
  return (
    <section className="home-section">
      <div className="home-section-container">
        <img src={hero} alt="profile" className="home-section-image" />
        <div className="home-list-container">
          <ul className="home-tag-list">
            <li>Design</li>
            <li>Develop</li>
            <li>Deploy</li>
            <li>Secure</li>
          </ul>
        </div>
      </div>
      <div className="contact-button-container">
        <NavLink to="/contactme">
          <button className="contact-button">Let's do it!</button>
        </NavLink>
      </div>
    </section>
  );
};
