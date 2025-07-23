import React from "react";
import mester from "../../assets/mester.jpg";

const Rolunk = () => {
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
          <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-200 h-64 md:h-auto rounded-lg overflow-hidden relative">
            <img src={mester} alt="" />
         
            
            <img src="/path/to/circle-pattern.svg" alt="Pattern" className="absolute inset-0 w-full h-full object-contain opacity-20" /> 
          </div>

          {/* Szöveg tartalom */}
          <div className="w-full md:w-1/2 text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A mester története
            </h2>
            <p className="text-base mb-4 leading-relaxed">
              Kovács Péter mester 1998-ban alapította az SilverLuxe műhelyt,
              azzal a céllal, hogy az ezüst formázására sziszegőket és örök
              eleganciájú modern formákat mutasson be.
            </p>
            <p className="text-base mb-8 leading-relaxed">
              Minden darab egyedi tervezésű alapján, kézzel készített,
              figyelembe véve a vevői igényeket és elvárásokat. Több mint két
              évtizede gyűjtött tapasztalata és tudása garantálja a kiváló
              minőséget és tartósságot az ékszergyártásban.
            </p>

            {/* Statisztikák */}
            <div className="flex justify-start space-x-8 text-center mt-6">
              <div>
                <p className="text-3xl font-bold text-gray-700">25+</p>
                <p className="text-sm text-gray-500">Év szakmai tapasztalat</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-700">1000+</p>
                <p className="text-sm text-gray-500">Egyedi ékszer</p>
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
          {/* Kártya komponens példa (ezt ismételjük) */}
          {[
            "Mesterségbeli tudás",
            "Hagyományos technikák",
            "Precíz kivitelezés",
            "Tökéletes befejezés",
            "Finom részletek",
            "Művészi eredmény",
          ].map((text, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center"
            >
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <span className="text-gray-500 text-sm">Kép</span>
                {/* Itt lehetne egy ikon vagy egy kis kép */}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{text}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Értékeink alatti szekció (listával) */}
      <section className="container mx-auto py-16 px-4">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-8">
          {/* Listás tartalom */}
          <div className="w-full md:w-1/2 text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Értékeink</h2>
            <ul className="space-y-4 text-base leading-relaxed">
              <li>
                <span className="font-semibold">Kézműves hagyományok:</span>{" "}
                Minden ékszerünk kézzel készített.
              </li>
              <li>
                <span className="font-semibold">Prémium minőség:</span> Csak a
                legfinomabb 925-ös sterling ezüstöt használjuk.
              </li>
              <li>
                <span className="font-semibold">Fenntarthatóság:</span>{" "}
                Környezettudatos anyagok és módszerek.
              </li>
              <li>
                <span className="font-semibold">Személyre szabhatóság:</span>{" "}
                Egyedi tervek és gravírozás.
              </li>
            </ul>
          </div>

          {/* Kép helyőrző */}
          <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-200 h-64 md:h-auto rounded-lg overflow-hidden relative">
            {/* Itt lehetne egy kapcsolódó kép */}
            <span className="text-gray-500 text-lg">Kép helyőrző</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rolunk;
