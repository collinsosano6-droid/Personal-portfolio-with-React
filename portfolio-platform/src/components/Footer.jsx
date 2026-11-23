// A footer shown at the bottom of every page
function Footer() {
  // Gets the current year automatically, so you never have to update it
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        {/* Column 1: about */}
        <div>
          <h3>
            Your<span>Name</span>
          </h3>
          <p>
            Developer and designer creating clean, modern web experiences.
          </p>
        </div>

        {/* Column 2: social links. EDIT the URLs */}
        <div>
          <h4>Connect</h4>
          <ul>
            <li>
              <a href="https://github.com/your-username" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/your-username" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: contact. EDIT your details */}
        <div>
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="mailto:you@example.com">you@example.com</a>
            </li>
            <li>Nairobi, Kenya</li>
          </ul>
        </div>
      </div>

      <p className="copyright">
        &copy; {year} Your Name. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;