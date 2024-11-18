import React, { useState, useEffect } from "react";
import InvoiceCard from "./InvoiceCard";
import Total from "./Total";
import { dataType } from "../types/Types";

//making dummy data
const dataSet: dataType[] = [
  {
    id: 1,
    companyName: "Tech Corp",
    date: "18/11/2024",
    status: "Approved",
    money: "5000",
  },
  {
    id: 2,
    companyName: "Digital Solutions",
    date: "12/01/2024",
    status: "Pending",
    money: "3000",
  },
  {
    id: 3,
    companyName: "Aditya Karki Developer",
    date: "03/11/2001",
    status: "Rejected",
    money: "1000",
  },
];

const Card: React.FC = () => {
  const [btnName, setBtnName] = useState("All");
  const [filter, setFilter] = useState<dataType[]>(dataSet);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [btnName]);

  const handleAll = () => {
    setBtnName("All");
    setFilter(dataSet);
  };
  const handlePending = () => {
    setBtnName("Pending");
    setFilter(() =>
      dataSet.filter((data: dataType) => data.status == "Pending")
    );
  };
  const handleApproved = () => {
    setBtnName("Approved");
    setFilter(() =>
      dataSet.filter((data: dataType) => data.status == "Approved")
    );
  };
  const handleRejected = () => {
    setBtnName("Rejected");
    setFilter(() =>
      dataSet.filter((data: dataType) => data.status == "Rejected")
    );
  };
  return (
    <div className="w-1/2 px-8 py-6  rounded-lg my-4 shadow-lg border border-gray-300">
      <div className="">
        <h2 className="font-bold text-lg">Invoice Dashboard</h2>
        <p className="text-gray-600 text-sm">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      <div className="flex gap-3 my-5">
        <button
          onClick={handleAll}
          className={` px-3 py-1 rounded-md ${
            btnName == "All"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          All
        </button>
        <button
          onClick={handlePending}
          className={` px-3 py-1 rounded-md ${
            btnName == "Pending"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Pending
        </button>
        <button
          onClick={handleApproved}
          className={` px-3 py-1 rounded-md ${
            btnName == "Approved"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Approved
        </button>
        <button
          onClick={handleRejected}
          className={` px-3 py-1 rounded-md ${
            btnName == "Rejected"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Rejected
        </button>
      </div>
      <div className="">
        {!loading ? (
          filter.map((data: dataType) => (
            <InvoiceCard
              key={data.id}
              companyName={data.companyName}
              date={data.date}
              status={data.status}
              money={data.money}
            />
          ))
        ) : (
          <div className="">Loading...</div>
        )}
      </div>
      <div className="">{!loading && <Total items={filter} />}</div>
    </div>
  );
};
export default Card;
