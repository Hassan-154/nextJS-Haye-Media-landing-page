"use client";
import React, { useState } from "react";
import Image from "next/image";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import cLientData from "@/app/utility/ourClient.json";
import OurClientBottom from "./OurClientBottom";

function OurClients() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleVideoOpenChange = (isOpen) => {
    setIsVideoOpen(isOpen);
  };

  return (
    <div className="pt-[40px] sm:pt-[85px]">
      <div className=" text-lightGray px-3 text-center">
        <span className="rounded-[11px] py-[8px] px-[14px] border border-darkGray">
          Our Clients
        </span>
        <h1 className="text-[30px] leading-[35px] sm:text-[35px] sm:leading-[40px] md:text-[40px] md:leading-[45px] lg:text-[55px] lg:leading-[60px] font-normal mt-6">
          Hear it directly from <br></br>{" "}
          <span className="font-bold italic">our clients</span>
        </h1>
        <p className="text-dimGray text-[15.5px] sm:text-[16.5px] mt-3 max-w-[410px] mx-auto">
          Hear what our clients have to say. Our testimonials reflects the
          results we will bring to your brand.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-[40px] max-w-[870px] mx-auto py-[30px] sm:pt-[55px] px-3">
        {cLientData.map((clientItems, index) => (
          <div
            key={index}
            className="md:w-1/2 border overflow-hidden !border-darkGray rounded-[17px]"
          >
            <div
              className={`flex flex-col gap-5 sm:gap-6 p-4 sm:p-6 ${
                clientItems.id === 1 ? "clients-card-1" : "clients-card-2"
              }`}
            >
              <div className="relative min-h-[200px]">
                <HeroVideoDialog
                  className="dark:hidden block !-z-[0]"
                  animationStyle="from-center"
                  videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                  {...(clientItems.id === 1 &&
                    true && {
                      thumbnailSrc: clientItems.title_image,
                    })}
                  {...(clientItems.id === 2 &&
                    !isVideoOpen && {
                      thumbnailSrc: clientItems.title_image,
                    })}
                  thumbnailAlt="Hero Video"
                  onVideoOpenChange={handleVideoOpenChange}
                ></HeroVideoDialog>
              </div>
              <div>
                <Image
                  src={clientItems.signature}
                  width={150}
                  height={50}
                  alt="icon"
                />
              </div>
              <p className="text-dimGray text-[16px]">
                "These guy don't mess around. we saw results from month one. If
                you want to grow your business, look no further."
              </p>
              <div className="text-dimGray text-[14px]">
                <h5 className="font-medium">Tony Gomez</h5>
                <span className="font-normal text-[13.5px]">
                  Founder of Thursday
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <OurClientBottom/>
    </div>
  );
}

export default OurClients;
