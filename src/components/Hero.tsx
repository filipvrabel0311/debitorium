import React from "react";
import logoImage from "../assets/debitorium-logo.png";
import "../styles/Hero.css";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      {/* Logo and headline */}
      <img src={logoImage} alt="Debitorium logo" className="hero-logo" />
      <h1 className="hero-title">Credit Access, Reimagined.</h1>
      <p className="hero-subtitle">
        AI-driven credit insights that empower issuers and enlighten lenders.
      </p>
      {/* Call-to-action in hero (scrolls to next section) */}
      <a href="#how-it-works" className="hero-cta">
        Learn How It Works
      </a>
    </section>
  );
};

export default Hero;
