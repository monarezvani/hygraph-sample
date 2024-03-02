import { navItems } from "@/config/Constants";
import LogoImg from "@/public/images/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
export const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center h-20 px-16">
      <div className="flex flex-row">
        <ul className="flex flex-row items-center ">
          <Image
            src={LogoImg}
            alt="Logo"
            width={97}
            height={22}
            className="mx-8"
          />

          {navItems.map((item) => (
            <li key={item.id} className="mx-8 leading-24">
              <Link
                className="text-textColor font-semiBold text-xs "
                href={item.link}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Link
          className=" text-textColor font-semiBold text-xs mx-8"
          href="/login"
        >
          Login
        </Link>
        <Link
          className=" mx-8 button max-[640px]:button-sm max-[768px]:button-md max-[1280px]:button-xl max-[1536px]:button-lg button-primary "
          href="/signUp"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
