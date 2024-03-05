import { useState, useEffect } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    console.log(isScrolled);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav
        className={`flex items-center transition-all duration-500 z-50 fixed top-0 left-0 ${
          isScrolled ? "bg-white" : "bg-transparent"
        } min-w-full min-h-fit justify-between lg:px-[10%] lg:py-[2%] px-[10%] py-[3%]  text-black`}
      >
        <a
          href="/"
          className={`text-2xl lg:text-3xl transition-all duration-500 font-semibold text-white ${
            isScrolled ? "text-[#261141]" : "text-white"
          }`}
        >
          RemcoSol Tech
        </a>
        <div className={``}>
          <ul
            className={`space-x-4 ${
              isOpen ? "lg:flex" : "hidden"
            } justify-center items-center bg-transparent list-none text-center lg:flex `}
          >
            <li>
              <a
                href=""
                className={`hover:border-b-4 p-0 transition-all duration-200 ease-in-out ${
                  isScrolled ? "text-gray-600" : "text-white"
                } font-semibold text-xl ease-in-out`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href=""
                className={`hover:border-b-4 p-0 ${
                  isScrolled ? "text-gray-600" : "text-white"
                } font-semibold text-xl`}
              >
                {" "}
                Services
              </a>
            </li>
            <li>
              <a
                href=""
                className={`hover:border-b-4 p-0 ${
                  isScrolled ? "text-gray-600" : "text-white"
                } font-semibold text-xl`}
              >
                {" "}
                Career
              </a>
            </li>
            <li>
              <a
                href=""
                className={`hover:border-b-4 p-0 ${
                  isScrolled ? "text-gray-600" : "text-white"
                } font-semibold text-xl`}
              >
                {" "}
                Demo
              </a>
            </li>
            <li>
              <button className=" text-white transition-all duration-500 font-semibold text-xl px-3 py-2 bg-[#261141] rounded-lg hover:bg-[#40b298]">
                Contact us
              </button>
            </li>
          </ul>
        </div>
        <button
          type="button"
          className={`lg:hidden text-white focus:outline-none ${
            isOpen ? "active" : ""
          }`}
          onClick={toggleMenu}
        >
          <div
            className={`w-6 h-1 bg-white rounded-full my-2 transform transition duration-300 ease-in-out ${
              isOpen ? "-rotate-45 bg-white" : ""
            }`}
          />
          <div
            className={`w-6 h-1 bg-white rounded-full my-2 transform transition duration-300 ease-in-out opacity-0 ${
              isOpen ? "" : "opacity-100"
            }`}
          />
          <div
            className={`w-6 h-1 bg-white rounded-full my-2 transform transition duration-300 ease-in-out ${
              isOpen ? "rotate-45 bg-white" : ""
            }`}
          />
        </button>
      </nav>
    </>
  );
};

export default Nav;
