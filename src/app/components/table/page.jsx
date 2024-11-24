import Table1 from "@/components/App/Tables/Table1";
import Table2 from "@/components/App/Tables/Table2";
import Table3 from "@/components/App/Tables/Table3";
import Table4 from "@/components/App/Tables/Table4";
import Table5 from "@/components/App/Tables/Table5";
export const metadata = {
  title: "Table | Soft UI",
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

const Table = () => {
  return (
    <div>
      <Table1 />
      <Table2 />
      <Table3 />
      <Table4 />
      <Table5 />
    </div>
  );
};
export default Table;
