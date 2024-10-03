'use client'
import React, { useState } from "react";
import menuData from "@/app/utility/navbar.json";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { FaBars, FaTimes } from "react-icons/fa"; // Import React Icons for menu toggle

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to control mobile menu visibility

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full shadow-md z-50 px-3">
      <div className="flex items-center text-lightGray bg-black max-w-[850px] mx-auto px-6 py-2.5 mt-7 border border-[#201a29] rounded-[10px]">
        <div className="flex items-center gap-1.5">
          <Image src="/images/logo.png" alt="now" width={37} height={37} />
          <h5 className="font-bold text-[15.5px]">Haye Media</h5>
        </div>
        <div className="flex-grow gap-2.5 hidden md:flex justify-center text-[15px]">
          {menuData.map((menuItems, index) => (
            <Link
              key={index}
              href={menuItems.link}
              className="mx-2 font-semibold"
            >
              {menuItems.label}
            </Link>
          ))}
        </div>
        <Button />
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-3/4 h-full bg-black bg-opacity-90 transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMobileMenu}>
            <FaTimes size={24} className="text-lightGray" />
          </button>
        </div>
        <nav className="flex flex-col items-center mt-20">
          {menuData.map((menuItems, index) => (
            <Link
              key={index}
              href={menuItems.link}
              className="my-4 text-lightGray font-semibold text-[18px]"
              onClick={toggleMobileMenu} // Close menu on link click
            >
              {menuItems.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
