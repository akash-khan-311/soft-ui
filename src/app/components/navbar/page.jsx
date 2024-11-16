import Navbar1 from "@/components/App/Navbar/Navbar1";
import Navbar2 from "@/components/App/Navbar/Navbar2";
import Navbar3 from "@/components/App/Navbar/Navbar3";
import Navbar4 from "@/components/App/Navbar/Navbar4";
import Navbar5 from "@/components/App/Navbar/Navbar5";
import Navbar6 from "@/components/App/Navbar/Navbar6";
import Navbar7 from "@/components/App/Navbar/Navbar7";
import Navbar8 from "@/components/App/Navbar/Navbar8";
import Navbar9 from "@/components/App/Navbar/Navbar9";
export const metadata = {
  title: "Navbar | Soft UI",
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

const Navbar = () => {
  return (
    <div className="flex flex-col justify-center items-start">
      {/* Basic Navbar */}
      <Navbar1 />
      {/* Between Nvbar */}
      <Navbar2 />
      {/* Navbar With Buttons */}
      <Navbar3 />
      {/* Navbar Without Routes */}
      <Navbar4 />
      {/* Dropdown Navbar */}
      <Navbar5 />
      {/* Responsive Navbar */}
      <Navbar9 />
      <Navbar6 />
      {/*  */}
      <Navbar7 />
      <Navbar8 />
    </div>
  );
};

export default Navbar;
