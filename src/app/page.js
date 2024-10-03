"use client";
import { useEffect } from "react";
import BrandLogo from "./components/BrandLogo";
import Business from "./components/Business";
import Comparison from "./components/Comparison";
import FAQ from "./components/FAQ";
import Home from "./components/Home";
import OurClients from "./components/OurClients";
import Process from "./components/Process";
import Service from "./components/Service";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function page() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className="relative">
        <div>
          <Home />
          <BrandLogo />
          <OurClients />
        </div>
        <div className="absolute top-[30vh] right-0 !-z-[100]">
          <Image
            src="/SVGs/home-right.png"
            className="min-h-[100vh]"
            width={500}
            height={600}
            alt="svg"
          />
        </div>
      </div>
      <Service />
      <Process />
      <Comparison />
      <Business />
      <FAQ />
    </>
  );
}
