import ScrollToTop from "@/components/Shared/ScrollToTop/ScrollToTop";
import Sidebar from "@/components/Sidebar/Sidebar";

const ComponentsLayout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <ScrollToTop />
      <div className="flex-1 relative  xl:ml-60 duration-300 overflow-x-hidden overflow-y-auto">
        <div className=" max-w-8xl  mx-auto xl:p-10 lg:p-5 mt-10">
          {children}
        </div>
      </div>
    </div>
  );
};
export default ComponentsLayout;
