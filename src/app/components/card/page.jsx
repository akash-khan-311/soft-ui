import Card1 from "@/components/App/Cards/Card1";
import Card10 from "@/components/App/Cards/Card10";
import Card11 from "@/components/App/Cards/Card11";
import Card12 from "@/components/App/Cards/Card12";
import Card13 from "@/components/App/Cards/Card13";
import Card14 from "@/components/App/Cards/Card14";
import Card15 from "@/components/App/Cards/Card15";
import Card16 from "@/components/App/Cards/Card16";
import Card17 from "@/components/App/Cards/Card17";
import Card18 from "@/components/App/Cards/Card18";

import Card2 from "@/components/App/Cards/Card2";
import Card3 from "@/components/App/Cards/Card3";
import Card4 from "@/components/App/Cards/Card4";
import Card5 from "@/components/App/Cards/Card5";
import Card6 from "@/components/App/Cards/Card6";
import Card7 from "@/components/App/Cards/Card7";
import Card8 from "@/components/App/Cards/Card8";
import Card9 from "@/components/App/Cards/Card9";
export const metadata = {
  title: "Card | Soft UI",
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

const Card = () => {
  return (
    <div className="flex flex-col justify-center gap-5">
      {/* Defualt Card */}
      <Card1 />
      {/* Card with Button */}
      <Card2 />
      {/* Card with image */}
      <Card3 />
      {/* Pricing Card */}
      <Card4 />
      {/* Gradient Card */}
      <Card5 />
      {/* Hover Effect Card */}
      <Card6 />
      {/* Horizontal Card */}
      <Card7 />
      {/* Card Grid */}
      <Card8 />
      {/* Selection Card */}
      <Card9 />
      {/* Product Card */}
      <Card16 />
      <Card10 />
      <Card18 />
      {/* Profile Card */}
      <Card11 />
      {/* Profile Card With cover Image */}
      <Card12 />
      {/* Product gird Card */}
      <Card13 />
      <Card14 />
      <Card15 />
      <Card17 />
    </div>
  );
};

export default Card;
