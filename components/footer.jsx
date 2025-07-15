import Image from 'next/image';
import Link from 'next/link'; // Utilisation de Link de Next.js pour les liens

export default function Footer() {
  return (
    <footer className="bg-white py-12 px-6 sm:px-12 lg:px-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Section supérieure: Logo et propositions de valeur */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 border-b pb-8 border-gray-200">
          <div className="mb-6 md:mb-0">
            {/* Logo du site */}
            <Link href="#" passHref> {/* Lien non redirigeant */}
              <Image
                src="/newT.png" // Chemin vers votre nouveau logo dans le dossier public
                alt="toutaumeilleurprix.com Logo"
                width={130} // Largeur du logo
                height={40} // Hauteur du logo
                className="w-auto" // S'assure que l'image s'adapte
              />
            </Link>
            <p className="text-gray-600 text-sm mt-2">
              Chaque jour les meilleures offres aux meilleurs prix
            </p>
          </div>
          {/* Propositions de valeur */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 text-gray-700 text-sm font-medium">
            <div className="flex items-center">
              {/* Icône de coche */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-600 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Nouvelles offres chaque jour
            </div>
            <div className="flex items-center">
              {/* Icône de coche */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-600 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Présent depuis 20 ans, les meilleures affaires
            </div>
            <div className="flex items-center">
              {/* Icône de coche */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-600 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Une communauté active de bons plans
            </div>
          </div>
        </div>

        {/* Contenu principal: Liens, Newsletter, Application, Récompenses */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Service client */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Service client</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <Link href="#" className="hover:underline"> {/* Lien non redirigeant */}
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline"> {/* Lien non redirigeant */}
                  Politique de retour
                </Link>
              </li>
            </ul>
          </div>

          {/* toutaumeilleurprix.com */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Toutaumeilleurprix.com</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <Link href="#" className="hover:underline"> {/* Lien non redirigeant */}
                  Vous manquez une offre ?
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline"> {/* Lien non redirigeant */}
                  La chasse
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline"> {/* Lien non redirigeant */}
                  Marques
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline"> {/* Lien non redirigeant */}
                  Catégories d'offres
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline"> {/* Lien non redirigeant */}
                  À propos de toutaumeilleurprix.com
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline"> {/* Lien non redirigeant */}
                  Emploi
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline"> {/* Lien non redirigeant */}
                  Presse
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter et Application */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-gray-800 mb-4">Ne manquez jamais d'affaire</h3>
            <div className="flex mb-6">
              <input
                type="email"
                placeholder="Adresse électronique"
                className="border border-gray-300 p-3 rounded-l-md flex-grow focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-[#250048] text-white py-3 px-6 rounded-r-md hover:bg-purple-800 transition">
                Abonnez-vous!
              </button>
            </div>
            <h3 className="font-bold text-gray-800 mb-4">
              Ou regardez les offres quotidiennes exclusives de l'application
            </h3>
            <div className="flex space-x-4">
              <Link href="#" target="_blank" rel="noopener noreferrer" className="inline-block">
                {/* Image du badge App Store */}
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Download_on_the_App_Store_Badge_FRCA_RGB_blk.svg/1200px-Download_on_the_App_Store_Badge_FRCA_RGB_blk.svg.png"
                  alt="Télécharger sur l'App Store"
                  width={135}
                  height={40}
                />
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer" className="inline-block">
                {/* Image du badge Google Play */}
                <Image
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Disponible sur Google Play"
                  width={135}
                  height={40}
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Liens du Site Web */}
        <div className="mb-10">
          <h3 className="font-bold text-gray-800 mb-4">Site web</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>
              <Link href="#" className="hover:underline"> {/* Lien non redirigeant */}
                Conditions générales
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline"> {/* Lien non redirigeant */}
                Déclaration de confidentialité
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline"> {/* Lien non redirigeant */}
                Politique en matière de cookies
              </Link>
            </li>
          </ul>
        </div>

        {/* Icônes des médias sociaux */}
        <div className="flex space-x-4 mb-10">
          {/* Facebook */}
          <Link href="#" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.5 6.5h-2c-.276 0-.5.224-.5.5v2h3l-.5 2h-2.5v7h-3v-7h-2v-2h2v-3c0-1.93 1.57-3.5 3.5-3.5h3.5v3.5z"/>
            </svg>
          </Link>
          {/* Instagram */}
          <Link href="#" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.707 7.707L13 12.414V16h-2v-3.586l-2.707-2.707a1 1 0 00-1.414 1.414l3.5 3.5a1 1 0 001.414 0l3.5-3.5a1 1 0 00-1.414-1.414z"/>
            </svg>
          </Link>
          {/* TikTok (exemple d'icône générique, à remplacer par l'icône réelle si besoin) */}
          <Link href="#" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.707 7.707L13 13.414V16h-2v-2.586l-3.707-3.707a1 1 0 00-1.414 1.414l4.5 4.5a1 1 0 001.414 0l4.5-4.5a1 1 0 00-1.414-1.414z"/>
            </svg>
          </Link>
        </div>

        {/* Moyens de paiement et Trustpilot */}
        <div className="flex flex-wrap items-center justify-between gap-6 mb-10 border-t pt-8 border-gray-200">
          {/* Mastercard */}
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/2560px-Mastercard-logo.svg.png"
            alt="Mastercard"
            width={50}
            height={30}
            className="h-7 w-auto object-contain"
          />
          {/* PayPal */}
          <Image
            src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_74x46.jpg"
            alt="PayPal"
            width={80}
            height={30}
            className="h-7 w-auto object-contain"
          />
          {/* Visa */}
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
            alt="Visa"
            width={50}
            height={30}
            className="h-7 w-auto object-contain"
          />
          {/* Ingenico */}
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Ingenico_logo.svg/2560px-Ingenico_logo.svg.png"
            alt="Ingenico"
            width={90}
            height={30}
            className="h-7 w-auto object-contain"
          />
          {/* iDeal */}
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/IDEAL_logo.svg/1280px-IDEAL_logo.svg.png"
            alt="iDeal"
            width={40}
            height={30}
            className="h-7 w-auto object-contain"
          />
          {/* Klarna */}
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Klarna_Logo_2021.svg/2560px-Klarna_Logo_2021.svg.png"
            alt="Klarna"
            width={70}
            height={30}
            className="h-7 w-auto object-contain"
          />
          {/* Trustpilot */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-700">Bien</span>
            <div className="flex">
              {/* Étoiles Trustpilot (SVG pour les étoiles) */}
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
            </div>
            <Image
              src="https://www.trustpilot.com/images/logo-dark-small.svg" // Trustpilot logo
              alt="Trustpilot"
              width={70}
              height={20}
              className="h-4 w-auto object-contain"
            />
          </div>
        </div>

        {/* Barre inférieure: Copyright, Contact, Mentions légales, Sélecteur de pays */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 mt-8 space-y-4 md:space-y-0">
          <p>© Toutaumeilleurprix.com 2025</p>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <Link href="mailto:customerservice@toutaumeilleurprix.com" className="hover:underline">
              customerservice@toutaumeilleurprix.com
            </Link>
            <span>BTW N.L.81.28.93.773.B01 | KvK 24201985</span>
            <span>Toutaumeilleurprix.com | Contactweg 159-2 | 1014 BJ Amsterdam | Nederland</span>
          </div>
          <div className="flex items-center">
            {/* Drapeau de la France */}
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/2560px-Flag_of_France.svg.png"
              alt="France"
              width={20}
              height={15}
              className="mr-2"
            />
            <span>FR</span>
            {/* Icône de flèche déroulante */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
