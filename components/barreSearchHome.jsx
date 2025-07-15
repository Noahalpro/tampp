
import data from '../src/app/data'
export default function barreSearchhome () {
    return (
        <div className="bg-[#fff5f0]  px-30 py-2 flex justify-between items-center" >
    <div className="w-full max-w-md ">
      <input
        type="search"
        placeholder="Rechercher un produit..."
        className="bg-white w-[600px] border border-gray-300 rounded-2xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
      />
    </div>

    
    <div className='flex gap-10'>
      
              {data.collections.map((collection) => (
                <a
                  key={collection.id}
                  href={`#${collection.id}`} // lien d'ancrage ou de filtre
                  className="hover:underline text-orange-400"
                >
                  {collection.namesearch}
                </a>
              ))}

    </div>

     </div>
    );
}
