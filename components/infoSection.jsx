'use client';

import Link from 'next/link';

export default function InfoSection() {
  return (
    <section className="bg-[#ffedf4] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Section "Service et contact" */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold text-[#250048] mb-4">
            Service et contact
          </h2>
        </div>

        {/* Section "Vous voulez l'organiser rapidement vous-même?" */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold text-[#250048] mb-4">
            Vous voulez l'organiser rapidement vous-même?
          </h2>
          <p className="text-gray-600 text-base mb-4">
            Suivez votre commande, ou retournez un objet en utilisant{' '}
            <span className="font-bold">votre compte</span>.
          </p>
          <p className="text-gray-600 text-base">
            Trouvez les réponses à vos questions dans notre{' '}
            <span className="font-bold">questions fréquemment posées</span>.
          </p>
        </div>

        {/* Section "Vous n'arrivez pas à comprendre?" */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold text-[#250048] mb-4">
            Vous n'arrivez pas à comprendre?
          </h2>
          <div className="flex items-center text-gray-600 text-base">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#250048] mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <Link href="mailto:customerservice@toutaumeilleurprix.com" className="hover:underline">
              customerservice@toutaumeilleurprix.com
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
