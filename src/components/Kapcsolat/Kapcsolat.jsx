import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Kapcsolat = () => {
  return (
    <div className="bg-gray-100 min-h-screen pb-16">
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Kapcsolat
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Látogass el műhelyünkbe, vagy vedd fel velünk a kapcsolatot egyedi
          ékszer tervezéséhez.
        </p>
      </section>

      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Írj nekünk!
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Név
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Teljes név"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="email@example.com"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+36 30 123 4567"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Üzenet
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Miben okozna gondot? Részletezd az elképzelésedet..."
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline transition duration-300"
              >
                Üzenet küldése
              </button>
            </form>
          </div>

          <div className="w-full md:w-1/2 space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Elérhetőségek:
              </h2>

              <div className="flex items-start gap-4 mb-4">
                <FaMapMarkerAlt className="text-gray-600 text-xl mt-1" />
                <div>
                  <p className="text-gray-600">1051 Budapest, Váci utca 12</p>
                  <p className="text-gray-600">1. emelet 3.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <FaPhoneAlt className="text-gray-600 text-xl mt-1" />
                <div>
                  <p className="text-gray-600">+36 1 234 5678</p>
                  <p className="text-gray-600">+36 30 987 6543</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaEnvelope className="text-gray-600 text-xl mt-1" />
                <div>
                  <p className="text-gray-600">info@silverluxe.hu</p>
                  <p className="text-gray-600">rendeles@silverluxe.hu</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Nyitvatartás:
              </h2>
              <div className="grid grid-cols-2 gap-4 text-gray-600">
                <p className="font-semibold">Hétfő - Péntek:</p>
                <p>10:00 - 18:00</p>
                <p className="font-semibold">Szombat:</p>
                <p>10:00 - 14:00</p>
                <p className="font-semibold">Vasárnap:</p>
                <p>Zárva</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="w-full h-64 rounded-lg overflow-hidden">
                <iframe
                  title="SilverLuxe térkép"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10777.78687915026!2d19.0500412!3d47.4943394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc3c94df3515%3A0x2f4034d37ccf7611!2sBudapest%2C%20V%C3%A1ci%20utca%2012%2C%201051!5e0!3m2!1shu!2shu!4v1721655540037!5m2!1shu!2shu"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <p className="text-gray-600 text-sm mt-2">
                Váci utca 12, Budapest
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg shadow-md text-white">
              <h2 className="text-2xl font-bold mb-4">Műhelylátogatás</h2>
              <p className="text-base mb-6 opacity-90">
                Szeretnél látni, hogyan készítjük az ékszereket? Foglalj
                időpontot egy személyes műhelylátogatásra!
              </p>
              <button className="bg-white text-gray-800 px-6 py-3 rounded font-semibold hover:bg-gray-200 transition duration-300">
                Időpont foglalása
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kapcsolat;
