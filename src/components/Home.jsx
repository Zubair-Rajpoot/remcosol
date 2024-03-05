import Nav from "./Nav";
import { BsArrowRight } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";
import Services from "./Services";
import Philosophy from "./Philosophy";
import CuttingEdge from "./CuttingEdge";
import Technologies from "./Technologies";
import Innovation from "./Innovation";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div
        className={`bg-cover bg-center bg-no-repeat min-h-screen min-w-full`}
        style={{
          backgroundImage: `linear-gradient(90deg, rgb(0, 0, 0) 30.2%, rgba(0, 0, 0, 0.5) 90.9%), url("/images/Header_Image.jpg")`,
        }}
      >
        <Nav />
        <div className="grid grid-cols-2">
          <div className="pl-[20%] pt-[40%]">
            <h3 className="text-white font-semibold lg:text-[33px] text-xl leading-9">
              Redefine Your Business Processes With Our Powerful Automated
              Services
            </h3>
            <TypeAnimation
              sequence={[
                "For those who need to build complex projects.",
                1000,
                "For those who are striving for quality at all stages.",
                1000,
                "For those who need technology to reveal the quality of products.",
                1000,
              ]}
              wrapper="span"
              className="text-white lg:text-[24px] text-md"
              repeat={Infinity}
            />
            <br />
            <button className="border flex flex-row justify-between items-center border-white rounded-lg p-2 mt-8 text-white">
              See More &nbsp; {<BsArrowRight size={20} />}
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <div className={`px-[10%] py-12 bg-gray-200`}>
          <h1 className={`text-3xl font-semibold text-[#261141]`}>
            <span className="border-b-4 border-[#261141]">What</span> We Do
          </h1>
          <p className={`pt-3 leading-6 text-xl`}>
            Our services are defined by quality and commitment.
          </p>
        </div>
        <Services />
        <Philosophy />
        <CuttingEdge />
        <Technologies />
        <Innovation />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};

export default Home;
