import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <h2 className="site-title">Portfolio</h2>
      <ul>
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
          <a
            href="https://acrobat.adobe.com/id/urn:aaid:sc:US:81ee833f-0756-4805-b8fb-fd4500ae7a6c"
            target="_blank"
            rel="noreferrer"
            class="resume-link"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
