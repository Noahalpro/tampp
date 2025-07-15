
import Barre from '../../components/barreSearchHome'
import Carrousel from '../../components/carrouselHome'
import Alerte from '../../components/composantAlerte'
import CarouFav from '../../components/FavorisCarrousel'
import VenteFlash from '../../components/VenteFlash'
import InfoSection from "../../components/infoSection";


export default function Home() {
  return (
      <section>
          <Barre />
          <Carrousel />
          <Alerte />
          <CarouFav />
          <VenteFlash />
          <InfoSection />
      </section>
  );
}
