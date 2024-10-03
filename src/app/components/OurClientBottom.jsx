"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

function OurClientBottom() {
  const [width, setWidth] = useState(window.innerWidth);

  console.log(width);

  useEffect(() => {
    // Function to update state on window resize
    const handleResize = () => setWidth(window.innerWidth);

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="max-w-[870px] mx-auto">
      <div
        className={`flex flex-col sm:flex-row border mx-3 p-4 rounded-[17px] sm:p-6 border-darkGray ${
          width >= 640 ? "" : "items-center"
        }`}
      >
        <div className="sm:w-1/3">
          <div className="mt-4">
            <span className="rounded-[11px] py-[8px] px-[28px] font-medium text-lightGray border border-darkGray">
              Results
            </span>
          </div>

          <div className="flex flex-col h-full">
            <Image
              className="mt-auto pt-10 sm:pb-12 ml-[33px]"
              src="/images/text.png"
              width={270}
              height={270}
              alt="image"
            />
          </div>
        </div>
        <div className="sm:w-1/3">
          <Image
            src="/images/organic.png"
            width={270}
            height={270}
            alt="image"
          />
        </div>
        <div className="sm:w-1/3">
          <Image src="/images/graph.png" width={270} height={270} alt="image" />
        </div>
      </div>
    </div>
  );
}

export default OurClientBottom;
