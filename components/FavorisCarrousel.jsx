'use client';

import Image from 'next/image';
import data from '../src/app/data';
import { useState } from 'react';
import { useParams } from "next/navigation";
import Link from "next/link";



export default function FavorisCarrousel() {
  const produits = [...data.products];
  const produitsAleatoires = produits.sort(() => 0.5 - Math.random()).slice(0, 10);

  const [start, setStart] = useState(0);
  const params = useParams();
  const id = params.id;


  const next = () => {
    setStart((prev) => (prev + 1) % produitsAleatoires.length);
  };

  const prev = () => {
    setStart((prev) => (prev - 1 + produitsAleatoires.length) % produitsAleatoires.length);
  };

  return (
    <div className="my-8 mx-20">
      <h2 className="text-2xl font-bold text-[#250048] mb-4">Vos favoris <span className="text-2xl">😍</span></h2>
      <div className="relative">
        <div  className="flex gap-4 overflow-hidden">
          {produitsAleatoires.slice(start, start + 4).map((produit) => (
            
            <div
              key={produit.id}

              className="bg-white border rounded-2xl p-4 w-72 shrink-0 shadow-sm hover:shadow-md transition"
            >
                <Link href={`/produit/${produit.id}`} key={produit.id}>
  <div className="card">...</div>
              <div className="text-xs text-[#250048] bg-[#edeaff] px-2 py-1 rounded-md mb-2 inline-flex items-center gap-1">
                <span className="text-sm">⏰</span> Il ne reste qu'un jour
                

              </div>
              </Link>
              <div className="flex justify-center mb-2">
                <Image
                  src={produit.image}
                  alt={produit.name}
                  width={160}
                  height={160}
                  className="object-contain h-36"

                />
              </div>
              <div className="text-sm font-semibold text-[#250048] mb-1">{produit.collectionId}</div>
              <div className="text-base font-bold text-[#250048] leading-snug">
                {produit.name.length > 55 ? produit.name.slice(0, 55) + '...' : produit.name}
              </div>
              <div className="text-sm text-gray-500 mt-2">
                Prix de réf. <span className="line-through">999,00 €</span> <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded">45%</span>
              </div>
              <div className="mt-1 text-orange-600 font-bold text-lg">
                Maintenant! <span className="text-2xl text-[#250048]">{Math.floor(produit.price)},<sup className="text-sm">{(produit.price % 1).toFixed(2).split('.')[1]}</sup></span>
              </div>
            </div>
          ))}
        </div>

        {/* Flèches navigation */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#250048] text-white rounded-full w-8 h-8 flex items-center justify-center"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#250048] text-white rounded-full w-8 h-8 flex items-center justify-center"
        >
          ›
        </button>
      </div>
    </div>
  );
}
