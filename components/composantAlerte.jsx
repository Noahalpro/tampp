'use client'

import Image from 'next/image'
import bellWarning from '../public/bell-warning.png'

export default function AlerteProfil() {
  return (
    <div className="bg-[#68a8ea] mx-60 rounded-2xl p-6 flex items-center justify-between gap-4">
      {/* Icône notification avec badge */}
      <div className="relative w-44 h-44 flex-shrink-0">
        <div className=" rounded-full w-full h-full flex items-center justify-center">
          <Image
            src={bellWarning} // Icône Flaticon
            alt="Notification"
            width={250}
          />
        </div>
      </div>

      {/* Texte explicatif */}
      <p className="text-[#250048] text-base flex-1 font-bold">
        Ajoutez vos marques et catégories préférées à votre profil. Grâce à la newsletter quotidienne, nous vous tiendrons informé des correspondances, ou consultez-les directement dans votre aperçu personnel.
      </p>

      {/* Bouton */}
      <button className="bg-[#250048] text-white font-bold px-6 py-3 rounded-xl text-lg flex items-center gap-2 hover:bg-[#3b007d] transition">
        <span className="text-xl">＋</span> Ajouter un nouveau
      </button>
    </div>
  )
}
