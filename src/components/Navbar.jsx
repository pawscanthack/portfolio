import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="nav">
      <h2 className="site-title">Portfolio</h2>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contactme">Contact Me</NavLink>
        </li>
        <li>
          <Link
            to="https://acrobat.adobe.com/id/urn:aaid:sc:US:81ee833f-0756-4805-b8fb-fd4500ae7a6c"
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
