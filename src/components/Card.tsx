import React from "react";
import InvoiceCard from "./InvoiceCard";

const Card: React.FC = () => {
  return (
    <div className="w-1/2 px-8 py-6  rounded-lg my-4 shadow-lg border border-gray-300">
      <div className="">
        <h2 className="font-bold text-lg">Invoice Dashboard</h2>
        <p className="text-gray-600 text-sm">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      <div className="flex gap-3 my-5">
        <button className="bg-blue-500 text-white px-3 py-1 rounded-md">
          All
        </button>
        <button className="bg-blue-500 text-white px-3 py-1 rounded-md">
          Pending
        </button>
        <button className="bg-blue-500 text-white px-3 py-1 rounded-md">
          Approved
        </button>
        <button className="bg-blue-500 text-white px-3 py-1 rounded-md">
          Rejected
        </button>
      </div>
      <div className="">
        <InvoiceCard
          companyName={"Tech Corp"}
          date="18/11/2024"
          status="Approved"
          money="5000"
        />
        <InvoiceCard
          companyName={"Digital Solutions"}
          date="12/01/2024"
          status="Pending"
          money="5000"
        />
        <InvoiceCard
          companyName={"Innovation Labs"}
          date="01/01/2024"
          status="Approved"
          money="5000"
        />
        <InvoiceCard
          companyName={"Tech Corp"}
          date="17/06/2024"
          status="Rejected"
          money="5000"
        />
      </div>
    </div>
  );
};
export default Card;
