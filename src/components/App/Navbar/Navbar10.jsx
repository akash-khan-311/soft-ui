"use client";
import CodeBox from "@/components/Shared/Codebox/CodeBox";
import { useState } from "react";

const Navbar10 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };
  return (
    <>
      <CodeBox>
        <nav className=" text-white">
          <div className="  px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <a href="#!" className="text-2xl font-bold">
                  <img alt="logo" src="/logo.png" className="h-8 w-8" />
                </a>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex  space-x-8 bg-slate-800">
                <a href="#!" className="hover:text-gray-300">
                  Home
                </a>
                <a href="#!" className="hover:text-gray-300">
                  About
                </a>
                <a href="#!" className="hover:text-gray-300">
                  Services
                </a>
                <a href="#!  aaa" className="hover:text-gray-300">
                  Contact
                </a>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden z-50">
                <button
                  onClick={toggleMenu}
                  className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-transform duration-300  ease-in-out transform ${
              isOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-full opacity-0 "
            }`}
          >
            <div className="space-y-2 px-4 py-4 bg-slate-800">
              <a href="#!" className="block hover:text-gray-300">
                Home
              </a>
              <a href="#!" className="block hover:text-gray-300">
                About
              </a>
              <a href="#!" className="block hover:text-gray-300">
                Services
              </a>
              <a href="#!" className="block hover:text-gray-300">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </CodeBox>
    </>
  );
};
export default Navbar10;
