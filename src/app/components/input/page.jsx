import Input1 from "@/components/App/Inputs/Input1";
import Input10 from "@/components/App/Inputs/Input10";
import Input11 from "@/components/App/Inputs/Input11";
import Input12 from "@/components/App/Inputs/Input12";

import Input13 from "@/components/App/Inputs/Input13";
import Input14 from "@/components/App/Inputs/Input14";

import Input2 from "@/components/App/Inputs/Input2";
import Input3 from "@/components/App/Inputs/Input3";
import Input4 from "@/components/App/Inputs/Input4";
import Input5 from "@/components/App/Inputs/Input5";
import Input6 from "@/components/App/Inputs/Input6";
import Input7 from "@/components/App/Inputs/Input7";
import Input8 from "@/components/App/Inputs/Input8";
import Input9 from "@/components/App/Inputs/Input9";
export const metadata = {
  title: "Input | Soft UI",
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

const Input = () => {
  return (
    <div>
      {/* Default Input  */}
      <Input1 />
      {/* Input with Placeholder */}
      <Input2 />
      {/* Input with button */}
      <Input3 />
      {/* Outlined Input */}
      <Input4 />
      {/* Select Input */}
      <Input12 />
      {/* Input Variants */}
      <Input5 />
      {/* Upload File Input */}
      <Input6 />
      <Input7 />
      <Input8 />
      <Input9 />
      <Input10 />
      <Input11 />
      <Input13 />
      <Input14 />
    </div>
  );
};

export default Input;
