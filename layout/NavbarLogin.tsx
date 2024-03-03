"use client";
import Link from "next/link";
import React, { useState } from "react";

export const NavbarLogin = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
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
      <div className="hidden md:flex  flex justify-center items-center">
        <Link
          className="text-textColor font-semiBold text-xs mx-8"
          href="/login"
        >
          Login
        </Link>
        <Link className="mx-8 button-primary button-sm " href="/signUp">
          Sign&nbsp;up
        </Link>
      </div>
    </div>
  );
};
export default NavbarLogin;
