import Stats1 from "@/components/App/Stats/Stats1";
import Stats2 from "@/components/App/Stats/Stats2";
import Stats3 from "@/components/App/Stats/Stats3";
import Stats4 from "@/components/App/Stats/Stats4";
export const metadata = {
  title: "Stats | Soft UI",
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

const Stats = () => {
  return (
    <div>
      <Stats1 />
      <Stats2 />
      <Stats3 />
      <Stats4 />
    </div>
  );
};
export default Stats;
