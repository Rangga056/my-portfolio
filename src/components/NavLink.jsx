"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link
      className={`rounded p-1 px-2 underline decoration-transparent decoration-2 underline-offset-8 transition-all duration-300 ease-in-out ${pathName !== link.url && "hover:decoration-black"} ${pathName === link.url && "bg-black text-white"}`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
