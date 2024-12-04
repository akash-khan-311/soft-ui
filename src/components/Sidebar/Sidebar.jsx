"use client";

import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose, MdMenuBook } from "react-icons/md";
import { RiSettings4Fill } from "react-icons/ri";
import ActiveLink from "../Shared/ActiveLink";
import Link from "next/link";
import Hamburger from "hamburger-react";
const componentsItems = [
  "Accordion",
  "Alert",
  "Avatar",
  "Badge",
  "Button",
  "Card",
  "CTA",
  "Carousel",
  "Checkbox",
  "Drawer",
  "Dropdown",
  "Error ",
  "Form",
  "Footer",
  "Hamburger",
  "Hero",
  "Input",
  "Navbar",
  "Modal",
  "Pagination",
  "Progress",
  "Skeleton",
  "Range-Slider",
  "Spinner",
  "SpeedDial",
  "Stats",
  "Tab",
  "Table",
  "Testimonials",
  "Toggle",
  "Tooltip",
];
const Sidebar = () => {
  const [docOpen, setDocOpen] = useState(false);
  const [componentOpen, setComponentOpen] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const handleToggle = () => {
    setIsActive((prevState) => !prevState);
  };

  const handleComponentNavOpen = () => {
    setComponentOpen(!componentOpen);
  };

  const handleDocNavOpen = () => {
    setDocOpen(!docOpen);
  };
  const handleLink = (e) => {
    e.stopPropagation();
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="menu z-20">
        {/* <button
          onClick={handleToggle}
          className="mobile-menu-button z-50  p-4 focus:outline-none  text-orange-600 fixed top-0  xl:hidden right-1"
        >
          {isActive ? (
            <GiHamburgerMenu className="text-3xl" />
          ) : (
            <MdClose className="text-3xl" />
          )}
        </button> */}
        <div className=" mobile-menu-button z-50  p-4 focus:outline-none  text-orange-600 fixed top-0  xl:hidden right-1">
          <Hamburger toggled={isActive} toggle={handleToggle} />
        </div>
      </div>
      <div
        className={` components-sidebar backdrop-blur-xl bg-white/10 fixed top-[0px] z-[20] ${
          !isActive && "-translate-x-full"
        }  xl:translate-x-0 xl:w-[240px]  select-none px-2 block transition-all overflow-scroll`}
      >
        <div className="flex h-full w-full flex-col space-y-1">
          {/* docs container */}
          <div className="flex flex-col px-4 pt-10  text-lg text-white ">
            <div onClick={handleDocNavOpen} className="text-2xl">
              <div className="flex justify-between items-center border px-4 py-2 rounded-md ">
                <div className="flex items-center cursor-pointer">
                  <FaAngleDown
                    className={`transition-all text-sm mr-3 duration-300 ease-in-out text-yellow-900  ${
                      docOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />

                  <span className="text-sm leading-2 tracking-wide">
                    Getting Started
                  </span>
                </div>
                <MdMenuBook className="text-sm" />{" "}
              </div>

              <div
                onClick={(e) => e.stopPropagation()}
                className={`transition-all duration-300 ease-in-out grid ml-3  ${
                  docOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : " grid grid-rows-[0fr] opacity-0"
                } `}
              >
                <div className="my-2 flex flex-col overflow-hidden text-sm leading-2 tracking-wide space-y-3 ">
                  <ActiveLink address={`/`} label={"Introduction"} />
                  <ActiveLink address={`/components`} label={"Quick Start"} />
                </div>
              </div>
            </div>
          </div>
          {/* components container */}
          <div className="flex flex-col px-4 text-lg ">
            <div onClick={handleComponentNavOpen} className="text-2xl">
              <div className="flex justify-between items-center border px-4 py-2 rounded-md overflow-hidden">
                <div className="flex items-center ">
                  <FaAngleDown
                    className={`transition-all text-sm duration-300 mr-3 ease-in-out text-yellow-900  ${
                      componentOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />

                  <span className="text-sm leading-2 tracking-wide text-white">
                    Components
                  </span>
                </div>
                <RiSettings4Fill className=" text-sm text-white" />{" "}
              </div>

              <div
                onClick={(e) => e.stopPropagation()}
                className={`transition-all duration-300 pb-10 ease-in-out grid ml-3  ${
                  componentOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : " grid grid-rows-[0fr] opacity-0"
                } `}
              >
                <div className="my-2 flex flex-col overflow-hidden text-sm leading-2 tracking-wide space-y-3 ">
                  {componentsItems.map((ItemName, i) => (
                    <ActiveLink
                      key={i}
                      address={`/components/${ItemName.toLowerCase()}`}
                      label={ItemName}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
