"use client";
import { useState } from "react";
import CodeBox from "@/components/Shared/Codebox/CodeBox";

const Navbar5 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <CodeBox
        text={"Dropdown Navbar"}
        stringCode={`import { useState } from "react";
        export const Dropdown =()=> {
            const [isOpen, setIsOpen] = useState(false);
            return (
                <nav className="px-10 py-4 bg-red-50 ">
                <div className="flex justify-start gap-10 ">
                  {/* logo */}
                  <a href="">
                    <h1 className="text-4xl font-bold text-gray-800">Soft UI</h1>
                  </a>
                  <ul className="flex items-center gap-x-10 text-blue-gray-900 text-lg">
                    <li className="cursor-pointer hover:text-orange-600">Home</li>
                    <li className="cursor-pointer hover:text-orange-600">About</li>
                    <li className="relative transition-transform">
                      <div
                        onClick={() => setIsOpen(!isOpen)}
                        className="cursor-pointer  flex items-center gap-3 hover:text-orange-600"
                      >
                        <span  >Services</span>
                        {isOpen ? (
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 1024 1024"
                            className="icon"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
                              fill="#000000"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 1024 1024"
                            className="icon"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M903.232 768l56.768-50.432L512 256l-448 461.568 56.768 50.432L512 364.928z"
                              fill="#000000"
                            />
                          </svg>
                        )}
                      </div>
                      {isOpen && (
                        <ul
                          className={\`absolute z-10 top-7 transition-all ease-in-out grid duration-300 w-32 text-center \${
                            isOpen
                              ? "grid-rows-[1fr] opacity-100 duration-300"
                              : "grid-rows-[0fr] opacity-0 duration-300"
                          } mt-1 bg-white  flex flex-col p-2\`}
                        >
                          <li className="cursor-pointer hover:text-orange-600">
                            Service-1
                          </li>
                          <li className="cursor-pointer hover:text-orange-600">
                            Service-2
                          </li>
                          <li className="cursor-pointer hover:text-orange-600">
                            Service-3
                          </li>
                          <li className="cursor-pointer hover:text-orange-600">
                            Service-4
                          </li>
                        </ul>
                      )}
                    </li>
      
                    <li className="cursor-pointer hover:text-orange-600">Blog</li>
                    <li className="cursor-pointer hover:text-orange-600">Contact</li>
                  </ul>
                </div>
              </nav>
            )
        }


        `}
      >
        <nav className="px-10 py-4 bg-red-50 ">
          <div className="flex justify-start gap-10 ">
            {/* logo */}
            <a href="">
              <h1 className="text-4xl font-bold text-gray-800">Soft UI</h1>
            </a>
            <ul className="flex items-center gap-x-10 text-blue-gray-900 text-lg">
              <li className="cursor-pointer hover:text-orange-600">Home</li>
              <li className="cursor-pointer hover:text-orange-600">About</li>
              <li className="relative transition-transform">
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="cursor-pointer  flex items-center gap-3 hover:text-orange-600"
                >
                  <span>Services</span>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 1024 1024"
                    className={`icon transition-all duration-150 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
                      fill="#000000"
                    />
                  </svg>
                </div>
                {isOpen && (
                  <div
                    className={`absolute  left-0 min-w-40 mt-1 origin-top-left bg-white divide-y divide-gray-100 transition-all z-10 ease-in-out duration-300 ${
                      isOpen ? " translate-y-0" : "-translate-y-40 "
                    } shadow-lg `}
                  >
                    <div className="py-1">
                      <a
                        href="#!"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Option 1
                      </a>
                      <a
                        href="#!"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Option 2
                      </a>
                      <a
                        href="#!"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Option 3
                      </a>
                    </div>
                  </div>
                )}
              </li>

              <li className="cursor-pointer hover:text-orange-600">Blog</li>
              <li className="cursor-pointer hover:text-orange-600">Contact</li>
            </ul>
          </div>
        </nav>
      </CodeBox>
    </>
  );
};

export default Navbar5;
