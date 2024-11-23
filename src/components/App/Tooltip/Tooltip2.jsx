"use client";
import CodeBox from "@/components/Shared/Codebox/CodeBox";
import { useState } from "react";

const Tooltip2 = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <CodeBox>
        <div className="relative flex items-center justify-center mt-10">
          {/* Target Element */}
          <div
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            className="cursor-pointer"
          >
            <button className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
              Hover me
            </button>
          </div>

          {/* Tooltip */}

          <div
            className={`${
              show ? "opacity-100 -translate-y-2" : "opacity-0"
            } absolute bottom-full mb-2 w-max max-w-xs rounded-lg bg-gray-900 p-2 text-sm text-white shadow-md 
          transition-all duration-300 ease-in-out animate-fadeIn capitalize`}
          >
            this is a helpful tooltip!
            <div className="absolute left-1/2 top-full -translate-x-1/2  border-8 border-transparent transition-all duration-300 ease-in-out  border-t-gray-900"></div>
          </div>
        </div>
      </CodeBox>
    </>
  );
};
export default Tooltip2;
