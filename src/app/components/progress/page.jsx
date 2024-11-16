import Progress1 from "@/components/App/Progress/Progress1";
import Progress2 from "@/components/App/Progress/Progress2";
import Progress3 from "@/components/App/Progress/Progress3";
import Progress4 from "@/components/App/Progress/Progress4";
import Progress5 from "@/components/App/Progress/Progress5";
import Progress6 from "@/components/App/Progress/Progress6";
export const metadata = {
  title: "Progress | Soft UI",
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

const Progress = () => {
  return (
    <>
      <Progress1 />
      <Progress2 />
      <Progress3 />
      <Progress4 />
      <Progress5 />
      <Progress6 />
    </>
  );
};
export default Progress;
