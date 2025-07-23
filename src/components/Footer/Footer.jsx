import React from 'react';
import { FaInstagram, FaMapMarkerAlt } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="bg-white text-[#121A29] py-10"> 
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8 border-b border-gray-300 pb-8 mb-8">

          
          <div>
            <h3 className="text-2xl font-bold mb-4">SilverLuxe</h3>
            <p className="text-sm leading-relaxed mb-4">
              Az időtlen elegancia és a kézműves hagyományok találkozása. Minden darabunk egyedi történetet mesél el.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition duration-300">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="https://maps.google.com/?q=Budapest,Váci+utca+12" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition duration-300">
                <FaMapMarkerAlt className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Oszlop 2: Elérhetőségek */}
          <div>
            <h3 className="text-xl font-bold mb-4">Elérhetőség</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2">📞</span> +36 1 234 5678
              </li>
              <li className="flex items-center">
                <span className="mr-2">📧</span> info@silverluxe.hu
              </li>
              <li className="flex items-center">
                <span className="mr-2">📍</span> Budapest, Váci utca 12.
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-xl font-bold mb-4">Márkáinkról</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Kézműves hagyományok</li>
              <li>Prémium minőség</li>
              <li>Egyedi design</li>
              <li>Fenntartható anyagok</li>
              <li>Személyes szolgáltatás</li>
            </ul>
          </div>

        </div>

        
        <div className="text-center text-sm text-gray-600">
          <p>&copy; 2025 SilverLuxe. Minden jog fenntartva.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;