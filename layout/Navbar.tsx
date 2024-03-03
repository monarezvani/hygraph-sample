import { navItems } from "@/config/Constants";
import LogoImg from "@/public/images/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import NavbarLogin from "./NavbarLogin";

export const Navbar = () => {
  return (
    <section className="section-mobile lg:navbar">
      <div className="content-mobile lg:content ">
        <nav>
          <div className="content flex flex-row justify-between items-center">
            <div className="flex flex-row items-center">
              <Image
                src={LogoImg}
                alt="Logo"
                width={97}
                height={22}
                className="mr-8"
              />
              <ul className="hidden md:flex md:flex-row md:items-center">
                {navItems.map((item) => (
                  <li key={item.id} className="mx-8 leading-24">
                    <Link
                      className="text-textColor font-semiBold text-xs"
                      href={item.link}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-textColor font-semiBold text-xs focus:outline-none flex flex-col justify-center items-center"
              >
                <div className="p-4 space-y-2 bg-primary rounded shadow">
                  <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
                  <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
                  <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
                </div>
              </button>
            </div> */}
            <NavbarLogin />
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
