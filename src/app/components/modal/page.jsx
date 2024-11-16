/* eslint-disable react/no-unescaped-entities */
import Modal1 from "@/components/App/Modals/Modal1";
import Modal2 from "@/components/App/Modals/Modal2";
import Modal3 from "@/components/App/Modals/Modal3";
import Modal4 from "@/components/App/Modals/Modal4";
export const metadata = {
  title: "Modal | Soft UI",
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

const Modal = () => {
  return (
    <div>
      {/* Default Modal */}
      <Modal1 />
      {/* Large Modal */}
      <Modal2 />
      {/* Background Blur Modal */}
      <Modal3 />
      <Modal4 />
    </div>
  );
};

export default Modal;
