import React from "react";
import Button from "./Button";

const SectorsSection = () => {
  return (
    <div className="bg-black px-6 md:px-12 lg:px-22 py-16 flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <h5 className="text-3xl md:text-4xl lg:text-5xl text-white font-extralight">
          Sectors We <br></br>Serve
        </h5>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col lg:flex-row gap-5">
          <div
            className="rounded-md w-full lg:w-2/3 bg-cover bg-blend-multiply h-[400px] md:h-[500px] lg:h-[620px] bg-center relative"
            style={{ backgroundImage: "url('/assets/sector1.jpeg')" }}
            id="here"
          >
            <div className="relative flex flex-col gap-3 z-10 p-6 lg:p-8">
              <h5 className="text-black text-2xl md:text-3xl lg:text-4xl">
                Infrastructure Development
              </h5>
              <p className="text-black text-sm md:text-base">
                Crafting resilient urban and rural landscapes<br></br> for
                sustainable growth and enhanced connectivity.
              </p>
            </div>
          </div>
          <div
            className="rounded-md w-full lg:w-1/3 bg-cover bg-blend-multiply h-[400px] md:h-[500px] lg:h-[620px] bg-center relative"
            style={{ backgroundImage: "url('/assets/sector2.jpeg')" }}
            id="here"
          >
            <div className="relative flex flex-col gap-3 z-10 p-6 lg:p-8">
              <h5 className="text-white text-2xl md:text-3xl lg:text-4xl">
               Energy & Natural Resources
              </h5>
              <p className="text-white text-sm md:text-base">
                Optimizing vital resources and energy systems for environmental resilience and economic prosperity.
              </p>
            </div>
          </div>
        </div>
        <div
            className="rounded-md bg-cover bg-blend-multiply h-[400px] md:h-[450px] lg:h-[520px] bg-center relative"
            style={{ backgroundImage: "url('/assets/sector3.jpeg')" }}
            id="here"
          >
            <div className="relative flex flex-col gap-3 z-10 p-6 lg:p-8">
              <h5 className="text-white text-2xl md:text-3xl lg:text-4xl">
              Socio-Economic & Institutional<br></br> Development
              </h5>
              <p className="text-white text-sm md:text-base w-full md:w-3/4 lg:w-1/2">
                Driving human-centric progress through strategic planning, institutional reforms, and sustainable socio-economic programs.
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default SectorsSection;
