import Toggle1 from "@/components/App/Toggles/Toggle1";
import Toggle2 from "@/components/App/Toggles/Toggle2";
import Toggle3 from "@/components/App/Toggles/Toggle3";
export const metadata = {
  title: "Toggle | Soft UI",
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

const Toggle = () => {
  return (
    <div>
      <Toggle1 />
      <Toggle2 />
      <Toggle3 />
    </div>
  );
};
export default Toggle;
