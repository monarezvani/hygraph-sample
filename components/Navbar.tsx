"use client";
import { useState } from "react";
import { navItems } from "@/config/Constants";
import LogoImg from "@/public/images/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="section-mobile lg:navbar">
        <div className="content-mobile lg:content ">
          <nav className="flex flex-row justify-between items-center h-20 px-16">
            <div className="flex flex-row">
              <Link href="/" prefetch>
                <figure>
                  <Image src={LogoImg} alt="Logo" width={97} height={22} />
                </figure>
              </Link>
              <ul className="items-center d-none md:flex">
                {navItems.map((item) => (
                  <li key={item.id} className="mx-2 lg:mx-8 leading-24">
                    <Link
                      className={`font-semiBold text-xs
                     ${path === item.link ? "text-primary" : "text-textColor"}  
                       `}
                      href={item.link}
                      prefetch
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="d-none md:flex md:items-center">
              <Link
                href="/login"
                className={`font-semiBold text-xs        
                ${path === "/login" ? "text-primary" : "text-textColor"} 
                `}
                prefetch
              >
                Login
              </Link>
              <Link
                className="ml-3 button-primary button-sm"
                href="/sign-up"
                prefetch
              >
                Sign up
              </Link>
            </div>
            <div className="d-block md:d-none">
              <button
                name="hamburgerButton"
                onClick={toggleMenu}
                className="text-textColor font-semiBold text-xs focus:outline-none flex flex-col justify-center items-center"
              >
                <div className="p-4 space-y-2 bg-primary rounded shadow">
                  <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
                  <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
                  <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
                </div>
              </button>
            </div>
          </nav>
          {isOpen && (
            <ul className="flex flex-col text-center md:d-none">
              {navItems.map((item) => (
                <li key={item.id} className="py-2 border-b border-primary">
                  <Link
                    className={`block px-4 py-2 font-semiBold text-xs
                    ${path === item.link ? "text-primary" : "text-textColor"}  
                    
                    `}
                    href={item.link}
                    prefetch
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li className="py-4 border-b border-primary">
                <Link
                  className={`block px-4 py-2 font-semiBold text-xs
                  ${path === "/login" ? "text-primary" : "text-textColor"}  
                  
                  `}
                  prefetch={true}
                  href="/login"
                >
                  Login
                </Link>
              </li>
              <li className="py-4 border-b border-primary">
                <Link
                  className={"button-primary button-sm"}
                  href="/sign-up"
                  prefetch
                >
                  Sign up
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}
