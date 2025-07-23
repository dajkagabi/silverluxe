import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logos.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-5 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/" onClick={() => setIsOpen(false)}>
            <div className="relative h-10 overflow-visible pl-10">
              <img
                src={logo}
                alt="SilverLuxe Logó"
                className="h-16 -mt-4 md:h-20 md:-mt-5"
              />
            </div>
          </Link>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link
            to="/kollekcio"
            className="text-[#121A29] hover:text-[#1E2836] transition duration-300"
          >
            Kollekció
          </Link>
          <Link
            to="/rolunk"
            className="text-[#121A29] hover:text-[#1E2836] transition duration-300"
          >
            Rólunk
          </Link>
          <Link
            to="/kapcsolat"
            className="text-[#121A29] hover:text-[#1E2836] transition duration-300"
          >
            Kapcsolat
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#121A29] hover:text-[#1E2836] focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link
            to="/kollekcio"
            className="block text-[#121A29] hover:text-[#1E2836] px-3 py-2 rounded-md text-base font-medium transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Kollekció
          </Link>
          <Link
            to="/rolunk"
            className="block text-[#121A29] hover:text-[#1E2836] px-3 py-2 rounded-md text-base font-medium transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Rólunk
          </Link>
          <Link
            to="/kapcsolat"
            className="block text-[#121A29] hover:text-[#1E2836] px-3 py-2 rounded-md text-base font-medium transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Kapcsolat
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
