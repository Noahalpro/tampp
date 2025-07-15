import Image from 'next/image'
import data from '../src/app/data'
import logo from '../public/newT.png'


export default function header() {

  return (
    <header>
        <nav className="bg-[#bfd6f4] px-20 py-5 flex justify-between items-center font-bold">
            <a href="/">
            
          <Image src={logo} alt="Description de l’image" width={150}  ></Image>
            </a>

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