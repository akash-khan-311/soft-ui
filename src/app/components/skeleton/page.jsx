import Skeleton1 from "@/components/App/Skeleton/Skeleton1";
import Skeleton2 from "@/components/App/Skeleton/Skeleton2";
import Skeleton3 from "@/components/App/Skeleton/Skeleton3";
import Skeleton4 from "@/components/App/Skeleton/Skeleton4";
import Skeleton5 from "@/components/App/Skeleton/Skeleton5";
import Skeleton6 from "@/components/App/Skeleton/Skeleton6";
export const metadata = {
  title: "Skeleton | Soft UI",
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

const Skeleton = () => {
  return (
    <>
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold text-center hidden md:block mt-20">
        Explore Your Best Skeleton
      </h1>
      <Skeleton1 />
      <Skeleton2 />
      <Skeleton3 />
      <Skeleton4 />
      <Skeleton5 />
      <Skeleton6 />
    </>
  );
};
export default Skeleton;
