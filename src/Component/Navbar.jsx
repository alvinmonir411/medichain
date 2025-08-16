"use client";
import { motion } from "framer-motion";
import { AlignJustify, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Navlinks } from "@/data/navLinks";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";

const Navbar = () => {
  // const { userInfo: user } = useSelector((state) => state.user);
  // console.log(user?.image);
  const { data: session, status } = useSession();
  const user = session;
  console.log(session);
  const [isopen, setIsOpen] = useState(false);

  return (
    <header className="fixed  top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/30 shadow-md">
      <div className="md:container mx-auto px-1 md:px-6">
        <nav className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2"
          >
            <Link href={"/"}>
              <Image
                src="/Logo.png"
                alt="Logo"
                width={100}
                height={80}
                priority
                className="object-contain w-20 md:w-28 lg:w-36"
              />
            </Link>

            <p className="font-bold  md:text-2xl ">
              Medi<span className="text-blue-700">Chain</span>
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.ul
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="hidden md:flex items-center gap-6  text-white font-medium"
          >
            {Navlinks}
          </motion.ul>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2
           text-gray-600"
          >
            <button className="hidden md:block hover:bg-blue-50 rounded-full transition-colors">
              <Search
                className="bg-blue-600 text-white p-2 rounded-full"
                size={35}
              />
            </button>

            {user ? (
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="relative w-12 h-12"
              >
                <Image
                  src={user?.image}
                  alt="User Avatar"
                  width={50}
                  height={50}
                  priority
                  className="rounded-full border-2 border-blue-500 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer object-cover"
                />
              </motion.div>
            ) : (
              <div className="hidden lg:flex justify-center gap-2">
                <Link href="/auth/login" className="btn_primary px-3 py-2">
                  Login
                </Link>
                <Link href="/auth/register" className="btn_primary px-4 py-2">
                  Create An Account
                </Link>
              </div>
            )}
            {/* for mobile */}
            <button
              onClick={() => setIsOpen(!isopen)}
              className="md:hidden relative"
            >
              {isopen ? (
                <X
                  size={30}
                  className="text-white bg-blue-600 p-2 rounded-full"
                />
              ) : (
                <AlignJustify
                  size={30}
                  className="text-white bg-blue-600 p-2 rounded-full"
                />
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
                  ))}{" "}
                  {!user && (
                    <>
                      <button className="btn_primary px-4 py-3">Login</button>
                      <button className="btn_primary px-4 py-3">
                        Create An Account
                      </button>
                    </>
                  )}
                </motion.ul>
              )}
            </div>
          </motion.div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
