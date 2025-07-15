'use client';


import { useState, useEffect } from 'react';
import Image from 'next/image';
import data from '../src/app/data';

export default function CarrouselHome() {
  const products = data.products.slice(0, 5);
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % products.length);
      setFade(true);
    }, 200);
  };

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + products.length) % products.length);
      setFade(true);
    }, 200);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % products.length);
        setFade(true);
      }, 200);
    }, 4000);
    return () => clearInterval(interval);
  }, [products.length]);

  const product = products[index];

  return (
    <div className="bg-[#e6f0fa] p-6 mx-20 rounded-xl max-w flex items-center gap-8 shadow relative overflow-hidden transition-opacity duration-500">
      {/* Flèche gauche */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#250048] text-white rounded-full w-8 h-8 flex items-center justify-center"
      >
        ‹
      </button>

      {/* Image produit */}
      <div className={`flex-shrink-0 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="w-72 h-auto object-contain"
        />
      </div>

      {/* Contenu texte */}
      <div className={`flex flex-col gap-2 max-w-xl transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
        <div className="text-sm font-semibold text-[#250048]">
          Deal {index + 1}|{products.length}{' '}
          <span className="text-red-600 font-bold">Il ne reste que 2 heures</span> ou jusqu'à épuisement des stocks
        </div>
        <div className="text-xs text-gray-400 font-medium">{product.collectionId}</div>
        <h2 className="text-2xl font-extrabold text-[#250048] leading-tight">{product.name}</h2>
        <p className="text-sm text-gray-600">{product.description}</p>

        {/* Prix */}
        <div className="flex items-center gap-3 mt-2">
          <span className="text-orange-600 font-bold">Maintenant!</span>
          <span className="text-3xl font-bold text-[#250048]">
            {product.price.toString().split('.')[0]},<sup className="text-base">{product.price.toString().split('.')[1]}</sup>
          </span>
        </div>

        {/* Boutons */}
        <div className="flex gap-4 mt-4">
          <a
            href={product.url}
            target="_blank"
            className="bg-orange-500 text-white text-sm px-6 py-2 rounded-md hover:bg-orange-600 transition"
          >
            Voir l'offre
          </a>
          <button className="bg-blue-400 text-white text-sm px-6 py-2 rounded-md hover:bg-blue-500 transition">
            Commentez!
          </button>
        </div>
      </div>

      {/* Flèche droite */}
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#250048] text-white rounded-full w-8 h-8 flex items-center justify-center"
      >
        ›
      </button>
    </div>
  );
}
