import React from "react";
import comparisonData from "@/app/utility/comparison.json";
import Image from "next/image";

export function Comparison() {
  return (
    <div className="pt-[40px] sm:pt-[85px]">
      <div className=" text-lightGray px-3 text-center">
        <span className="rounded-[11px] py-[8px] px-[14px] border border-darkGray">
          Comparison
        </span>
        <h1 className="text-[30px] leading-[35px] sm:text-[35px] sm:leading-[40px] md:text-[40px] md:leading-[45px] lg:text-[55px] lg:leading-[60px] max-w-[530px] mx-auto font-normal mt-6">
          What is different between us and other{" "}
          <span className="italic">agencies?</span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-[40px] max-w-[850px] mx-auto py-[30px] sm:pt-[55px] px-3">
        {comparisonData.map((comparisonItem) => (
          <div className="md:w-1/2">
            <div>
              {" "}
              <div className="flex items-center justify-center gap-2.5">
                {comparisonItem.logo && (
                  <Image
                    src={comparisonItem.logo}
                    width={35}
                    height={35}
                    alt={comparisonItem.heading}
                  />
                )}
                <h5 className="text-lightGray text-[22px] font-medium">
                  {comparisonItem.heading}
                </h5>
              </div>
              <ul className="flex flex-col gap-[13px] border !border-darkGray p-4 sm:p-6 rounded-[15px] mt-[20px]">
                {comparisonItem.data.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Image
                      className={` ${
                        comparisonItem.heading === "Other Agencies"
                          ? "max-h-[11px] max-w-[12px]"
                          : "max-h-[16px]"
                      }`}
                      src={comparisonItem.icon}
                      width={15}
                      height={15}
                      alt="icon"
                    />
                    <span
                      className={`text-[15.5px] font-normal ${
                        comparisonItem.heading === "Other Agencies"
                          ? "text-dimGray"
                          : "text-lightGray"
                      }`}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comparison;
