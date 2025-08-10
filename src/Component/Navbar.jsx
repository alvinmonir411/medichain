import { Navlinks } from "@/data/navLinks";
import { Search, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/30 shadow-md">
      <div className="container mx-auto px-6">
        <nav className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <Image
              src="/Logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <p className="font-bold text-xl ">
              Medi<span className="text-blue-700">Chain</span>
            </p>
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center gap-6  font-medium">
            {Navlinks}
          </ul>

          {/* Right Section */}
          <div
            className="flex items-center gap-2
           text-gray-600"
          >
            <button className=" hover:bg-blue-50 rounded-full transition-colors">
              <Settings
                className="bg-blue-600 text-white p-2 rounded-full"
                size={30}
              />
            </button>
            <button className=" hover:bg-blue-50 rounded-full transition-colors">
              <Search
                className="bg-blue-600 text-white p-2 rounded-full"
                size={30}
              />
            </button>
            <Image
              src="/Logo.png"
              alt="User Avatar"
              width={60}
              height={40}
              className="rounded-full border-2 border-blue-500 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer object-cover"
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
