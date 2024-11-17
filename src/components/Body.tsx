import { NotepadText } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Body: React.FC = () => {
  const navigate = useNavigate();
  const handleTryItFree = () => {
    navigate("/dashboard");
  };
  return (
    <main className="min-w-screen px-6 py-12 ">
      <div className="max-w-xl  text-center mx-auto py-5">
        <h1 className="text-3xl font-bold my-5">
          Simple Invoice Management for Your Business
        </h1>

        <p className="text-gray-700 text-lg mb-3">
          Track, manage, and analyze your invoices in one place. Save time and
          get paid faster with our intuitive dashboard.
        </p>
        <button
          onClick={handleTryItFree}
          className="bg-blue-600 hover:bg-blue-800 cursor-pointer text-white p-3 rounded-lg min-w-36"
        >
          Try it free
        </button>
      </div>
      <div className="max-w-xl mx-auto text-center my-10 flex flex-col gap-6">
        <div className="">
          <div className="h-12 w-12 rounded-full bg-blue-100 flex justify-center items-center p-2 mx-auto">
            <NotepadText className="text-blue-500" />
          </div>
          <h2 className="font-bold">Easy Invoicing</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="">
          <div className="h-12 w-12 rounded-full bg-blue-100 flex justify-center items-center p-2 mx-auto">
            <NotepadText className="text-blue-500" />
          </div>
          <h2 className="font-bold">Easy Invoicing</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="">
          <div className="h-12 w-12 rounded-full bg-blue-100 flex justify-center items-center p-2 mx-auto">
            <NotepadText className="text-blue-500" />
          </div>
          <h2 className="font-bold">Easy Invoicing</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </main>
  );
};

export default Body;
