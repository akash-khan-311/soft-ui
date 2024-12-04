/* eslint-disable react/no-unescaped-entities */
import Form1 from "@/components/App/Forms/Form1";
import Form10 from "@/components/App/Forms/Form10";
import Form11 from "@/components/App/Forms/Form11";
import Form12 from "@/components/App/Forms/Form12";
import Form13 from "@/components/App/Forms/Form13";
import Form14 from "@/components/App/Forms/Form14";
import Form15 from "@/components/App/Forms/Form15";
import Form16 from "@/components/App/Forms/Form16";

import Form2 from "@/components/App/Forms/Form2";
import Form3 from "@/components/App/Forms/Form3";
import Form4 from "@/components/App/Forms/Form4";
import Form5 from "@/components/App/Forms/Form5";
import Form6 from "@/components/App/Forms/Form6";
import Form7 from "@/components/App/Forms/Form7";
import Form8 from "@/components/App/Forms/Form8";
import Form9 from "@/components/App/Forms/Form9";
export const metadata = {
  title: "Form | Soft UI",
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

const Form = () => {
  return (
    <div>
      <h2 className="text-5xl text-center text-white mt-20">
        Let's Explore All Form
      </h2>
      {/* Default Login Form */}
      <Form12 />
      <Form13 />
      <Form1 />
      {/*Login Form With Social Button  */}
      <Form2 />
      {/* Sign in Form */}
      <Form3 />
      {/* Login form with buttons */}
      <Form4 />
      {/* sign up form */}
      <Form5 />
      {/*  */}
      <Form6 />
      {/* Login Form */}
      <Form7 />
      <Form8 />
      <Form9 />
      {/* Shoping Cart Form */}
      <Form10 />
      <Form11 />
      <Form14 />
      <Form15 />
      <Form16 />
    </div>
  );
};

export default Form;
