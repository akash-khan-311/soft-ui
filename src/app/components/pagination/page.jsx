import Paginatin2 from "@/components/App/Pagination/Paginatin2";
import Pagination1 from "@/components/App/Pagination/Pagination1";
import Pagination3 from "@/components/App/Pagination/Pagination3";
import Pagination4 from "@/components/App/Pagination/Pagination4";
import Pagination5 from "@/components/App/Pagination/Pagination5";
export const metadata = {
  title: "Pagination | Soft UI",
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

const Pagination = () => {
  return (
    <div className="">
      <Pagination1 />
      <Paginatin2 />
      <Pagination3 />
      <Pagination4 />
      <Pagination5 />
    </div>
  );
};

export default Pagination;
