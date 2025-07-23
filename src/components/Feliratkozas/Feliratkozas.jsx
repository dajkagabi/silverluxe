import React from "react";
import { Link } from "react-router-dom";

const Feliratkozas = () => {
  return (
    <section className="bg-gray-800 text-white py-16 md:py-24 px-4 text-center">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Fedezd fel a kollekció titkait
        </h2>

        <p className="text-base md:text-lg leading-relaxed mb-10 opacity-90">
          Minden ékszerünk mögött évtizedes tapasztalat és szenvedély áll. Tudj
          meg többet a kézműves munkáról és az ezüst varázslatos világáról.
        </p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            to="/rolunk"
            className="inline-block bg-white text-gray-800 px-8 py-4 text-lg font-semibold uppercase tracking-wider transition-colors duration-300 hover:bg-gray-200 border border-transparent"
          >
            Tudj meg többet a kézműves munkáról!
          </Link>

          <Link
            to="/kapcsolat"
            className="inline-block bg-transparent text-white px-8 py-4 text-lg font-semibold uppercase tracking-wider transition-colors duration-300 hover:bg-gray-700 border-2 border-white"
          >
            Kapcsolat felvétel
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Feliratkozas;
