import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { usePostHog } from "posthog-js/react";
import "../css/home.css";
import hero from "../img/profile-pic.jpg";

export const Home = () => {
  const posthog = usePostHog();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Set a timeout to show the button after the delay
    const timeout = setTimeout(() => {
      setShowButton(true);
    }, 2400); // Delay in milliseconds

    // Clear the timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);

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
      <div className={`contact-button-container ${showButton ? "show" : ""}`}>
        <NavLink to="/contactme">
          <div>
            <button
              className={`contact-button ${showButton ? "show" : ""}`}
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
