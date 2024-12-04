import Carousel3 from "@/components/App/Carousel/Caousel3";
import Carousel1 from "@/components/App/Carousel/Carousel1";
import Carousel2 from "@/components/App/Carousel/Carousel2";
import Carousel4 from "@/components/App/Carousel/Carousel4";
import Carousel5 from "@/components/App/Carousel/Carousel5";
import Carousel6 from "@/components/App/Carousel/Carousel6";

export const metadata = {
  title: "Carousel | Soft UI",
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

const Carousel = () => {
  return (
    <div>
      <Carousel1 />
      <Carousel2 />
      <Carousel3 />
      <Carousel4 />
      <Carousel5 />
      <Carousel6 />
    </div>
  );
};

export default Carousel;
