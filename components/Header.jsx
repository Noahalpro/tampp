
"use client";

import Image from 'next/image'
import data from '../src/app/data'
import logo from '../public/newT.png'
import Link from 'next/link';

export default function Header() {

  return (
    <header className='flex flex-col'>
      
        <div className="max-w-full bg-[#250048] py-1 text-white px-40">
          <ul className="flex gap-15 justify-between font-bold text-xs">
            <li>✔️Chaque jour les meilleures offres aux meilleurs prix</li>
            <li>✔️Des nouvelles offres chaque jour</li>
            <li>✔️Les meilleures offres en Europe depuis plus de 20 ans</li>
            <li>✔️Communauté active</li>
          </ul>

        </div>
        <nav className="bg-[#bfd6f4] px-40 py-5 flex justify-between items-center font-bold">
            <Link href="/">
           <Image src={logo} alt="Description de l’image" width={150} />
          </Link>

          {data.collections.map((collection) => (
            <a
              key={collection.id}
              href={`#${collection.id}`} // lien d'ancrage ou de filtre
              className="hover:underline"
            >
              {collection.name}
            </a>
          ))}
          <div className='flex gap-2'>
            
          <button className="border border-none rounded-lg text-gray-700 text-sm px-4 py-2 rounded hover:border-black hover:text-black transition bg-white">
  Se connecter
</button>
          <button className="border border-none rounded-lg text-gray-700 text-sm px-4 py-2 rounded hover:border-black hover:text-black transition bg-white">
  P
</button>

          </div>


        </nav>
    </header>
  );
}