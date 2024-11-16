import ErrorPage1 from "@/components/App/Error Pages/ErrorPage1";
import ErrorPage2 from "@/components/App/Error Pages/ErrorPage2";
import ErrorPage3 from "@/components/App/Error Pages/ErrorPage3";
import ErrorPage4 from "@/components/App/Error Pages/ErrorPage4";
export const metadata = {
  title: "Error | Soft UI",
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

const ErrorPages = () => {
  return (
    <>
      <ErrorPage1 />
      <ErrorPage2 />
      <ErrorPage3 />
      <ErrorPage4 />
    </>
  );
};
export default ErrorPages;
