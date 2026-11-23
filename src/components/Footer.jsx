// A footer shown at the bottom of every page
function Footer() {
  // Gets the current year automatically, so you never have to update it
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        
        <div>
          <h3>
            Collins<span>Osano</span>
          </h3>
          <p>
            Developer and designer creating clean, modern web experiences.
          </p>
        </div>

    
        <div>
          <h4>Connect</h4>
          <ul>
            <li>
              <a href="https://github.com/collinsosano6-droid" target="_blank" rel="noreferrer">
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

    
        <div>
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="mailto:you@example.com">collinsosano6@gmail.com</a>
            </li>
            <li>Nairobi, Kenya</li>
          </ul>
        </div>
      </div>

      <p className="copyright">
        &copy; {year} Collins Osano. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;