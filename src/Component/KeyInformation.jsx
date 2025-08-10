"use client";
import React from "react";
import { Clock3, FilePlus, HeartPulse } from "lucide-react";
import { motion } from "framer-motion";

const KeyInformationSection = () => {
  const cards = [
    {
      icon: <HeartPulse size={30} />,
      title: "Emergency Cases",
      desc: "This is required when, for example, the is not yet available. Dummy text is also known as 'fill text'.",
    },
    {
      icon: <FilePlus size={30} />,
      title: "Doctors Timetable",
      desc: "This is required when, for example, the is not yet available. Dummy text is also known as 'fill text'.",
    },
    {
      icon: <Clock3 size={30} />,
      title: "Opening Hours",
      desc: (
        <>
          Monday - Friday{" "}
          <span className="text-primary font-medium">8.00 - 20.00</span>
          <br />
          Saturday{" "}
          <span className="text-primary font-medium">8.00 - 18.00</span>
          <br />
          Sunday <span className="text-primary font-medium">8.00 - 14.00</span>
        </>
      ),
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="relative z-20 -mt-20 md:-mt-16 lg:-mt-14 flex justify-center w-full pb-8 px-4"
    >
      <div className="flex flex-col md:flex-row bg-base-100 shadow-xl rounded-lg p-6 gap-6 text-base-content max-w-5xl w-full mx-auto">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`flex-1 text-center p-4 md:border-l md:border-r border-base-200`}
          >
            <div className="text-primary  text-4xl mb-2 flex justify-center">
              {card.icon}
            </div>
            <h3 className="font-semibold text-lg mb-1 text-base-content">
              {card.title}
            </h3>
            <p className="text-sm text-gray-500 mb-4">{card.desc}</p>
            <a
              href="#"
              className="text-primary text-sm font-semibold hover:underline flex items-center justify-center gap-1"
            >
              Read More <span className="ml-1">→</span>
            </a>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default KeyInformationSection;
