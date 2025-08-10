import { Navlinks } from "@/data/navLinks";
import { Search, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" fixed top-0 z-50 right-0 left-0 container mx-auto ">
      <section className="flex justify-between items-center ">
        <div className="flex justify-center gap-2 items-center">
          {/* for logo */}
          <Image src={"/Logo.png"} alt="Logo" width={100} height={40} />
          <p className="font-semibold text-xl">
            Medi<span className="text-blue-700">Chain</span>
          </p>
        </div>

        <div className="flex justify-center gap-5 items-center">{Navlinks}</div>
        <div className="flex justify-center gap-2 items-center">
          <Settings />
          <Search />
          <Image
            src="/Logo.png"
            alt="user image"
            width={50}
            height={50}
            className="rounded-full border-2 border-blue-500 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default Navbar;
