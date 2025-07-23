import React from "react";
import mester from "../../assets/mester.jpg";
import ertek from "../../assets/ertek.jpg"; 

import kep1 from "../../assets/hagy.jpg";
import kep2 from "../../assets/mest.jpg";
import kep3 from "../../assets/precz.png";
import kep4 from "../../assets/tok.jpg";
import kep5 from "../../assets/finom.png";
import kep6 from "../../assets/muvsz.jpg";

const Rolunk = () => {
  const valuesWithImages = [
    { text: "Mesterségbeli tudás", image: kep1 },
    { text: "Hagyományos technikák", image: kep2 },
    { text: "Precíz kivitelezés", image: kep3 },
    { text: "Tökéletes befejezés", image: kep4 },
    { text: "Finom részletek", image: kep5 },
    { text: "Művészi eredmény", image: kep6 },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="text-center py-16 px-4 bg-white shadow-sm">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Rólunk
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Több mint 25 éve alkotunk egyedi ezüst ékszereket, ötvözve a
          hagyományos kézműves technikákat a kortárs design elemeivel.
        </p>
      </section>

      <section className="container mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-200 h-64 md:h-auto rounded-lg overflow-hidden relative shadow-md">
            <img
              src={mester}
              alt="A mester"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A mester története
            </h2>
            <p className="text-base mb-4 leading-relaxed">
              Kovács Péter mester 1998-ban alapította az Argentum műhelyt, azzal a
              céllal, hogy az ezüst természetes szépségét és időtlen eleganciáját
              modern formában mutassa be.
            </p>
            <p className="text-base mb-8 leading-relaxed">
              Minden darab egyedi tervezés alapján, kézzel készül, figyelembe
              véve a viselő személyiségét és stílusát. A 925-ös sterling ezüst
              mellett gyakran használunk természetes köveket és gyöngyöket.
            </p>

            <div className="flex justify-start space-x-4 text-center mt-6">
              <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                <p className="text-3xl font-bold text-gray-700">25+</p>
                <p className="text-sm text-gray-500">Év tapasztalat</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                <p className="text-3xl font-bold text-gray-700">1000+</p>
                <p className="text-sm text-gray-500">Elégedett ügyfél</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Értékeink
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {valuesWithImages.map((item, index) => (
            <div
              key={index}
              className="relative h-99 rounded-lg shadow-md overflow-hidden" 
            >
              <img
                src={item.image}
                alt={item.text}
                className="w-full h-full object-cover absolute inset-0"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-xl font-semibold">
                  {item.text}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto py-16 px-4">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-8 bg-white p-8 rounded-lg shadow-md">
          <div className="w-full md:w-1/2 text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Értékeink</h2>
            <ul className="space-y-4 text-base leading-relaxed list-disc list-inside marker:text-gray-600">
              <li>
                <span className="font-semibold">Kézműves hagyomány</span>
                <br />
                Minden darab egyedi, kézzel készített alkotás
              </li>
              <li>
                <span className="font-semibold">Prémium minőség</span>
                <br />
                Csak a legfinomabb 925-ös sterling ezüstöt használjuk
              </li>
              <li>
                <span className="font-semibold">Fenntarthatóság</span>
                <br />
                Környezettudatos anyagok és módszerek
              </li>
              <li>
                <span className="font-semibold">Személyes szolgáltatás</span>
                <br />
                Egyedi tervezés és személyre szabott tanácsadás
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-200 h-64 md:h-auto rounded-lg overflow-hidden relative">
          
            <img
              src={ertek}
              alt="Our Values"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rolunk;