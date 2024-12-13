import Accordions1 from "@/components/App/Accordions/Accordions1";

import Accordion2 from "@/components/App/Accordions/Accordion2";
import Accordion3 from "@/components/App/Accordions/Accordion3";
import Accordion4 from "@/components/App/Accordions/Accordion4";
export const metadata = {
  title: "Accordion | Soft UI",
  description:
    "Soft UI React Components is a modern, reusable, and customizable library for React and Next.js. Build elegant and responsive web applications with ease using our comprehensive collection of UI components.",
  keywords:
    "Soft UI, React UI Components, Tailwind CSS, Customizable UI Library, Modern UI, Reusable Components, Next.js UI Library",
  author: "Md Akash Khan",
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

const Accordion = () => {
  return (
    <>
      {/* Accordion 1 */}
      <Accordions1 />
      <Accordion2 />
      <Accordion3 />
      <Accordion4 />
    </>
  );
};

export default Accordion;
