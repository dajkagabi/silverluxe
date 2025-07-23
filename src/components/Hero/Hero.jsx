import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <section
      className="relative flex items-center justify-center h-screen text-white overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gray-800 opacity-60"></div>

      <div className="relative z-10 text-center max-w-4xl px-4">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6 tracking-wide"
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
        >
          Az időtlen fény művészete az ezüstben
        </h1>

        <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-10 opacity-90">
          Kézzel készített, exkluzív ezüst ékszerek, amelyek ötvözik a
          hagyományos kézműves technikákat a modern elegancia szellemével.
        </p>

        <Link
          to="/kollekcio"
          className="inline-block bg-white text-[#121A29] px-8 py-4 text-lg font-semibold uppercase tracking-wider transition-colors duration-300 hover:bg-gray-200 border border-transparent"
        >
          Fedezd fel a kollekciót
        </Link>
      </div>
    </section>
  );
};

export default Hero;
