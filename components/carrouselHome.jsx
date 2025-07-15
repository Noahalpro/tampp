'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import data from '../src/app/data'; // Assurez-vous que le chemin vers data.js est correct

export default function CarrouselHome() {
  const products = data.products.slice(0, 5);
  const [index, setIndex] = useState(0);

  // Calcul de la largeur d'une seule "slide" (carte produit complète)
  // Le conteneur principal a max-w-6xl (1152px) et p-6 (24px de padding de chaque côté).
  // Donc, la largeur utile pour le contenu est 1152px - (2 * 24px) = 1104px.
  // Chaque "slide" prendra cette largeur pour un défilement complet.
  const slideContentWidth = 1104;

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 4000); // Animation automatique toutes les 4 secondes
    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <div className="bg-[#f0f0ff] p-6 my-10 mx-auto max-w-6xl rounded-xl shadow-lg relative overflow-hidden">
      {/* Conteneur de la piste du carrousel - ce div se déplacera horizontalement */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${index * slideContentWidth}px)` }}
      >
        {products.map((product, idx) => {
          // Calcul de la réduction pour chaque produit
          const originalPrice = product.originalPrice || (product.price / 0.41);
          const discount = Math.round(((originalPrice - product.price) / originalPrice) * 100);

          return (
            // Chaque carte de produit est une "slide" individuelle
            <div key={product.id || idx} className="flex-shrink-0 flex items-center gap-8" style={{ width: `${slideContentWidth}px` }}>
              {/* Image produit */}
              <div className="flex-shrink-0">
                <div className="text-sm font-semibold text-[#250048]">
                  Deal {idx + 1}|{products.length}{' '}
                  <span className="text-red-600 font-bold">Il ne reste que 11 heures</span> ou jusqu'à épuisement des stocks
                </div>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={650}
                  height={550}
                  className="w-100 h-auto object-contain"
                />
              </div>

              {/* Contenu texte */}
              <div className="flex flex-col max-w-xl">
                <div className="text-xs text-gray-400 font-medium">{product.collectionId}</div>
                <h2 className="text-2xl font-extrabold text-[#250048] leading-tight mt-1">{product.name}</h2>
                <p className="text-sm text-gray-600 mt-2">{product.description}</p>

                {/* SECTION HIGHLIGHTS */}
                {product.highlights && (
                  <div className="bg-white p-4 rounded-lg my-4 shadow-inner">
                    <ul className="space-y-1 text-sm text-gray-800">
                      {product.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-500 mr-2 font-bold text-lg">›</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="text-xs text-gray-500">
                  Prix recommandé: <span className="line-through">{originalPrice.toFixed(2).replace('.', ',')} €</span>
                </div>

                {/* Prix */}
                <div className="flex items-baseline gap-3 mt-1">
                  <span className="text-orange-600 font-bold text-lg">Maintenant!</span>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-[#250048] border-b-2 border-orange-500 pb-1">
                      {product.price.toString().split('.')[0]},
                    </span>
                    <span className="text-4xl font-bold text-[#250048]">-</span>
                  </div>
                  <div className="bg-green-500 text-white font-bold text-sm px-2 py-1 rounded-md">
                    {discount}%
                  </div>
                </div>

                {/* Boutons */}
                <div className="flex gap-4 mt-4">
                  <a
                    href={product.url}
                    target="_blank"
                    className="bg-orange-500 text-white text-lg font-bold px-8 py-3 rounded-md hover:bg-orange-600 transition"
                  >
                    Voir l'offre
                  </a>
                  <button className="bg-blue-400 text-white text-sm px-6 py-2 rounded-md hover:bg-blue-500 transition relative">
                    Commentez!
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Flèche gauche */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#250048] text-white rounded-full w-11 h-11 flex items-center justify-center z-10"
      >
        ‹
      </button>

      {/* Flèche droite */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#250048] text-white rounded-full w-11 h-11 flex items-center justify-center z-10"
      >
        ›
      </button>
    </div>
  );
}
