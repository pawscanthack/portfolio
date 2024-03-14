import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { usePostHog } from "posthog-js/react";
import "../css/home.css";
import hero from "../img/profile-pic.jpg";

export const Home = () => {
  const posthog = usePostHog();
  const [showContactButton, setShowContactButton] = useState(false);

  useEffect(() => {
    // After 3 seconds (adjust as needed), set showContactButton to true
    const timer = setTimeout(() => {
      setShowContactButton(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []); // Run only once on component mount

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
      <div
        className={`contact-button-container ${
          showContactButton ? "show" : ""
        }`}
      >
        <NavLink to="/contactme">
          <div>
            <button
              className={`contact-button ${showContactButton ? "show" : ""}`}
              onClick={() => {
                posthog.capture("contact_button_clicked", {
                  user_name: "Testing Testing 123",
                });
              }}
            >
              Let's go!
            </button>
          </div>
        </NavLink>
      </div>
    </section>
  );
};
