import React from "react";
import "../styles/Sections.css";

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="howitworks-section">
      <h2>How It Works</h2>
      <div className="steps-container">
        <div className="step">
          <h3>1. Share Your Data</h3>
          <p>
            Issuers upload financial data and context beyond traditional credit
            scores, telling **your** full story.
          </p>
        </div>
        <div className="step">
          <h3>2. AI Evaluates Fairly</h3>
          <p>
            Our AI analyzes your information, considering dozens of factors to
            create a comprehensive credit assessment.
          </p>
        </div>
        <div className="step">
          <h3>3. Lenders Get Insights</h3>
          <p>
            Lenders receive a transparent report with your Debitorium rating and
            risk factors, enabling confident decisions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
