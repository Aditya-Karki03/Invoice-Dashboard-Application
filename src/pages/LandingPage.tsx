import React from "react";
import Header from "../components/Header";
import Body from "../components/Body";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <Body />
    </div>
  );
};
export default LandingPage;
