import React from "react";
import Image from "next/image";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";

function OurClients() {
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
        <div className="md:w-1/2 border z-0  overflow-hidden !border-darkGray rounded-[17px]">
          <div className="flex flex-col gap-5 sm:gap-6 p-4 sm:p-6 clients-card-1">
            <div className="relative">
              <HeroVideoDialog
                className="dark:hidden block !z-0"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                thumbnailSrc="/images/client-1.png"
                thumbnailAlt="Hero Video"
              ></HeroVideoDialog>
            </div>
            <div>
              <Image
                src="/images/sign.png"
                width={150}
                height={50}
                alt="icon"
              />
            </div>
            <p className="text-dimGray text-[16px]">
              "Our results and online presence went through the roof more or
              less overnight, mind-blowing!"
            </p>
            <div className="text-dimGray text-[14px]">
              <h5 className="font-medium">Malik Shkraba</h5>
              <span className="font-normal text-[13.5px]">COO of Friday</span>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 border !z-0  overflow-hidden !border-darkGray rounded-[17px]">
          <div className="flex flex-col gap-5 sm:gap-6 p-4 sm:p-6 clients-card-2">
            <div className="relative">
              <HeroVideoDialog
                className="dark:hidden block"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                thumbnailSrc="/images/client-1.png"
                thumbnailAlt="Hero Video"
              ></HeroVideoDialog>
            </div>
            <div>
              <Image
                src="/images/toggle-title.png"
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

        
      </div>
    </div>
  );
}

export default OurClients;
