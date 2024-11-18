import React from "react";
import { useNavigate } from "react-router-dom";
const Header: React.FC = () => {
  const navigate = useNavigate();
  const handleTitleClick = () => {
    navigate("/");
  };
  return (
    <nav className="px-6 py-4 ">
      <div
        onClick={handleTitleClick}
        className="text-2xl font-bold text-blue-600 max-w-36 text-center hover:cursor-pointer"
      >
        InvoiceDash
      </div>
    </nav>
  );
};
export default Header;
