import React from "react";

const Philosophy = () => {
  return (
    <>
      <div className="bg-[#261141] pt-[10%] px-[10%] text-white ">
        <div className="flex flex-col justify-center items-center">
          <h1 className={`leading-6 font-semibold text-3xl`}>
            Our P<span className="underline underline-offset-8">hilos</span>ophy
          </h1>
          <p className="text-center pt-8 leading-6 text-xl">
            Rapid innovation is an essential feature of digital information
            technology. Remcosol Technologies understands the importance of
            remaining current through frequent self-reinvention. We accomplish
            this by continually attracting the brightest minds in modern digital
            paradigms and platforms. By maintaining a roster of skilled
            technology professionals across every business function, Remcosol
            Technologies distinguishes itself by offering its client
            organizations a single touchpoint to address all of their enterprise
            technology needs.
          </p>
        </div>
        <div className="flex px-[10%] p-[5%] justify-around items-center w-full">
          <div className="flex flex-row space-x-10 text-center">
            <div className="flex basis-[25%]">
              <div className="">
                <div className="">
                  <div className="h-24 w-24 p-4">
                    <img src="/images/Innovation.svg" alt="Inside" />
                  </div>
                </div>
                <h5 className="">Innovation</h5>
              </div>
            </div>
            <div className="flex basis-[25%]">
              <div className="">
                <div className="">
                  <div className="h-24 w-24 p-4">
                    <img src="/images/Quality.svg" alt="Inside" />
                  </div>
                </div>
                <h5 className="">Quality Work</h5>
              </div>
            </div>
            <div className="flex basis-[25%]">
              <div className="">
                <div className="">
                  <div className="h-24 w-24 p-4">
                    <img src="/images/focus.svg" alt="Inside" />
                  </div>
                </div>
                <h5 className="">Client Focus</h5>
              </div>
            </div>
            <div className="text-center flex basis-[25%]">
              <div className="">
                <div className="">
                  <div className="h-24 w-24 p-4">
                    <img src="/images/satisfection.svg" alt="Inside" />
                  </div>
                </div>
                <h5 className="">Customer Satisfection</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Philosophy;
