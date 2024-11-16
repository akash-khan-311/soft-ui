const Page = () => {
  return (
    <>
      <div className=" relative ">
        <div
          aria-hidden="true"
          className="absolute inset-0 w-full h-full grid grid-cols-2 gap-20 md:gap-60 opacity-40"
        >
          <div className="blur-[100px] h-[100px] bg-gradient-to-br from-cyan-600 to-cyan-900"></div>
          <div className="blur-[100px] h-[100px] bg-gradient-to-r from-purple-600 to-purple-900"></div>
        </div>
        <div className="text-white text-center ">
          <div className="max-w-[60rem] mx-auto mt-44 relative space-y-5 z-10">
            <h1 className="lg:text-6xl md:text-4xl text-3xl font-bold logo-text leading-relaxed">
              Embark on a Journey of Design Excellence with
              <span className="">Soft UI</span> For Coding 20x Faster
            </h1>
            <p className="lg:text-xl md:text-base text-sm">
              Welcome to <span className="logo-text">Soft UI,</span> where
              innovation takes flight. Explore our meticulously crafted
              components designed to elevate your projects. Redefine UI design
              with Soft UI, one component at a time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;
