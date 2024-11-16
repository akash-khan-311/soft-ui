import Link from "next/link";

const NotFoundPage = () => {
  return (
    <>
      <div className="w-full mt-20 ">
        <div className="py-10 mx-5 lg:mx-0">
          <div className="md:w-3/4 w-full flex flex-col items-center justify-center mx-auto px-3 lg:px-0  backdrop-blur-md bg-white/10 py-10 rounded-xl shadow-lg shadow-cyan-600">
            <h1 className="text-white text-4xl md:text-5xl lg:text-7xl text-center logo-text tracking-wide h-full font-bold lg:w-3/4 mx-auto">
              Keep Supporting Us , We Will Coming Very Soon
            </h1>
            <Link href={"/components"}>
              <button
                className="py-1 px-5 bg-pink-700 rounded-lg text-white text-lg uppercase mt-10 hover:bg-pink-900 transition-all duration-200"
                color="blue"
              >
                Please Explore Our Components
              </button>
            </Link>
          </div>
        </div>
      </div>
      ;
    </>
  );
};
export default NotFoundPage;
