import React from "react";
import Image from "next/image";
import brandLogoData from "@/app/utility/branchLogo.json";

function BrandLogo() {
  return (
    <div className="flex items-center justify-center max-w-[300px] md:max-w-[1100px] mx-auto py-[40px] md:py-[70px]">
      <div class="flex flex-wrap w-full items-center justify-center md:justify-between">
        {brandLogoData.map((brandList, index) => (
          <div key={index} class="flex-none w-1/2 md:w-1/6 p-[15px] md:p-0">
            <Image
              className="object-contain"
              src={brandList.url}
              alt="logo"
              width={110}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandLogo;
