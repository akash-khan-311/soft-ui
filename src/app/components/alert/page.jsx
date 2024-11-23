import Alert1 from "@/components/App/Alerts/Alert1";
import Alert2 from "@/components/App/Alerts/Alert2";
import Alert3 from "@/components/App/Alerts/Alert3";
import Alert4 from "@/components/App/Alerts/Alert4";
export const metadata = {
  title: "Alert | Soft UI",
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

const Alert = () => {
  return (
    <div>
      <Alert1 />
      <Alert2 />
      <Alert4 />
      <Alert3 />
    </div>
  );
};
export default Alert;
