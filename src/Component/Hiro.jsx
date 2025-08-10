"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Hiro = () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/assets/HeroImage.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#3c4858] opacity-50"></div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="container mx-auto relative z-10 text-white px-4 md:px-8 lg:px-16 pt-20"
      >
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
          Meet The <br /> Best Doctor
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          Great doctor if you need your family member to get effective immediate
          assistance, emergency treatment or a simple consultation.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/doctors"
            className="btn_primary px-4 py-3 md:btn-md lg:btn-lg"
          >
            Make Appointment
          </Link>
        </motion.div>
        <p className="text-sm mt-4 opacity-80 max-w-xl">
          T&C apply. Please read Terms and Conditions
        </p>
      </motion.div>
    </section>
  );
};

export default Hiro;
