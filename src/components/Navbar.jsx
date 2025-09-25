import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="nav">
      <a href="/" className="site-title">ByScott</a>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li className="nav-link">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/contactme">Contact Me</NavLink>
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
