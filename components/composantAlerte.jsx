'use client'

import Image from 'next/image'

export default function AlerteProfil() {
  return (
    <div className="bg-[#68a8ea] mx-20 rounded-2xl p-6 flex items-center justify-between gap-4">
      {/* Icône notification avec badge */}
      <div className="relative w-24 h-24 flex-shrink-0">
        <div className="bg-[#250048] rounded-full w-full h-full flex items-center justify-center">
          <Image
            src="/icons/notification-bell.png" // Icône Flaticon
            alt="Notification"
            width={40}
            height={40}
          />
        </div>
        <div className="absolute top-0 right-0 transform translate-x-1 -translate-y-1">
          <Image
            src="/icons/exclamation.png" // Badge alerte Flaticon
            alt="Alerte"
            width={24}
            height={24}
          />
        </div>
      </div>

      {/* Texte explicatif */}
      <p className="text-[#250048] text-base flex-1">
        Ajoutez vos marques et catégories préférées à votre profil. Grâce à la newsletter quotidienne, nous vous tiendrons informé des correspondances, ou consultez-les directement dans votre aperçu personnel.
      </p>

      {/* Bouton */}
      <button className="bg-[#250048] text-white font-bold px-6 py-3 rounded-xl text-sm flex items-center gap-2 hover:bg-[#3b007d] transition">
        <span className="text-xl">＋</span> Ajouter un nouveau
      </button>
    </div>
  )
}
