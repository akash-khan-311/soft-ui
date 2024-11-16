import Slider1 from "@/components/App/Range-Slider/Slider1";
import Slider2 from "@/components/App/Range-Slider/Slider2";
export const metadata = {
  title: "Range Slider | Soft UI",
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

const RangeSlider = () => {
  return (
    <>
      <Slider1 />
      <Slider2 />
    </>
  );
};
export default RangeSlider;
