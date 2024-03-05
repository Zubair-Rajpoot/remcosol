import React from "react";
import { BsArrowRight, BsGeoAltFill, BsTelephoneFill } from "react-icons/bs";

const ContactForm = () => {
  return (
    <div className="px-[10%] py-[5%]">
      <div className={`grid grid-cols-2`}>
        {/* 1st */}
        <div>
          <h1 className="text-4xl flex text-[#261141] py-6">
            Contact us &nbsp; {<BsArrowRight size={50} />}
          </h1>
          <p className="text-lg pb-6 pr-20">
            Committed to excellence, we focus on delivering high-quality
            solutions. Your satisfaction drives our dedication to continuous
            improvement
          </p>

          <p className="flex text-lg">
            {<BsTelephoneFill size={25} />} &nbsp; +92 313 0880216
          </p>
          <p className="flex text-lg">
            {<BsGeoAltFill size={25} />} &nbsp; Lahore, Pakistan
          </p>
        </div>
        {/* 2nd */}
        <div>
          <section className="get-in-touch max-w-sm mx-auto px-4 py-8">
            <form className="contact-form grid grid-cols-1 gap-4">
              <div className="form-field">
                <label
                  for="name"
                  className="label bottom-1 left-2 text-gray-400 text-lg leading-loose transition-transform duration-200 ease-in-out"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="input-text focus:outline-none block w-full h-11 border-b-2 border-gray-400 text-lg leading-loose"
                  required
                />
              </div>
              <div className="form-field">
                <label
                  for="email"
                  className="label bottom-1 left-2 text-gray-400 text-lg leading-loose transition-transform duration-200 ease-in-out"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="input-text focus:outline-none block w-full h-11 border-b-2 border-gray-400 text-lg leading-loose"
                  required
                />
              </div>
              <div className="form-field">
                <label
                  for="message"
                  className="label bottom-1 left-2 text-gray-400 text-lg leading-loose transition-transform duration-200 ease-in-out"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="input-text focus:outline-none block w-full h-24 border-b-2 border-gray-400 text-lg leading-loose"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="text-lg border-2 font-semibold border-[#261141] px-3 py-2 hover:border-[#40b298] text-white bg-[#261141] rounded-xl hover:bg-[#40b298] transition-all duration-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
