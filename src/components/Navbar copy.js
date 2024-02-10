import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <h2 className="site-title">Portfolio</h2>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/projects">Projects</CustomLink>
        <CustomLink to="/contactme">Contact Me</CustomLink>
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

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
