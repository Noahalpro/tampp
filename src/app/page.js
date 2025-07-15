
import Header from '../../components/Header'
import Barre from '../../components/barreSearchHome'
import Carrousel from '../../components/carrouselHome'
import Alerte from '../../components/composantAlerte'
import CarouFav from '../../components/FavorisCarrousel'


export default function Home() {
  return (
      <section>
        <div className="max-w-full bg-[#250048] py-1 text-white px-20">
          <ul className="flex gap-15 justify-between font-bold text-xs">
            <li>✔️Chaque jour les meilleures offres aux meilleurs prix</li>
            <li>✔️Des nouvelles offres chaque jour</li>
            <li>✔️Les meilleures offres en Europe depuis plus de 20 ans</li>
            <li>✔️Communauté active</li>
          </ul>

        </div>
        
          <Header />
          <Barre />
          <Carrousel />
          <Alerte />
          <CarouFav />
      </section>
  );
}
