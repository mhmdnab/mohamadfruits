//bg-gradient-to-br from-[#B1D8B7] via-[#94C973] to-[#B1D8B7]

import { Apple, Grape, Cherry } from "lucide-react";
import ScrollLink from "./ScrollLink";

export default function Component() {
  return (
    <section className="w-full h-screen min-w-0 py-8 md:py-16 bg-gradient-to-br from-[#94C973] via-[#9dcda4] to-[#94C973] overflow-x-hidden flex items-center justify-center relative">
      {/* Desktop Layout */}
      <div className="hidden md:flex w-full max-w-7xl mx-auto px-4 items-center justify-between relative z-10">
        {/* Left Content */}
        <div className="flex-1 text-left space-y-6 lg:space-y-8">
          {/* Simple fruit icons */}
          {/* <div className="flex gap-4 lg:gap-6">
            <div className="bg-orange-200 p-3 lg:p-4 rounded-full shadow-lg">
              <Apple className="w-6 h-6 lg:w-8 lg:h-8 text-orange-700" />
            </div>
            <div className="bg-orange-200 p-3 lg:p-4 rounded-full shadow-lg">
              <Grape className="w-6 h-6 lg:w-8 lg:h-8 text-transparent" />
            </div>
            <div className="bg-orange-200 p-3 lg:p-4 rounded-full shadow-lg">
              <Cherry className="w-6 h-6 lg:w-8 lg:h-8 text-orange-700" />
            </div>
          </div> */}

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-800 leading-tight">
              Mohamad <span className="text-orange-600">Fruits</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-lg">
              Check out our fresh fruits and tasty cocktails!
            </p>
          </div>

          {/* Button */}
          <div>
            <ScrollLink
              href={"#menu"}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg rounded-full font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              See Menu
            </ScrollLink>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative">
            <img
              src="/mhmdfruitslogoNoBg2.png"
              alt="Fresh fruits and cocktails"
              className="w-80 lg:w-96 xl:w-[28rem] h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden w-full px-4 text-center space-y-6">
        {/* Image at top */}
        <div className="flex justify-center">
          <img
            src="/mhmdfruitslogoNoBg2.png"
            alt="Fresh fruits and cocktails"
            className="w-48 h-auto drop-shadow-xl"
          />
        </div>

        {/* Content below */}
        <div className="space-y-6">
          {/* Simple fruit icons */}
          {/* <div className="flex justify-center gap-4">
            <div className="bg-green-200 p-3 rounded-full shadow-lg">
              <Apple className="w-6 h-6 text-green-700" />
            </div>
            <div className="bg-orange-200 p-3 rounded-full shadow-lg">
              <Grape className="w-6 h-6 text-green-700" />
            </div>
            <div className="bg-green-200 p-3 rounded-full shadow-lg">
              <Cherry className="w-6 h-6 text-green-700" />
            </div>
          </div> */}

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">
              Mohamad <span className="text-orange-600">Fruits</span>
            </h1>
            <p className="text-lg text-gray-600 px-4">
              Check out our fresh fruits and tasty cocktails!
            </p>
          </div>

          {/* Button */}
          <div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 text-base rounded-full font-medium transition-colors duration-200 shadow-lg hover:shadow-xl">
              See Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
