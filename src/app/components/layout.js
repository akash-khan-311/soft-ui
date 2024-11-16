import ScrollToTop from "@/components/Shared/ScrollToTop/ScrollToTop";
import Sidebar from "@/components/Sidebar/Sidebar";
export const metadata = {
  title: "Components | Modern, Reusable, and Customizable UI Library",
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

const ComponentsLayout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <ScrollToTop />
      <div className="flex-1 relative  xl:ml-60 duration-300 overflow-x-hidden overflow-y-auto">
        <div className=" max-w-8xl  mx-auto xl:p-10 lg:p-5 mt-10">
          {children}
        </div>
      </div>
    </div>
  );
};
export default ComponentsLayout;
