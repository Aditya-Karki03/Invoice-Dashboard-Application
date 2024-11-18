import React from "react";
import { dataType } from "../types/Types";

interface TotalProps {
  items: dataType[];
}
// interface redType{
//     acc:Number,
//     currentVal:dataType
// }

const Total: React.FC<TotalProps> = ({ items }) => {
  console.log(items);
  const totalAmt = items.reduce((acc, currentVal) => {
    return acc + Number(currentVal.money);
  }, 0);
  return (
    <div className="my-4 min-w-2xl border border-gray-300 rounded-lg cursor-pointer flex justify-between px-4 py-4 hover:bg-gray-200">
      <p className="">
        Total Amount ({items.length} {items.length > 1 ? "invoices" : "invoice"}
        ):
      </p>
      <p>${totalAmt}</p>
    </div>
  );
};
export default Total;
