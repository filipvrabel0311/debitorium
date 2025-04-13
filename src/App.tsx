import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Issuers from "./components/Issuers";
import Lenders from "./components/Lenders";
import CTA from "./components/CTA";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* Sticky Navbar at top */}
      <Navbar />
      {/* Main sections of the one-page site */}
      <Hero />
      <HowItWorks />
      <Issuers />
      <Lenders />
      <CTA />
    </div>
  );
};

export default App;
