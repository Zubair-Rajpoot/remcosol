import React, { useState } from "react";

function MobileMenuToggle() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      type="button"
      className={`lg:hidden text-white focus:outline-none ${
        isActive ? "active" : ""
      }`}
      onClick={handleClick}
    >
      <div
        className={`w-6 h-1 bg-white rounded-full my-2 transform transition duration-300 ease-in-out ${
          isActive ? "-rotate-45" : ""
        }`}
      />
      <div
        className={`w-6 h-1 bg-white rounded-full my-2 transform transition duration-300 ease-in-out ${
          isActive ? "opacity-0" : ""
        }`}
      />
      <div
        className={`w-6 h-1 bg-white rounded-full my-2 transform transition duration-300 ease-in-out ${
          isActive ? "rotate-45" : ""
        }`}
      />
    </button>
  );
}

export default MobileMenuToggle;
