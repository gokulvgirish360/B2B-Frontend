import Navbar from "../components/Navbar";
import bannerVideo from "@/assets/bannervideo.mp4";
import arrow from "@/assets/icons/arrow.svg";
import { useEffect } from "react";
import FeaturesCards from "../components/FeaturesCards";
import { cardData1, vehicleData } from "../staticContents/cardDescription";
import ather from "@/assets/ather1.png";
import charge from "@/assets/icons/charge.svg";
import battery from "@/assets/icons/battery.svg";
import { BatteryChargingIcon, BatteryIcon, ChargingIcon } from "../components/svg-assets/asset";
import BikePortfolioCards from "../components/BikePortfolioCards";

const HomePage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("text-black");
            entry.target.classList.remove("text-[#c8c7c7]");
          } else {
            entry.target.classList.add("text-[#c8c7c7]");
            entry.target.classList.remove("text-black");
          }
        });
      },
      {
        threshold: 1,
        rootMargin: "0px 0px -50% 0px",
      }
    );

    const paragraphs = document.querySelectorAll(".highlight-on-scroll");
    paragraphs.forEach((p) => observer.observe(p));

    return () => {
      paragraphs.forEach((p) => observer.unobserve(p));
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <section className="sm:h-[97vh] h-[94vh] w-full relative">
        <Navbar />
        <video autoPlay muted loop className="w-full h-full object-cover z-0">
          <source src={bannerVideo} type="video/mp4" />
        </video>
        <div className="absolute sm:bottom-[5%] left-[10%]  text-white w-[80%]  sm:w-[100%]  max-w-full">
          <h1 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight sm:leading-[3.5rem] md:leading-[4rem] lg:leading-[5rem]">
            The Future Is Electric, and Your <br /> Business Leads The Change
          </h1>
          <div className="flex flex-row items-center gap-4 sm:gap-6 md:gap-7 mt-4 sm:mt-6 md:mt-8">
            <img
              className="w-8 h-8 sm:w-[2.5rem] sm:h-[2.5rem] md:w-[3rem] md:h-[3rem] lg:w-[3.5rem] lg:h-[3.5rem] border border-white rounded-full p-2"
              src={arrow}
              alt="arrow"
            />
            <p className="text-xs xs:text-lg lg:text-xl font-light break-words">
              Seamless leasing designed to drive growth
              <br className="hidden md:block" />
              and reduce your carbon footprint
            </p>
          </div>
        </div>
      </section>
      <section className=" px-[2rem] py-[5rem] sm:py-[12rem] sm:px-[9rem]">
        <p className="highlight-on-scroll text-[2rem] sm:text-[2.3rem]  text-[#c8c7c7] font-extralight text-center leading-[1.9] transition-all duration-300 ease-in-out">
          Autovert is transforming the way you access and own electric vehicles.
          With flexible leasing plans, innovative financing, and
        </p>
        <p className="highlight-on-scroll text-[2rem] sm:text-[2.3rem]  text-[#c8c7c7] font-extralight text-center leading-[1.9] transition-all duration-300 ease-in-out">
          cutting-edge digital tools, we empower businesses and individuals to
          drive the future of sustainable mobility. Simplify
        </p>
        <p className="highlight-on-scroll text-[2rem] sm:text-[2.3rem]  text-[#c8c7c7] font-extralight text-center leading-[1.9] transition-all duration-300 ease-in-out">
          your journey, reduce costs, and contribute to a greener
        </p>
        <p className="highlight-on-scroll text-[2rem] sm:text-[2.3rem]  text-[#c8c7c7] font-extralight text-center leading-[1.9] transition-all duration-300 ease-in-out">
          tomorrow—all with Autovert.
        </p>
      </section>

      <section className="bg-[#F8F8F8] py-[6.2rem] font-poppins font-light ">
        <div className="w-[90%] md:w-[80%] mx-auto">
          <h2 className="text-4xl mb-5">Why Businesses</h2>
          <h2 className="text-4xl text-[#6C6C6C] mb-14">
            Choose Autovert for EV Leasing
          </h2>
          <FeaturesCards items={cardData1} />
        </div>
      </section>

      <section className="font-poppins font-light py-[6.5rem] w-[92%] mx-auto">
        <h1 className="text-3xl text-center mb-[4rem]">Our Bikes Portfolio</h1>
       <BikePortfolioCards vehiclesData={vehicleData}/>
      </section>

      <section className="text-center font-poppins">
        <h1 className="text-2xl font-[500] mb-2">Our Business & OEM Partners</h1>
        <h3 className="font-[400] mb-10">Building Success Together with Leading Brands</h3>
      </section>


    </div>
  );
};
export default HomePage;
