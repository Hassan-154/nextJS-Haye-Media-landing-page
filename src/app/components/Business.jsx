import React from "react";
import Button from "./Button";
import Image from "next/image";

function Business() {
  return (
    <div className="relative px-3">
      <Image
        className="absolute inset-0 mx-auto object-cover z-0"
        src="/images/business-bg.png"
        width={1000}
        height={1000}
        alt=""
      />
      <div className="business py-12 sm:py-16 max-w-[1100px] border border-darkGray mx-auto text-lightGray text-center rounded-[10px] relative z-10">
        <h1 className="text-[30px] leading-[35px] sm:text-[35px] sm:leading-[40px] md:text-[40px] md:leading-[45px] lg:text-[55px] lg:leading-[60px] max-w-[580px] mx-auto font-normal">
          Are you ready to scale your business to new heights?
        </h1>
        <p className="text-dimGray text-[15.5px] sm:text-[16.5px] mt-4 max-w-[490px] mx-auto">
          If you want to increase sales and reach a bigger, higher-quality
          audience then we’ve got you covered.
        </p>
        <Button name="Book a Call" className="mt-5" />
      </div>
    </div>
  );
}

export default Business;
