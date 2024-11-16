import Badge1 from "@/components/App/Badges/Badge1";
import Badge2 from "@/components/App/Badges/Badge2";
import Badge3 from "@/components/App/Badges/Badge3";
import Badge4 from "@/components/App/Badges/Badge4";
import Badge5 from "@/components/App/Badges/Badge5";
import Badge6 from "@/components/App/Badges/Badge6";
import Badge7 from "@/components/App/Badges/Badge7";
export const metadata = {
  title: "Badge | Soft UI",
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

const Badge = () => {
  return (
    <div>
      <Badge1 />
      <Badge2 />
      <Badge3 />
      <Badge4 />
      <Badge5 />
      <Badge6 />
      <Badge7 />
    </div>
  );
};
export default Badge;
