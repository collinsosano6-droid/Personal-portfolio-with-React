import { Link, useLocation } from "react-router-dom";

// projectCount is passed down from App so we can show a live number
function Header({ projectCount }) {
  // useLocation tells us which page we are on
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="site-header">
      {/* ---------- Navigation bar (shown on every page) ---------- */}
      <nav className="navbar">
        <Link to="/" className="brand">
          Collins<span>Osano</span>
        </Link>

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
    
            <a href="mailto:collinsosano6@gmail.com">Contact</a>
          </li>
        </ul>
      </nav>

      {/* ---------- Hero banner (only on the home page) ---------- */}
      {isHome && (
        <section className="hero">
          <p className="eyebrow">Developer &amp; Designer</p>

          <h1>Hi, I'm Collins Osano</h1>
          <p className="hero-text">
            I design and build fast, accessible and beautiful websites for
            startups and growing brands. Browse my latest work below.
          </p>

          {/* Skill tags: EDIT to match your skills */}
          <ul className="skills">
            <li>React</li>
            <li>UI/UX Design</li>
            <li>JavaScript</li>
            <li>Responsive Design</li>
          </ul>

          {/* These anchor links scroll down to sections on the page */}
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#add-project" className="btn btn-outline">
              Add a Project
            </a>
          </div>

          {/* Quick facts: EDIT the numbers */}
          <ul className="stats">
            <li>
              <strong>{projectCount}</strong>
              <span>Projects</span>
            </li>
            <li>
              <strong>3+</strong>
              <span>Years Experience</span>
            </li>
            <li>
              <strong>Open</strong>
              <span>For Freelance Work</span>
            </li>
          </ul>
        </section>
      )}
    </header>
  );
}

export default Header;