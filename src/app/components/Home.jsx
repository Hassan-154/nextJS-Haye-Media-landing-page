import React from "react";
import Image from "next/image";
import Button from "./Button";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";

function Home() {
  return (
    <div className="text-lightGray h-[140vh] md:h-[95vh]">
      <div class="absolute flex justify-center inset-0">
        <Image src="/images/home-background.png" width={1100} height={1100} />
      </div>
      <div class="absolute top-0 left-0">
        <Image
          src="/SVGs/home-left.png"
          className="h-[100vh]"
          width={500}
          height={500}
        />
      </div>
      <div className="absolute inset-0 h-auto pt-[170px] pb-[30px] md:h-[110vh] md:py-0 max-w-[1100px] px-3 items-center mx-auto flex flex-col md:flex-row gap-[50px] md:gap-0">
        <div className="w-3/3 md:w-2/3 flex flex-col gap-5">
          <Image src="/images/Reviews.png" width={350} height={100} />
          <div>
            <h1 className="text-[30px] leading-[37px] sm:text-[35px] sm:leading-[42px] md:text-[40px] md:leading-[46px] lg:text-[55px] lg:leading-[62px] font-bold md:mr-10">
              Websites & Marketing By CRO Experts Designed For{" "}
              <span className="italic font-thin">Substantial Growth.</span>
            </h1>
            <p className="mt-2 lg:mt-1 text-[16px] sm:text-[17px] lg:text-[20px] max-w-[550px]">
              We've scaled businesses like yours to{" "}
              <span className="font-bold">over $100M+ in revenue</span>
              through our industry leading{" "}
              <span className="font-bold">CVR</span>{" "}
            </p>
          </div>
          <div className="flex gap-5">
            <Button />{" "}
            <Button
              name="Learn More"
              className="!bg-transparent border !border-darkGray"
            />
          </div>
        </div>
        <div className="w-3/3 lg:w-1/3 flex justify-end">
          <div className="relative max-w-[320px]">
            <HeroVideoDialog
              className="dark:hidden block"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
              thumbnailSrc="/images/profile.png"
              thumbnailAlt="Hero Video"
            ></HeroVideoDialog>
            <div className="absolute bottom-0">
              <Image src="/images/video-bottom.png" width={380} height={120} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
