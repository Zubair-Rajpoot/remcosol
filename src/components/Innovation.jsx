import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Innovation = () => {
  return (
    <div className="bg-gray-200 p-[10%]">
      <div className={`grid grid-cols-2`}>
        {/* 1st */}
        <div>
          <img
            className="w-full object-fill h-80 drop-shadow-2xl"
            src="/images/Joinus.svg"
            alt="innovation"
          />
        </div>
        {/* 2nd */}
        <div className="p-7">
          <h1 className="text-4xl">Take your career to the next level</h1>
          <p className="text-lg py-6">
            Remcosol Technologies is one of the most sought-after employers in
            the industry. Apply now and become a part of the Remcosol's family
          </p>
          <button className=" border-[#261141] border-2 flex p-3 rounded-2xl hover:shadow-2xl">
            Join Us &nbsp; {<BsArrowRight size={24} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Innovation;
