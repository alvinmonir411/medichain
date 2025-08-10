"use client";
import { motion } from "framer-motion";
import { AlignJustify, Search, Settings, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Navlinks } from "@/data/navLinks";

const Navbar = () => {
  const [isopen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/40 shadow-md">
      <div className="md:container mx-auto px-2 md:px-6">
        <nav className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <Image
              src="/Logo.png"
              alt="Logo"
              width={120}
              height={80}
              className="object-contain "
            />
            <p className="font-bold text-2xl ">
              Medi<span className="text-blue-700">Chain</span>
            </p>
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center gap-6  text-black font-medium">
            {Navlinks}
          </ul>

          {/* Right Section */}
          <div
            className="flex items-center gap-2
           text-gray-600"
          >
            <button className=" hover:bg-blue-50 rounded-full transition-colors">
              <Search
                className="bg-blue-600 text-white p-2 rounded-full"
                size={30}
              />
            </button>
            <div className="relative w-12 h-12">
              <Image
                src="/assets/userAvater.jpg"
                alt="User Avatar"
                fill
                className="rounded-full border-2 border-blue-500 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer object-cover"
              />
            </div>
            {/* for mobile */}
            <button
              onClick={() => setIsOpen(!isopen)}
              className="md:hidden relative"
            >
              {isopen ? (
                <X size={30} className="text-black" />
              ) : (
                <AlignJustify size={30} className="text-black" />
              )}
            </button>
            <div className="md:hidden text-center overflow-hidden  ">
              {isopen && (
                <motion.ul
                  key="mobileMenu"
                  initial={{ opacity: 0, y: -80 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -150 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute top-14 right-0 max-h-auto w-3/4 p-6 flex flex-col gap-6 font-medium bg-white text-shadow-black shadow-2xl"
                >
                  {Navlinks.props.children.map((link, idx) => (
                    <motion.li
                      key={idx}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      onClick={() => setIsOpen(false)}
                      className="hover:text-blue-200 transition-colors duration-200"
                    >
                      {link}
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
