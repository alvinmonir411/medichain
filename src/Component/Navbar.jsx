"use client";
import { navLinks } from "@/data/navLinks";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white shadow-lg px-3 py-3 btn_primary">
      <div>
        <div className="flex justify-center items-center gap-5  text-white">
          {navLinks["guest"].map((nav) => {
            return (
              <Link href={nav.path} className="text " key={nav.path}>
                {nav.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
