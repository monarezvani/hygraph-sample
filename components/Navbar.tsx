"use client";
import { useState } from "react";
import { navItems } from "@/config/Constants";
import LogoImg from "@/public/images/Logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="section-mobile lg:navbar">
        <div className="content-mobile lg:content ">
          <nav className="flex flex-row justify-between items-center h-20 px-16">
            <div className="flex flex-row">
              <div>
                <Image src={LogoImg} alt="Logo" width={97} height={22} />
              </div>
              <ul className="items-center d-none md:flex">
                {navItems.map((item) => (
                  <li key={item.id} className="mx-2 lg:mx-8 leading-24">
                    <Link
                      className="px-8 text-textColor font-semiBold text-xs "
                      href={item.link}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="d-none md:flex md:items-center">
              <Link
                className="mx-4 lg:mx-8 text-textColor font-semiBold text-xs"
                href="/login"
              >
                Login
              </Link>
              <Link
                className="mx-2 lg:mx-8 button-primary button-sm"
                href="/signUp"
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
            {isOpen && (
              <ul className="d-block md:d-none">
                {navItems.map((item) => (
                  <li key={item.id} className="py-2">
                    <Link
                      className="block px-4 py-2 text-textColor font-semiBold text-xs"
                      href={item.link}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </nav>
          {/* <nav className="px-8">
          <div className="content flex flex-row justify-between items-center">
            <div className="flex flex-row">
              <div className="flex flex-row items-center">
                <Image
                  src={LogoImg}
                  alt="Logo"
                  width={97}
                  height={22}
                  className="mr-8"
                />
                <ul className="flex flex-row items-center">
                  {navItems.map((item) => (
                    <li key={item.id} className="mx-8 leading-24">
                      <Link
                        className=" mx-8 text-textColor font-semiBold text-xs"
                        href={item.link}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:hidden">
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
              </div>
              <div className="hidden md:flex">
                <Link
                  className="text-textColor font-semiBold text-xs mx-8"
                  href="/login"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
          {isOpen && (
            <ul className="md:hidden">
              {navItems.map((item) => (
                <li key={item.id} className="py-2">
                  <Link
                    className="block px-4 py-2 text-textColor font-semiBold text-xs"
                    href={item.link}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </nav> */}
        </div>
      </div>
    </header>
  );
}
