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
      <div className="flex flex-col md:flex-row gap-[40px] max-w-[900px] mx-auto py-[30px] sm:pt-[55px] px-3">
        {serviceData.map((serviceItem) => (
          <div className="md:w-1/2">
            <div>
              {" "}
              <div className="flex items-center justify-center gap-2.5">
                {serviceItem.logo && (
                  <Image
                    src={serviceItem.logo}
                    width={35}
                    height={35}
                    alt={serviceItem.heading}
                  />
                )}
                <h5 className="text-lightGray text-[22px] font-medium">
                  {serviceItem.heading}
                </h5>
              </div>
              <ul className="flex flex-col gap-[13px] border !border-darkGray p-4 sm:p-6 rounded-[15px] mt-[20px]">
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
              <div className="flex justify-end">
                <Image
                  src="/images/circle-correct.png"
                  width={45}
                  height={45}
                  alt="icon"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
