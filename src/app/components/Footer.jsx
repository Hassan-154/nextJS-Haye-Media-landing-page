import React from "react";
import Button from "./Button";
import Image from "next/image";

function Footer() {
  return (
    <div className="flex flex-col gap-12 sm:gap-0 sm:flex-row sm:justify-between items-center justify-center max-w-[1100px] mx-auto px-3 py-[40px] sm:py-[70px]">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-1.5">
          <Image src="/images/logo.png" alt="now" width={34} height={34} />
          <h5 className="font-semibold text-[22.5px] text-lightGray">
            Haye Media
          </h5>
        </div>
        <div className="text-lightGray">
          <h5 className="text-[17px] font-normal mt-2">Join our newsletter</h5>
          <p className="text-dimGray max-w-[450px]">
            Sign up to our mailing list below and be the first to know about new
            updates. Don't worry, we hate spam too.
          </p>
        </div>
        <div className="flex gap-2 ">
          <input
            placeholder="Your Email Address"
            className="text-white outline-none !rounded-tl-[10px] py-2 min-w-[200px] pl-2.5 !rounded-tr-[10px] bg-[#141414]"
          />
          <Button name="Get Notified" className="!rounded-tl-[10px] !rounded-tr-[10px] !rounded-bl-[0px] !rounded-br-[0px]" />
        </div>
      </div>
      <div className="text-dimGray">
        <div className="flex sm:justify-end gap-8">
          <div>
            <h5 className="text-lightGray">Links</h5>
            <ul className=" flex flex-col gap-2.5 mt-3">
              <li>Results</li>
              <li>Services</li>
              <li>Comparison</li>
            </ul>
          </div>
          <div>
            <h5 className="text-lightGray">Information</h5>
            <ul className=" flex flex-col gap-2.5 mt-3">
              <li>FAQ</li>
              <li>Contact Us</li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
