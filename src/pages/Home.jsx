import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { usePostHog } from "posthog-js/react";
import "../css/home.css";
import hero from "../img/ft_me2_1.webp";
import { TypeAnimation } from "react-type-animation";

const typeSequence = [
  "design",
  3000,
  "develop",
  3000,
  "deploy",
  3000,
  "secure",
  3000,
  "support",
  3000,
];

export const Home = () => {
  const posthog = usePostHog();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Set a timeout to show the button after the delay
    const timeout = setTimeout(() => {
      setShowButton(true);
    }, 2850); // Delay in milliseconds

    // Clear the timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="home-section">
      <div className="home-section-container">
        <div className="home-section-image-container">
          <img src={hero} alt="profile" className="home-section-image" />
        </div>
        <header className="header-container">
          <h1>Hey there, I'm Scott</h1>
          <div className="subheader-container">
            <p>I help you </p>
            <TypeAnimation
              speed={15}
              sequence={typeSequence}
              wrapper="span"
              cursor={false}
              repeat={0}
              className="type-animation-text"
            />
          </div>
          <p className="it-systems"> IT systems</p>
        </header>
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
              About Me
            </button>
          </div>
        </NavLink>
      </div>
    </section>
  );
};
