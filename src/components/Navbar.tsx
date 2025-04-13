import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle mobile menu open/close
  const handleToggle = () => setMenuOpen(!menuOpen);

  // Close menu when a link is clicked (for better UX on mobile)
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Brand Name (could also use logo image small here if desired) */}
      <a href="#hero" className="navbar-brand" onClick={handleLinkClick}>
        Debitorium
      </a>

      {/* Hamburger icon for mobile */}
      <button
        type="button"
        className="navbar-toggle"
        aria-label="Menu"
        onClick={handleToggle}
      >
        &#9776;
      </button>

      {/* Menu links (shown on desktop, hidden on mobile unless menuOpen) */}
      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <li>
          <a href="#how-it-works" onClick={handleLinkClick}>
            How It Works
          </a>
        </li>
        <li>
          <a href="#issuers" onClick={handleLinkClick}>
            Issuers
          </a>
        </li>
        <li>
          <a href="#lenders" onClick={handleLinkClick}>
            Lenders
          </a>
        </li>
        <li>
          <a href="#contact" onClick={handleLinkClick}>
            Contact
          </a>
        </li>
      </ul>

      {/* Mobile menu dropdown (renders only when menuOpen) */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#how-it-works" onClick={handleLinkClick}>
            How It Works
          </a>
          <a href="#issuers" onClick={handleLinkClick}>
            Issuers
          </a>
          <a href="#lenders" onClick={handleLinkClick}>
            Lenders
          </a>
          <a href="#contact" onClick={handleLinkClick}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
