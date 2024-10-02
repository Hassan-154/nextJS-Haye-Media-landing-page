"use client";
import React, { useState } from "react";
import faqData from "@/app/utility/faq.json";

function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleAccordion = (key) => {
    setOpenFAQ(openFAQ === key ? null : key);
  };

  return (
    <div className="pt-[40px] sm:pt-[85px]">
      <div className=" text-lightGray px-3 text-center">
        <span className="rounded-[11px] py-[8px] px-[14px] border border-darkGray">
          FAQ
        </span>
        <h1 className="text-[30px] leading-[35px] sm:text-[35px] sm:leading-[40px] md:text-[40px] md:leading-[45px] lg:text-[55px] lg:leading-[60px] max-w-[560px] mx-auto font-normal mt-6">
          Still not convinced?
        </h1>
        <p className="text-dimGray text-[16px] sm:text-[16.5px] mt-3 max-w-[470px] mx-auto">
          From Google ads, to Meta ads, to TikTok ads, and even content
          creation, we've got you covered on everything front.
        </p>
      </div>

      <div className="max-w-[870px] mx-auto py-[30px] sm:pt-[45px] px-3">
        <div className="accordion-group">
          {faqData.map((faqItems) => (
            <div
              key={faqItems.key}
              className={`accordion border border-solid border-darkGray py-1.5 px-2 rounded-xl transition duration-700 ${
                openFAQ === faqItems.key ? "" : ""
              } mb-4 md:py-2 md:px-3`}
            >
              <button
                className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-lightGray w-full transition duration-700 "
                onClick={() => toggleAccordion(faqItems.key)}
                aria-expanded={openFAQ === faqItems.key}
              >
                <h5 className="text-[16px]">{faqItems.question}</h5>
                <svg
                  className={`w-6 h-6 text-lightGray transition duration-700 ${
                    openFAQ === faqItems.key ? "hidden" : "block"
                  } `}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18M12 18V6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  className={`w-6 h-6 text-lightGray transition duration-700 ${
                    openFAQ === faqItems.key ? "block" : "hidden"
                  } `}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                className={`accordion-content w-full overflow-hidden pr-4 transition-[max-height] duration-1000 ease-in-out ${
                  openFAQ === faqItems.key ? "max-h-screen" : "max-h-0"
                }`}
              >
                <p className="text-[16px] text-lightGray font-normal leading-6">
                  {faqItems.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
