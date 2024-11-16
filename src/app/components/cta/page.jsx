import CTA1 from "@/components/App/CTA/CTA1";
import CTA2 from "@/components/App/CTA/CTA2";
import CTA3 from "@/components/App/CTA/CTA3";
export const metadata = {
  title: "CTA | Soft UI",
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

const CTA = () => {
  return (
    <>
      <CTA1 />
      <CTA2 />
      <CTA3 />
    </>
  );
};
export default CTA;
