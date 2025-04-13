import React from "react";
import "../styles/Sections.css";

const Lenders: React.FC = () => {
  return (
    <section id="lenders" className="lenders-section">
      <h2>For Lenders</h2>
      <p className="section-intro">
        Make smarter lending decisions with deeper insight. Debitorium provides
        transparency and detail that traditional credit ratings can’t match.
      </p>
      <ul className="benefits-list">
        <li>
          <strong>Transparent Ratings:</strong> Understand the “why” behind
          every rating with clear AI explanations – no black boxes or hidden
          criteria.
        </li>
        <li>
          <strong>Broader Perspective:</strong> See beyond the standard credit
          report. Our analysis finds patterns and strengths other models might
          miss, uncovering worthy borrowers.
        </li>
        <li>
          <strong>Real-Time Updates:</strong> Stay updated with continuous
          monitoring. Credit insights adjust as new data comes in, so you’re
          never basing decisions on stale information.
        </li>
      </ul>
    </section>
  );
};

export default Lenders;
