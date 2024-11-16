import Link from "next/link";
export const metadata = {
  title: "Not Found | Soft UI",
  description:
    "Soft UI React Components is a modern, reusable, and customizable library for React and Next.js. Build elegant and responsive web applications with ease using our comprehensive collection of UI components.",
  keywords:
    "Soft UI, React UI Components, Tailwind CSS, Customizable UI Library, Modern UI, Reusable Components, Next.js UI Library",
  author: "Md Akash Ali",
  openGraph: {
    type: "website",
    url: "https://softui-react.vercel.app",
    title:
      "Soft UI React Components | Modern, Reusable, and Customizable UI Library",
    description:
      "Soft UI React Components is a modern, reusable, and customizable library for React and Next.js. Build elegant and responsive web applications with ease using our comprehensive collection of UI components.",

    site_name: "Soft UI",
  },
};

const NotFoundPage = () => {
  return (
    <>
      <div className="w-full mt-20 ">
        <div className="py-10 mx-5 lg:mx-0">
          <div className="md:w-3/4 w-full flex flex-col items-center justify-center mx-auto px-3 lg:px-0  backdrop-blur-md bg-white/10 py-10 rounded-xl shadow-lg shadow-cyan-600">
            <h1 className="text-white text-4xl md:text-5xl lg:text-7xl text-center logo-text tracking-wide h-full font-bold lg:w-3/4 mx-auto">
              Keep Supporting Us , We Will Coming Very Soon
            </h1>
            <Link to={"/components"}>
              <button
                className="mx-auto flex justify-center my-10"
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
