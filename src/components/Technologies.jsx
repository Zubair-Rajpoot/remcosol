import { useState } from "react";

const Technologies = () => {
  const [selected, setSelected] = useState("web");

  return (
    <div className="px-[10%] pb-20">
      {/* parent */}
      <div className="flex flex-col">
        {/* first */}
        <div className="pb-10">
          <h1 className="text-4xl text-[#261141] font-bold">
            <span className="underline underline-offset-8">Tech</span>nologies
          </h1>
        </div>
        {/* 2nd */}
        <div className="flex flex-row space-x-3 pb-10">
          <button
            className={`border border-[#261141] rounded-3xl bg-transparent px-3 py-2 hover:bg-[#261141] hover:text-white text-black font-semibold text-lg`}
            onClick={(e) => {
              setSelected("web");
            }}
          >
            Web Development
          </button>
          <button
            className={`border border-[#261141] rounded-3xl bg-transparent px-3 py-2 hover:bg-[#261141] hover:text-white text-black font-semibold text-lg`}
            onClick={(e) => {
              setSelected("mob");
            }}
          >
            Mobile Development
          </button>
          <button
            className={`border border-[#261141] rounded-3xl bg-transparent px-3 py-2 hover:bg-[#261141] hover:text-white text-black font-semibold text-lg`}
            onClick={(e) => {
              setSelected("gen");
            }}
          >
            Generative AI
          </button>
        </div>
        {/* 3rd */}
        <div className="">
          {selected === "web" && (
            <div className="flex flex-row">
              <img
                className="w-50% object-fill h-16"
                src="/images/React.svg"
                alt="react"
              />
              <img
                className="w-50% object-fill h-16"
                src="/images/Python.svg"
                alt="python"
              />
              <img
                className="w-50% object-fill h-16"
                src="/images/NodeJS.svg"
                alt="node"
              />
              <img
                className="w-50% object-fill h-16"
                src="/images/MySQL.svg"
                alt="sql"
              />
              <img
                className="w-50% object-fill h-16"
                src="/images/MSAzure.svg"
                alt="azure"
              />
              <img
                className="w-50% object-fill h-16"
                src="/images/postgre.svg"
                alt="postgre"
              />
            </div>
          )}
          {selected === "mob" && (
            <div className="flex flex-row">
              <img
                className="w-50% object-fill h-16"
                src="/images/React.svg"
                alt="react"
              />
              <img
                className="w-50% object-fill h-16"
                src="/images/iOS.svg"
                alt="ios"
              />
              <img
                className="w-50% object-fill h-16"
                src="/images/Python.svg"
                alt="python"
              />
              <img
                className="w-50% object-fill h-16"
                src="/images/NodeJS.svg"
                alt="node"
              />
              <img
                className="w-50% object-fill h-16"
                src="/images/MySQL.svg"
                alt="sql"
              />
              <img
                className="w-50% object-fill h-16"
                src="/images/MSAzure.svg"
                alt="azure"
              />
              <img
                className="w-50% object-fill h-16"
                src="/images/postgre.svg"
                alt="postgre"
              />
            </div>
          )}
          {selected === "gen" && (
            <div className="flex flex-row">
              <img
                className="w-50% object-fill h-16"
                src="/images/Python.svg"
                alt="python"
              />
              <img
                className="w-50% object-fill h-16"
                src="/images/tensorflow.svg"
                alt="tensorflow"
              />
              <img
                className="w-50% object-fill h-16"
                src="/images/fastapi.svg"
                alt="fast"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
