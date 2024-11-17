const ComponentsPage = () => {
  return (
    <>
      <div className="my-auto flex justify-center items-center h-[calc(100vh-120px)] ">
        <div className="text-white text-center ">
          <div className=" max-w-5xl mx-auto">
            <h1 className=" lg:text-6xl md:text-4xl text-3xl font-bold logo-text">
              Embark on a Journey of Design Excellence with
              <span className=""> Soft UI</span> For Coding 20x Faster
            </h1>
            <p className="lg:text-xl md:text-base text-sm">
              Welcome to <span className="logo-text">Soft UI,</span> where
              innovation takes flight. Explore our meticulously crafted
              components designed to elevate your projects. Redefine UI design
              with Soft UI, one component at a time.
            </p>
            <div className="bg-gray-900 text-white p-4 max-w-[24rem] mx-auto rounded-xl mt-10">
              <p
                style={{
                  fontFamily: "'Fira Code', 'Source Code Pro', monospace",
                }}
                className="text-center"
              >
                npm install react-icons --save
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ComponentsPage;
