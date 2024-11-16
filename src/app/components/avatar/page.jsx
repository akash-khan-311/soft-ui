import Avatar4 from "@/components/App/Avatars/Avatar4";
import Avatar5 from "@/components/App/Avatars/Avatar5";
import Avatar6 from "@/components/App/Avatars/Avatar6";

import Avatars2 from "@/components/App/Avatars/Avatars2";
import Avatars3 from "@/components/App/Avatars/Avatars3";

import Avatars1 from "@/components/App/Avatars/Avatars1";
export const metadata = {
  title: "Avatar | Soft UI",
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

const Avatar = () => {
  return (
    <div className=" justify-center items-center gap-5">
      {/* Avatar-1 */}
      <Avatars1 />
      <Avatars2 />
      <Avatars3 />
      <Avatar4 />
      <Avatar5 />
      <Avatar6 />
    </div>
  );
};

export default Avatar;
