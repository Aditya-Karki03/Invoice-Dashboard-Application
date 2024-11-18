import { CircleAlert, CircleCheck, Clock } from "lucide-react";
import React from "react";

interface propTypes {
  companyName: string;
  date: string;
  status: string;
  money: string;
}

const InvoiceCard: React.FC<propTypes> = ({
  companyName,
  date,
  status,
  money,
}) => {
  return (
    <div className="my-4 min-w-2xl border border-gray-300 rounded-lg cursor-pointer flex justify-between px-4 py-4 hover:bg-gray-200">
      <div className="">
        <h2 className="font-bold ">{companyName}</h2>
        <label className="text-sm text-gray-500">Due:</label>{" "}
        <span className="text-sm text-gray-500">{date}</span>
      </div>
      <div className="flex gap-2 ">
        <div className="flex gap-2 h-full items-center  min-w-28">
          {status == "Pending" ? (
            <Clock className="text-yellow-500 " />
          ) : status == "Approved" ? (
            <CircleCheck className="text-green-500" />
          ) : (
            <CircleAlert className="text-red-500" />
          )}

          <p>{status}</p>
        </div>
        <p className="h-full flex justify-center items-center">${money}</p>
      </div>
    </div>
  );
};
export default InvoiceCard;
