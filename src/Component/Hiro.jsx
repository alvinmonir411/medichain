"use client";

const Hiro = () => {
  return (
    <section
      className="relative w-full h-[100vh] object-cover bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/HeroImage.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
    </section>
  );
};

export default Hiro;
