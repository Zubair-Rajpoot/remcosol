import React from "react";

const CuttingEdge = () => {
  return (
    <div>
      <div className="p-[10%] w-full text-[#261141] grid grid-cols-2">
        <div className="flex flex-col">
          <h1 className="text-4xl">
            Revolutionizing your business with cutting edge software solution
          </h1>
          <ul className="py-[5%] text-xl list-disc list-inside">
            <li>Power AI innovation</li>
            <li>Enjoy easier Collaboration</li>
            <li>Develop solutions faster</li>
          </ul>
        </div>
        {/* 2nd */}
        <div className="flex flex-col items-center min-h-60">
          <img
            src="/images/Teradata.svg"
            alt="Tera"
            className="w-[300px] h-[300px] drop-shadow-2xl shadow-[#261141] "
          />
        </div>
      </div>
    </div>
  );
};

export default CuttingEdge;
