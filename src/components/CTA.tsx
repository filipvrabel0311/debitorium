import React from "react";
import "../styles/CTA.css";

const CTA: React.FC = () => {
  return (
    <section id="contact" className="cta-section">
      <h2>Ready to share your credit story?</h2>
      <p>Contact us today and see how Debitorium can help you.</p>
      <a
        href="mailto:debitorium@gmail.com?subject=I%20want%20to%20share%20my%20credit%20story"
        className="cta-button"
      >
        Share Your Credit Story
      </a>
    </section>
  );
};

export default CTA;
