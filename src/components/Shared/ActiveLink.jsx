"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ label, address }) => {
  const pathname = usePathname();
  const isActive = pathname === address;
  const isEnd = true;
  console.log({ label, address });
  return (
    <Link
      href={address}
      {...(isEnd && { end: "true" })}
      className={`  border-l-2  capitalize transition font-thin  duration-300 transform  hover:border-l-2 hover:border-orange-400  hover:text-white ${
        isActive
          ? "border-l-2 border-orange-400 text-white  "
          : "text-gray-400 border-l-transparent"
      }`}
    >
      <span className="mx-4 font-bold">{label}</span>
    </Link>
  );
};
export default ActiveLink;
