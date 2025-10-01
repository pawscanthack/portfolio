import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { usePostHog } from "posthog-js/react";
import "../css/home.css";
import hero from "../img/ft_me2_1.webp";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const typeSequence = [
  "design",
  1500,
  "deploy",
  1500,
  "support",
  1500,
  "secure",
  2000,
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
    <motion.section 
      className="home-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="home-section-container">
        <div className="home-section-image-container">
          <img src={hero} alt="profile" className="home-section-image" />
        </div>
        <header className="header-container">
          <h1>Hey there, I'm Scott</h1>
          <div className="subheader-container">
            <p>I can help you </p>
            <TypeAnimation
              speed={15}
              sequence={typeSequence}
              wrapper="span"
              cursor={false}
              repeat={Infinity}
              className="type-animation-text"
            />
          </div>
          <motion.p 
          className="it-systems"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          > IT systems</motion.p>
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
              Get in touch
            </button>
          </div>
        </NavLink>
      </div>
    </motion.section>
  );
};
