import React from "react";
import "../styles/Sections.css";

const Issuers: React.FC = () => {
  return (
    <section id="issuers" className="issuers-section">
      <h2>For Issuers</h2>
      <p className="section-intro">
        Unlock funding on fair terms. Debitorium lets you prove your
        creditworthiness with data and insights that go beyond a simple credit
        score.
      </p>
      <ul className="benefits-list">
        <li>
          <strong>Fair Access to Capital:</strong> Affordable, AI-driven ratings
          give you a foothold in capital markets traditionally closed off to
          smaller issuers.
        </li>
        <li>
          <strong>Fuller Credit Story:</strong> Include context and alternative
          data so that your strengths shine through – no more one-size-fits-all
          scoring.
        </li>
        <li>
          <strong>Faster Approvals:</strong> Get rated in days, not months.
          Spend less time waiting and more time engaging investors and lenders.
        </li>
      </ul>
    </section>
  );
};

export default Issuers;
