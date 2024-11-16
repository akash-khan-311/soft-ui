import Checkbox1 from "@/components/App/Checkbox/Checkbox1";
import Checkbox2 from "@/components/App/Checkbox/Checkbox2";
import Checkbox3 from "@/components/App/Checkbox/Checkbox3";
import Checkbox4 from "@/components/App/Checkbox/Checkbox4";
import Checkbox5 from "@/components/App/Checkbox/Checkbox5";
import Checkbox6 from "@/components/App/Checkbox/Checkbox6";
export const metadata = {
  title: "Checkbox | Soft UI",
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

const Checkbox = () => {
  return (
    <div className="flex flex-col justify-center   gap-5">
      <Checkbox1 />
      <Checkbox2 />
      <Checkbox3 />
      <Checkbox4 />
      <Checkbox5 />
      <Checkbox6 />
    </div>
  );
};

export default Checkbox;
