import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { usePostHog } from "posthog-js/react";
import "../css/home.css";
import hero from "../img/ft_me2_1.webp";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const typeSequence = [
  "design",
<<<<<<< HEAD
  3000,
  "develop",
  3000,
  "deploy",
  3000,
  "secure",
  3000,
  "support",
  3000,
=======
  1500,
  "deploy",
  1500,
  "support",
  1500,
  "secure",
  2000,
>>>>>>> 71a9840fce08f3514f4498f796efd38fd335a669
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
<<<<<<< HEAD
            <p>I help you </p>
=======
            <p>I can help you </p>
>>>>>>> 71a9840fce08f3514f4498f796efd38fd335a669
            <TypeAnimation
              speed={15}
              sequence={typeSequence}
              wrapper="span"
              cursor={false}
<<<<<<< HEAD
              repeat={0}
=======
              repeat={Infinity}
>>>>>>> 71a9840fce08f3514f4498f796efd38fd335a669
              className="type-animation-text"
            />
          </div>
          <motion.p 
          className="it-systems"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
<<<<<<< HEAD
          transition={{ duration: 0.8, delay: 16 }}
=======
          transition={{ duration: 0.8, delay: 1.0 }}
>>>>>>> 71a9840fce08f3514f4498f796efd38fd335a669
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
