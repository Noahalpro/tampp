"use client";

import { use } from "react";
import data from "@/app/data";
import Image from "next/image";
import CarrouselFavoris from "../../../../components/FavorisCarrousel";

export default function ProductPage(props) {
  const { id } = use(props.params); // ✅ on unwrap le Promise ici

  const product = data.products.find((p) => p.id === id);

  if (!product) {
    return <div className="p-8 text-center">Produit introuvable.</div>;
  }

  return (
    <div className="max-w-7xl mx-40 px-4 md:px-8 py-6">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Image */}
        <div className="flex-1 flex justify-center items-start">
          <Image
            src={product.image}
            alt={product.name}
            width={450}
            height={450}
            className="object-contain rounded-xl"
          />
        </div>

        {/* Infos produit */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-sm text-gray-500 font-semibold">{product.collectionId}</h1>
          <h2 className="text-3xl font-extrabold text-[#250048] leading-tight">
            {product.name}
          </h2>

          <div className="bg-[#f2f1f7] p-4 rounded-xl space-y-2">
            <div className="text-sm text-orange-500 font-bold">
              Il ne reste que 2 jours <span className="text-gray-600 font-normal">ou jusqu'à épuisement des stocks</span>
            </div>
            <div className="text-sm text-gray-500">
              Prix de réf. <span className="line-through">999,00 €</span>
            </div>
            <div className="text-3xl font-bold text-[#250048]">
              <span className="text-orange-500">Maintenant! </span>
              {Math.floor(product.price)},<sup className="text-base">{(product.price % 1).toFixed(2).split(".")[1]}</sup>
              <span className="ml-2 bg-green-200 text-green-700 text-sm px-2 py-0.5 rounded-md">-45%</span>
            </div>
          </div>

          <div className="flex gap-4 mt-4 items-center">
            <button className="bg-orange-500 text-white text-lg px-6 py-3 rounded-full hover:bg-orange-600 transition">
              Je vais prendre !
            </button>
            <div className="flex gap-2 items-center border px-3 py-1.5 rounded-full text-lg">
              <button className="text-xl">-</button>
              <span>1</span>
              <button className="text-xl">+</button>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-bold text-[#250048]">Description</h3>
        <p className="text-[#250048] font-medium leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Recommandé pour vous */}
      <div className="mt-16">
        <CarrouselFavoris title="Recommandé pour vous ! 😍" count={6} />
      </div>
    </div>
  );
}
