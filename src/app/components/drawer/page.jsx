import Drawer1 from "@/components/App/Drawers/Drawer1";
import Drawer2 from "@/components/App/Drawers/Drawer2";
import Drawer3 from "@/components/App/Drawers/Drawer3";
import Drawer4 from "@/components/App/Drawers/Drawer4";
export const metadata = {
  title: "Drawer | Soft UI",
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

const Drawer = () => {
  return (
    <>
      <Drawer1 />
      <Drawer2 />
      <Drawer3 />
      <Drawer4 />
    </>
  );
};
export default Drawer;
