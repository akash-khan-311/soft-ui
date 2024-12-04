import Footer1 from "@/components/App/Footers/Footer1";
import Footer10 from "@/components/App/Footers/Footer10";
import Footer11 from "@/components/App/Footers/Footer11";
import Footer2 from "@/components/App/Footers/Footer2";
import Footer3 from "@/components/App/Footers/Footer3";
import Footer4 from "@/components/App/Footers/Footer4";
import Footer5 from "@/components/App/Footers/Footer5";
import Footer6 from "@/components/App/Footers/Footer6";
import Footer7 from "@/components/App/Footers/Footer7";
import Footer8 from "@/components/App/Footers/Footer8";
import Footer9 from "@/components/App/Footers/Footer9";
export const metadata = {
  title: "Footer | Soft UI",
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

const Footer = () => {
  return (
    <div>
      {/* Copyright Footer */}
      <Footer1 />
      {/* Footer Links */}
      <Footer2 />
      {/* Footer With Icons */}
      <Footer3 />
      {/* Dark Theme footer*/}
      <Footer4 />
      {/* Footer With Form */}
      <Footer5 />
      {/* Advanced Footer */}
      <Footer6 />
      <Footer7 />
      {/* Blue theme footer */}
      <Footer8 />
      <Footer9 />
      <Footer10 />
      <Footer11 />
    </div>
  );
};

export default Footer;
