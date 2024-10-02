import React from "react";
import serviceData from "@/app/utility/Services.json";
import Image from "next/image";

function Service() {
  return (
    <div className="pt-[40px] sm:pt-[85px]">
      <div className=" text-lightGray px-3 text-center">
        <span className="rounded-[11px] py-[8px] px-[14px] border border-darkGray">
          Services
        </span>
        <h1 className="text-[30px] leading-[35px] sm:text-[35px] sm:leading-[40px] md:text-[40px] md:leading-[45px] lg:text-[55px] lg:leading-[60px] max-w-[560px] mx-auto font-normal mt-6">
          How can we help you?
        </h1>
        <p className="text-dimGray text-[15.5px] sm:text-[16.5px] mt-3 max-w-[410px] mx-auto">
          Hear what our clients have to say. Our testimonials reflects the
          results we will bring to your brand.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-[40px] max-w-[870px] mx-auto py-[30px] sm:pt-[55px] px-3">
        {serviceData.map((serviceItem) => (
          <div className="relative md:w-1/2 border py-4 sm:y-6  overflow-hidden !border-darkGray rounded-[17px]">
            <div>
              <div className="px-4 sm:px-6">
                <h5 className="text-lightGray text-[33px] leading-[38px] md:text-[42px] md:leading-[45px] font-bold">
                  {serviceItem.service}
                </h5>
                <p className="text-dimGray pt-1.5 text-[15px] leading-[19px] md:text-[15.5px] md:leading-[20px]">
                  {serviceItem.description}
                </p>
              </div>
              <div className="bg-dimGray mx-2 sm:mx-4 h-[2.5px] mt-4"></div>
              <ul className="flex flex-col gap-[13px] mt-[20px] px-4 sm:px-6 ">
                {serviceItem.features.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Image
                      src="/images/g-correct.png"
                      width={27}
                      height={27}
                      alt="icon"
                    />
                    <span
                      className={`text-[14.5px] font-normal ${
                        serviceItem.heading === "Other Agencies"
                          ? "text-dimGray"
                          : "text-lightGray"
                      }`}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-end pr-4 sm:pr-6">
                <Image
                  src="/images/circle-correct.png"
                  width={43}
                  height={43}
                  alt="icon"
                />
              </div>
            </div>
            <div className="absolute top-0">
              <Image
                src="/SVGs/service-top.png"
                width={320}
                height={320}
                alt="icon"
              />
            </div>
            <div className="absolute bottom-0 right-0">
              <Image
                src="/SVGs/service-bottom.png"
                width={320}
                height={320}
                alt="icon"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
