import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <img
        src="/debitorium-logo.png"
        alt="Debitorium Logo"
        className="hero-logo"
      />
      <p className="hero-tagline">Global tools, built with focus.</p>
      <p className="hero-description">
        We’re a lean software studio building powerful digital infrastructure.
        Our current focus is Hertzra — a clean, fast, global-first app for
        international calling.
      </p>
    </section>
  );
};

export default Hero;
