"use client";
import { useState } from "react";
import CodeBox from "@/components/Shared/Codebox/CodeBox";
const Navbar8 = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <CodeBox
        stringCode={`import { useState } from "react";
const Navbar = ()=> {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="border-b bg-gray-400">
          <div className="container relative max-w-screen-lg mx-auto flex justify-between h-14">
            {/* Brand */}
            <a
              href="#!"
              className="flex items-center cursor-pointer  px-2 ml-3"
            >
              {/* Logo */}
              <div className="rounded bg-purple-400 text-white font-bold px-4 flex justify-center text-3xl pt-0.5">
                Soft UI
              </div>
            </a>
            {/* Navbar Toggle Button */}
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="block md:hidden text-black p-2 rounded hover:border focus:border focus:bg-gray-100 my-2 mr-5"
              type="button"
              aria-controls="navbar-main"
              aria-expanded={showMenu}
              aria-label="Toggle navigation"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
            {/* Nav Links */}
            <ul
              className={\`md:flex text-black text-base mr-3 origin-top z-10 \${
                showMenu
                  ? "block absolute top-14 border-b bg-white w-full p-2"
                  : "hidden"
              }\`}
              id="navbar-main"
            >
              <li
                className={\`px-3 cursor-pointer transition-all duration-300 hover:bg-purple-50 flex items-center hover:text-black \${
                  showMenu && "py-1"
                }\`}
              >
                <a href="#!">Laravel</a>
              </li>
              <li
                className={\`px-3 cursor-pointer transition-all duration-300 hover:bg-purple-50 flex items-center hover:text-black \${
                  showMenu && "py-1"
                }\`}
              >
                <a href="#!">Livewire</a>
              </li>
              <li
                className={\`px-3 cursor-pointer transition-all duration-300 hover:bg-purple-50 flex items-center hover:text-black \${
                  showMenu && "py-1"
                }\`}
              >
                <a href="#!">TailwindCSS</a>
              </li>
              <li
                className={\`px-3 cursor-pointer transition-all duration-300 hover:bg-purple-50 flex items-center hover:text-black \${
                  showMenu && "py-1"
                }\`}
              >
                <a href="#!">Alpine JS</a>
              </li>
              <li
                className={\`px-3 cursor-pointer transition-all duration-300 hover:bg-purple-50 flex items-center hover:text-black \${
                  showMenu && "py-1"
                }\`}
              >
                <a href="#!">About</a>
              </li>
            </ul>
          </div>
        </nav>
    )
}

export default Navbar;
`}
      >
        <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
            <a href="#!" className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Soft UI
              </span>
            </a>
            <div className="flex items-center lg:order-2">
              <div className="hidden mt-2 mr-4 sm:inline-block">
                <span />
              </div>
              <button className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">
                Download
              </button>

              <button
                onClick={() => setShowMenu(!showMenu)}
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="lg:hidden"
                aria-controls="mobile-menu-2"
                aria-expanded="true"
              >
                {!showMenu ? (
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
              </button>
            </div>
            <div
              className={`justify-between transform transition-all duration-300 ${
                showMenu
                  ? "translate-y-0 opacity-1"
                  : "-translate-y-full opacity-0 hidden"
              } items-center justify-betwen w-full lg:flex lg:w-auto lg:order-1`}
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a
                    href="#!"
                    className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="block py-2 pl-3 pr-4 transition-all duration-300 hover:text-white hover:bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
                  >
                    Company
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="block py-2 pl-3 pr-4 transition-all duration-300 hover:text-white hover:bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
                  >
                    Resources
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="block py-2 pl-3 pr-4 transition-all duration-300 hover:text-white hover:bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </CodeBox>
    </>
  );
};
export default Navbar8;
