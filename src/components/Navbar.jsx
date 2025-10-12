import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="nav" id="navbar" ref={navRef}>
      <a href="/" className="site-title">ByScott</a>
      <div className={`menu ${menuOpen ? "open" : "closed"}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : "closed"} onClick={() => setMenuOpen(false)}>
        <li className="nav-link">
          <a href="/">Home</a>
        </li>
        <li className="nav-link">
          <a href="#about">About</a>
        </li>
        <li className="nav-link">
          <a href="#skills">Skills</a>
        </li>
        <li className="nav-link">
          <a href="#projects">Projects</a>
        </li>
        <li className="nav-link">
          <a href="#contactme">Contact Me</a>
        </li>
        <li>
          <Link
            to="https://docs.google.com/document/d/1NNRRWGE41u_5BRpCLaYdtiqBAFT7xSr6/edit?usp=sharing&ouid=118177325970549515943&rtpof=true&sd=true"
            target="_blank"
            rel="noreferrer"
            className="resume-link"
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};
