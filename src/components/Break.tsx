import { Apple, Grape, Cherry, FlagIcon as Orange, Banana } from "lucide-react";

export default function SectionBreak() {
  return (
    <div className="w-full min-w-0 py-8 md:py-12 bg-white overflow-x-hidden">
      <div className="w-full min-w-0 px-4 mx-auto max-w-full">
        <div className="relative flex items-center justify-center">
          {/* Decorative line */}
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-gradient-to-r from-green-200 via-purple-200 to-green-200"></div>
          </div>

          {/* Fruit icons container */}
          <div className="relative bg-white px-4 md:px-8">
            <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
              {/* Left fruits */}
              <div className="bg-green-100 p-2 md:p-3 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
                <Apple className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
              </div>
              <div className="bg-purple-100 p-2 md:p-3 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
                <Grape className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
              </div>

              {/* Center fruit - larger */}
              <div className="bg-gradient-to-br from-green-200 to-purple-200 p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                <Cherry className="w-5 h-5 md:w-6 md:h-6 text-green-700" />
              </div>

              {/* Right fruits */}
              <div className="bg-purple-100 p-2 md:p-3 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
                <Orange className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
              </div>
              <div className="bg-green-100 p-2 md:p-3 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
                <Banana className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Scattered decorative fruits */}
        <div className="relative mt-6 md:mt-8 hidden sm:block">
          <div className="absolute left-1/4 -top-4">
            <div className="bg-green-50 p-2 rounded-full opacity-60">
              <Apple className="w-3 h-3 md:w-4 md:h-4 text-green-500" />
            </div>
          </div>
          <div className="absolute right-1/3 -top-2">
            <div className="bg-purple-50 p-2 rounded-full opacity-60">
              <Grape className="w-3 h-3 md:w-4 md:h-4 text-purple-500" />
            </div>
          </div>
          <div className="absolute left-1/3 -bottom-4">
            <div className="bg-green-50 p-2 rounded-full opacity-60">
              <Cherry className="w-3 h-3 md:w-4 md:h-4 text-green-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
