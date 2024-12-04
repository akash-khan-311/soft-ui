"use client";
import { useState } from "react";
import CodeBox from "@/components/Shared/Codebox/CodeBox";

const Navbar6 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLists = [
    { name: "Home" },
    { name: "Service" },
    { name: "Blog" },
    { name: "Contact" },
  ];
  return (
    <>
      <CodeBox
        text={"Responsive Navbar"}
        stringCode={`
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLists = [
    { name: "Home" },
    { name: "Service" },
    { name: "Blog" },
    { name: "Contact" },
  ];
  
  return (
    <div className="shadow-md w-full">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="cursor-pointer">
          <span className="text-4xl font-bold text-gray-800">
            Soft <span className="text-orange-600">UI</span>
          </span>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-8 top-6 cursor-pointer md:hidden"
        >
           {!isOpen ? (
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 6.5H19V8H5V6.5Z" fill="#1F2328" />
                  <path d="M5 16.5H19V18H5V16.5Z" fill="#1F2328" />
                  <path d="M5 11.5H19V13H5V11.5Z" fill="#1F2328" />
                </svg>
              ) : (
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 10.9394L16.9697 5.96961L18.0304 7.03027L13.0606 12L18.0303 16.9697L16.9697 18.0304L12 13.0607L7.03045 18.0302L5.96979 16.9696L10.9393 12L5.96973 7.03042L7.03039 5.96976L12 10.9394Z"
                    fill="#1F2328"
                  />
                </svg>
              )}
        </div>
        <ul
          className={\`md:flex md:items-center md:pb-0 md:pt-0 pt-4 pb-10 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in \${isOpen ? " md:translate-y-0 translate-y-3 opacity-100" : " -translate-y-full  md:translate-y-0"} md:opacity-100 opacity-0\`}
        >
          {navLists.map((items) => (
            <li
              className="transition-all ease-in-out duration-150 hover:text-orange-600 text-gray-800 cursor-pointer text-lg md:ml-8 md:my-0 my-4"
              key={items.name}
            >
              {items.name}
            </li>
          ))}
          <button className="text-white font-medium text-base inline-block outline-none md:ml-8 cursor-pointer  transition-shadow bg-gradient-to-br from-blue-300 to-blue-700 hover:from-blue-400 hover:to-blue-800 hover:shadow-md active:shadow-inner active:translate-y-0.1 transform-gpu border-none rounded-md px-4 py-2">
            Get Started
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;`}
      >
        <div className="shadow-md w-full relative ">
          <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
            <div className="cursor-pointer">
              <span className="text-4xl font-bold text-gray-800">
                Soft <span className="text-orange-600">UI</span>
              </span>
            </div>

            <div
              onClick={() => setIsOpen(!isOpen)}
              className="absolute right-8 top-4 cursor-pointer md:hidden"
            >
              {!isOpen ? (
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 6.5H19V8H5V6.5Z" fill="#1F2328" />
                  <path d="M5 16.5H19V18H5V16.5Z" fill="#1F2328" />
                  <path d="M5 11.5H19V13H5V11.5Z" fill="#1F2328" />
                </svg>
              ) : (
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 10.9394L16.9697 5.96961L18.0304 7.03027L13.0606 12L18.0303 16.9697L16.9697 18.0304L12 13.0607L7.03045 18.0302L5.96979 16.9696L10.9393 12L5.96973 7.03042L7.03039 5.96976L12 10.9394Z"
                    fill="#1F2328"
                  />
                </svg>
              )}
            </div>
            <ul
              className={`md:flex md:items-center md:pb-0 md:pt-0 pt-4 pb-10 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in overflow-hidden ${
                isOpen
                  ? " md:translate-y-0 translate-y-3 opacity-100"
                  : " -translate-y-full  md:translate-y-0"
              } md:opacity-100 opacity-0`}
            >
              {navLists.map((items) => (
                <li
                  className="transition-all ease-in-out duration-150 hover:text-orange-600 text-gray-800 cursor-pointer text-lg md:ml-8 md:my-0 my-4"
                  key={items.name}
                >
                  {items.name}
                </li>
              ))}
              <button className="text-white font-medium text-base inline-block outline-none md:ml-8 cursor-pointer  transition-shadow bg-gradient-to-br from-blue-300 to-blue-700 hover:from-blue-400 hover:to-blue-800 hover:shadow-md active:shadow-inner active:translate-y-0.1 transform-gpu border-none rounded-md px-4 py-2">
                Get Started
              </button>
            </ul>
          </div>
        </div>
      </CodeBox>
    </>
  );
};

export default Navbar6;
