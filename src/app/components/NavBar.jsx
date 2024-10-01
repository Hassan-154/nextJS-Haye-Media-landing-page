import React from "react";
import menuData from "@/app/utility/navbar.json";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

function NavBar() {

  return (
    <div className="fixed top-0 left-0 w-full shadow-md z-50">
      <div className="flex items-center text-lightGray bg-black max-w-[850px] mx-auto px-6 py-2.5 mt-7 border border-[#201a29] rounded-[10px]">
        <div className="flex items-center gap-1.5">
          <Image src="/images/logo.png" alt="now" width={37} height={37} />
          <h5 className="font-bold text-[15.5px]">Haye Media</h5>
        </div>
        <div className="flex-grow gap-2.5 flex justify-center text-[15px]">
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
      </div>
    </div>
  );
}

export default NavBar;
