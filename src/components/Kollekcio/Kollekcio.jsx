import React from 'react'
import virag from '../../assets/virag.png' 
import geo from '../../assets/geo.png'
import antik from '../../assets/antik.jpg'
import bross from '../../assets/bross.png'
import medal from '../../assets/medal.png'
import vintage from '../../assets/vintage.png'
import gysz from '../../assets/gysz.png'
import mdgy from '../../assets/mdgy.png'
import szett from '../../assets/szett.png'

const items = [
  {
    title: 'Ezüst Virág Nyaklánc',
    description: 'Kézzel készített, finom részletekkel kidolgozott virágmotívum',
    tags: ['Kézzel készült', '925-ös ezüst'],
    image: virag, 
  },
  {
    title: 'Geometrikus Fülbevaló',
    description: 'Modern, minimalista design tiszta vonalakkal',
    tags: ['Kortárs design', '925-ös ezüst'],
    image: geo, 
  },
  {
    title: 'Antik Karkötő',
    description: 'Időtlen elegancia hagyományos kézműves technikákkal',
    tags: ['Antik stílus', 'Kézzel gravírozott'],
    image: antik, 
  },
  {
    title: 'Ezüst Gyűrű Szett',
    description: 'Harmonikus kompozíció három egyedi gyűrűből',
    tags: ['Szett darab', 'Alkalmi műve'],
    image: gysz, 
  },
  {
    title: 'Levél Motívumos Bross',
    description: 'Természet ihlette forma és részletgazdagság',
    tags: ['Természet ihlette', 'Texturált felület'],
    image: bross, 
  },
  {
    title: 'Ezüst Medál Lánccal',
    description: 'Elegáns medál finom láncon, minden alkalomra',
    tags: ['Univerzális', 'Finom lánc'],
   image: medal, 
  },
  {
    title: 'Vintage Ezüst Karkötő',
    description: 'Klasszikus stílusú karkötő antik hatással',
    tags: ['Vintage design', 'Kézzel készült'],
    image: vintage, 
  },
  {
    title: 'Modern Ezüst Gyűrű',
    description: 'Kortárs design egyedi formával',
    tags: ['Modern stílus', 'Egyedi forma'],
    image: mdgy, 
  },
  {
    title: 'Ezüst Line Szett',
    description: 'Elegáns nyaklánc és karkötő szett',
    tags: ['Szett darab', 'Minimalista design'],
    image: szett, 
  },
]

const Kollekcio = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Exkluzív Kollekció</h2>
        <p className="mt-2 text-gray-600">
          Minden darab egyedi történetet mesél el, a finom részletektől a tökéletes kidolgozásig.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
          >
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              {item.image ? (
                <img src={item.image} alt={item.title} className="object-contain h-full" />
              ) : (
                <span className="text-gray-400 text-3xl font-semibold">Z</span>
              )}
            </div>
            <div className="p-4 flex flex-col gap-2">
              <h3 className="font-semibold text-gray-900 text-lg">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Kollekcio
