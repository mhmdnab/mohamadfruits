import { Apple } from "lucide-react";
import ScrollLink from "./ScrollLink";

export default function Header() {
  return (
    <header className="w-full min-w-0 py-4 bg-[#B1D8B7]">
      <div className="w-full min-w-0 px-4 mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start gap-3">
            {/* <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full shadow-lg border border-white/30">
              <Apple className="w-6 h-6 text-green-800" />
            </div> */}
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 break-words">
              Mohamad <span className="text-orange-600">Fruits</span>
            </h2>
          </div>

          {/* Navigation */}
          <nav className="flex items-center justify-center gap-6 md:gap-8">
            <ScrollLink
              href="#menu"
              className="text-gray-700 hover:text-green-700 font-medium transition-colors duration-200 relative group"
            >
              Menu
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-200 group-hover:w-full"></span>
            </ScrollLink>
            <a
              href="#about"
              className="text-gray-700 hover:text-green-700 font-medium transition-colors duration-200 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a
              href="https://wa.link/uds68d"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 border border-orange-400"
            >
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
