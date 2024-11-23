import CodeBox from "@/components/Shared/Codebox/CodeBox";

export default function Tooltip1() {
  return (
    <CodeBox
      stringCode={`{/* Tooltip 1 */}
<button className="group relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 mt-10 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
    <span className="relative px-5 py-2.5 transition-all ease-in duration-200 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Hover For Tooltip
    </span>
     <div className="ease-in duration-300 opacity-0 group-hover:block group-hover:opacity-100 transition-all">
    <div className="ease-in-out duration-500 -translate-y-4 pointer-events-none transition-all group-hover:-translate-y-16 absolute left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-sm text-center text-sm text-slate-300 before:-top-2">
      <div className="rounded-sm bg-black py-1 px-2">
        <p className="whitespace-nowrap">This is a tooltip.</p>
      </div>
      <div className="h-0 w-fit border-l-8 border-r-8 border-t-8 border-transparent border-t-black" />
    </div>
  </div>
</button>
{/* Tooltip 2 */}
<button className="mt-10 group relative mx-1 flex flex-col items-center justify-center rounded-full border border-gray-500 py-2 px-8  text-white hover:bg-gray-200 hover:text-gray-600 transition-all duration-100 ease-in-out">
  <p className=" text-center">Hover Me</p>
  <div className="[transform:perspective(50px)_translateZ(0)_rotateX(10deg)] group-hover:[transform:perspective(0px)_translateZ(0)_rotateX(0deg)] absolute bottom-4 mb-6 origin-bottom  rounded text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
    <div className="flex flex-col items-center">
      <div className="rounded bg-gray-900 p-2  text-center shadow-lg">
        Awesome Tooltip 😍
      </div>
      <div className="[clip-path:polygon(100%_50%,_0_0,_100%_0,_50%_100%,_0_0)] h-2 w-4 bg-gray-900" />
    </div>
  </div>
</button>`}
    >
      <div className="flex justify-evenly items-center mt-10">
        {/* Tooltip 1 */}
        <button className="group relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 mt-10 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-200 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Hover For Tooltip
          </span>
          <div className="ease-in duration-300 opacity-0 group-hover:block group-hover:opacity-100 transition-all">
            <div className="ease-in-out duration-500 -translate-y-4 pointer-events-none transition-all group-hover:-translate-y-16 absolute left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-sm text-center text-sm text-slate-300 before:-top-2">
              <div className="rounded-sm bg-black py-1 px-2">
                <p className="whitespace-nowrap">This is a tooltip.</p>
              </div>
              <div className="h-0 w-fit border-l-8 border-r-8 border-t-8 border-transparent border-t-black" />
            </div>
          </div>
        </button>
        {/* Tooltip 2 */}
        <button className="mt-10 group relative mx-1 flex flex-col items-center justify-center rounded-full border border-gray-500 py-2 px-8  text-white hover:bg-gray-200 hover:text-gray-600 transition-all duration-100 ease-in-out">
          <p className=" text-center">Hover Me</p>

          <div className="[transform:perspective(50px)_translateZ(0)_rotateX(10deg)] group-hover:[transform:perspective(0px)_translateZ(0)_rotateX(0deg)] absolute bottom-4 mb-6 origin-bottom  rounded text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
            <div className="flex flex-col items-center">
              <div className="rounded bg-gray-900 p-2  text-center shadow-lg">
                Awesome Tooltip 😍
              </div>
              <div className="[clip-path:polygon(100%_50%,_0_0,_100%_0,_50%_100%,_0_0)] h-2 w-4 bg-gray-900" />
            </div>
          </div>
        </button>
      </div>
    </CodeBox>
  );
}
