import "../navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Portfolio
      </a>
      <ul>
        <li className="active">
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/contact">Github</a>
        </li>
        <li>
          <a href="/resume">Resume</a>
        </li>
      </ul>
    </nav>
  );
}
