import React from "react";
import Image from "next/image";
import processData from "@/app/utility/process.json";

export function Process() {
  console.log("data", processData);

  return (
    <div className="pt-[30px] sm:pt-[70px]">
      <div>
        <div className="py-[15px] sm:py-[20px] text-lightGray px-3 text-center">
          <span className="rounded-[11px] py-[8px] px-[14px] border border-darkGray">
           Process
          </span>
          <h1 className="text-[30px] leading-[35px] sm:text-[35px] sm:leading-[40px] md:text-[40px] md:leading-[45px] lg:text-[55px] lg:leading-[60px] max-w-[680px] mx-auto font-normal mt-6">
          Our simple 3-step process
          will guarantee you results.
          </h1>
          <p className="text-dimGray text-[15.5px] sm:text-[16.5px] mt-5 max-w-[450px] mx-auto">From Google ads, to Meta ads, to TikTok ads, and even content 
          creation, we've got you covered on everything front.</p>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col gap-[20px] sm:gap-0 justify-between text-center max-w-[1000px] mx-auto py-[30px] sm:py-[45px]">
        {processData.map((processItems, index) => (
          <div className="flex flex-col gap-2 sm:gap-4" key={index}>
            <Image
              className="mx-auto"
              src={processItems.logo}
              width={65}
              height={65}
            />
            <h5 className="text-lightGray text-[18.5px] font-normal">
              {processItems.title}
            </h5>

            <p className="text-dimGray sm:max-w-[230px] mx-auto text-[16px]">
              {processItems.paragraph}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Process;
