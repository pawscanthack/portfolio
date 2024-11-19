import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="nav">
      <h2 className="site-title">ByScott</h2>
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
            to="https://acrobat.adobe.com/id/urn:aaid:sc:US:5ace854e-809b-419f-b602-524c77a0b8e0"
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
