import React from "react";
import {
  BsFacebook,
  BsLinkedin,
  BsTwitter,
  BsTelephoneFill,
  BsEnvelopeFill,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className="bg-gray-200 px-[10%] py-[5%]">
        {/* 1st */}
        <div className="grid grid-cols-3">
          <div>
            <h1 className="text-3xl font-semibold text-[#261141] pt-6">
              Remcosol Technologies
            </h1>
            <h3 className="text-sm font-semibold text-[#261141] pb-2">
              Technology You can Trust
            </h3>
            <p>
              Remcosol Technologies is a forward-thinking web and AI software
              development company dedicated to shaping the future of technology.
              Our passionate team of experts specializes in creating
              cutting-edge solutions that meet the evolving needs of businesses
              across diverse industries.
            </p>
          </div>
          <div className="lg:pl-40">
            <h1 className="text-2xl font-semibold text-[#261141] py-6">
              Services
            </h1>
            <p>UI/UX Design</p>
            <p>Web development</p>
            <p>Generative AI</p>
            <p>Mobile Apps Development</p>
            <p>Analytics</p>
          </div>
          <div className="lg:pl-20">
            <h1 className="text-2xl font-semibold text-[#261141] py-6">
              Get in Touch
            </h1>
            <p className="flex ">
              {<BsTelephoneFill size={25} />} &nbsp; +92 313 0880216
            </p>
            <p className="flex ">
              {<BsEnvelopeFill size={25} />} &nbsp; info@remcosol.com
            </p>
            <br />
            <p>For Job Opportunity</p>
            <p className="flex ">
              {<BsEnvelopeFill size={25} />} &nbsp; remcosol.hr@gmail.com
            </p>
          </div>
        </div>
        <br />
        {/* 2nd */}
        <div className="grid grid-cols-2 border-t-2 border-gray-400 pt-2">
          <p>© 2023 Remcosol Technologies. All rights reserved.</p>
          <div className="flex flex-row gap-2 justify-center">
            <BsFacebook size={30} />
            <BsLinkedin size={30} />
            <BsTwitter size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
