import { FloatingNav } from "../ui/floating-navbar";
import { IconHome, IconBook, IconSettings2 } from "@tabler/icons-react";
const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: (
        <IconHome className="h-7 w-7 text-neutral-500 hover:text-white transition-all duration-200 hover:scale-125" />
      ),
    },
    {
      name: "Components",
      link: "/components",
      icon: (
        <IconSettings2 className="h-7 w-7 text-neutral-500 hover:text-white transition-all duration-200 hover:scale-125" />
      ),
    },
    {
      name: "Documentations",
      link: "/documentations",
      icon: (
        <IconBook className="h-7 w-7 text-neutral-500 hover:text-white transition-all duration-200 hover:scale-125" />
      ),
    },
  ];
  return (
    <>
      <FloatingNav navItems={navItems} />
    </>
  );
};
export default Navbar;
