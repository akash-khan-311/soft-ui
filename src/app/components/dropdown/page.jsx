import Dropdown2 from "@/components/App/DropDown/DropDown2";
import Dropdown1 from "@/components/App/DropDown/Dropdown1";
import Dropdown3 from "@/components/App/DropDown/Dropdown3";
export const metadata = {
  title: "Dropdown | Soft UI",
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

const Dropdown = () => {
  return (
    <>
      <Dropdown1 />
      <Dropdown2 />
      <Dropdown3 />
    </>
  );
};
export default Dropdown;
