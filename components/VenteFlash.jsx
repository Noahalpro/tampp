'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import data from '../src/app/data'; // Assurez-vous que le chemin vers data.js est correct

// Composant pour une seule section de Vente Flash
function FlashSaleSection({ title, description, imageUrl, collectionId, productsData }) {
  const [start, setStart] = useState(0);

  // Filtrer les produits de la collection spécifique
  const collectionProducts = productsData.filter(
    (product) => product.collectionId === collectionId
  );

  // Le nombre de cartes visibles à la fois (ici, 3 pour le carrousel)
  const visibleCardsCount = 3;
  // Le nombre total de "pas" que le carrousel peut faire
  const totalSteps = collectionProducts.length - visibleCardsCount;

  const next = () => {
    setStart((prev) => (prev + 1) % (totalSteps + 1));
  };

  const prev = () => {
    setStart((prev) => (prev - 1 + (totalSteps + 1)) % (totalSteps + 1));
  };

  // Calcul de la largeur de la barre de progression
  const progressBarWidth =
    totalSteps > 0 ? ((start + 1) / (totalSteps + 1)) * 100 : 100;

  return (
    <div className="">

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Carte de représentation de la vente flash (à gauche) */}
        <div className="relative w-full lg:w-1/4 min-h-[600px] bg-[#f0f0ff] rounded-xl overflow-hidden shadow-lg flex flex-col justify-between p-6">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
        </div>

        {/* Carrousel des produits (à droite) */}
        <div className="relative w-full lg:w-2/3">
        
      <div className="flex items-center justify-between mb-4">
        <div>
            
        <h2 className="text-2xl font-bold text-[#250048]">{title}</h2>
        
          <div className="relative z-10 flex items-center gap-2 mt-auto">
            <span className="bg-[#5ce567] text-white text-sm px-2 py-1 rounded-md">
              Jusqu'à -94%
            </span>
            <span className="text-lg text-gray-800 bg-white px-2 py-1 rounded-md">
              Il ne reste que 5 jours
            </span>
          </div>

        </div>
        <Link href="#" className="text-white bg-orange-600 w-60 h-12 font-semibold hover:underline flex items-center justify-center text-lg rounded-lg">
          Voir toutes les {collectionProducts.length} offres
        </Link>
      </div>
          <div className="flex gap-4 overflow-hidden">
            {collectionProducts.slice(start, start + visibleCardsCount).map((produit) => (
              <div
                key={produit.id}
                className=" bg-white border rounded-2xl p-4 w-72 shrink-0 shadow-sm hover:shadow-md transition"
              >
                <Link href={`/produit/${produit.id}`}>
                  <div className="text-xs text-[#250048] bg-[#edeaff] px-2 py-1 rounded-md mb-2 inline-flex items-center gap-1">
                    <span className="text-sm">⏰</span> Il ne reste qu'un jour
                  </div>
                  <div className="flex justify-center mb-2">
                    <Image
                      src={produit.image}
                      alt={produit.name}
                      width={160}
                      height={160}
                      className="object-contain h-36"
                    />
                  </div>
                  <div className="text-sm font-semibold text-[#7c7185] mb-1">
                    {produit.collectionId}
                  </div>
                  <div className="text-base font-bold text-[#250048] leading-snug">
                    {produit.name.length > 55
                      ? produit.name.slice(0, 55) + '...'
                      : produit.name}
                  </div>
                  <div className="text-sm text-gray-500 mt-2">
                    Prix de réf. <span className="line-through">999,00 €</span>{' '}
                    <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded">
                      45%
                    </span>
                  </div>
                  <div className="mt-1 text-orange-600 font-bold text-lg">
                    Maintenant!{' '}
                    <span className="text-2xl text-[#250048]">
                      {Math.floor(produit.price)},
                      <sup className="text-sm">
                        {(produit.price % 1).toFixed(2).split('.')[1]}
                      </sup>
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Flèches navigation */}
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#250048] text-white rounded-full w-8 h-8 flex items-center justify-center z-10"
          >
            ›
          </button>

          {/* Barre de progression */}
          <div className="mt-6 w-full bg-gray-200 rounded-full h-1">
            <div
              className="bg-[#1890ff] h-1 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progressBarWidth}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VenteFlash() {
  return (
    <div className=" mx-30 px-4 py-8 flex flex-col gap-10">
        <div>
            
      <h1 className="text-3xl font-extrabold text-[#250048]">Ventes Flash</h1>
      <h3 className='text-lg font-bold text-gray-400 mb-5'>
Les meilleures marques pour chaque jour</h3>

        </div>

      {/* Section Électronique */}
      <FlashSaleSection
        title="Alerte au réapprovisionnement!"
        description="Les meilleures offres high-tech du moment."
        imageUrl="https://image.ibood.io/image/w640/Z3M6Ly9pYm9vZC1nby1wcm9kdWN0aW9uLWdjcy1zdG9yYWdlL2ltYWdlcy9zb3VyY2UvMTcyMzA4MC5qcGc"
        collectionId="electronique"
        productsData={data.products}
      />

      {/* Section Maison */}
      <FlashSaleSection
        title="Maison & Cuisine"
        description="Des affaires incroyables pour votre intérieur."
        imageUrl="https://image.ibood.io/image/w640/Z3M6Ly9pYm9vZC1nby1wcm9kdWN0aW9uLWdjcy1zdG9yYWdlL2ltYWdlcy9zb3VyY2UvMTY2ODI0Ny5qcGc"
        collectionId="maison"
        productsData={data.products}
      />
    </div>
  );
}
