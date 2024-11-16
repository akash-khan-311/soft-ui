/* eslint-disable react/no-unescaped-entities */
import Hero1 from "@/components/App/Hero/Hero1";

import { Hero2 } from "@/components/App/Hero/Hero2";
import { Hero3 } from "@/components/App/Hero/Hero3";
import Hero4 from "@/components/App/Hero/Hero4";
import Hero5 from "@/components/App/Hero/Hero5";
import Hero6 from "@/components/App/Hero/Hero6";
import Hero7 from "@/components/App/Hero/Hero7";
import Hero8 from "@/components/App/Hero/Hero8";
import Hero9 from "@/components/App/Hero/Hero9";
export const metadata = {
  title: "Hero | Soft UI",
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

const Hero = () => {
  return (
    <div>
      <h1 className="text-4xl text-white text-center font-semibold mt-10">
        Let's Explore All Hero Components
      </h1>

      <Hero9 />

      <Hero8 />
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Hero5 />
      <Hero6 />
      <Hero7 />
    </div>
  );
};

export default Hero;
