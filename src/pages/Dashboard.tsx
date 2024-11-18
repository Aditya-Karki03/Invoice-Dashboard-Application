import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen  bg-gradient-to-tr from-blue-100 to-white">
      <Header />
      <div className="flex justify-center w-full items-center my-5">
        <Card />
      </div>
    </div>
  );
};
export default Dashboard;
