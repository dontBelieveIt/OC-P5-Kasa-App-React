import "./Annonce_Style.scss";
import Logements from "../../datas/logements.json";

import { useParams } from "react-router-dom";
// import { useContext } from "react";
// import { AnnonceContext } from "./Context_Annonce";

import AnnonceCarrousel from "./Annonce_Carrousel";
import AnnonceTitle from "./Annonce_Title";
import AnnonceHost from "./Annonce_Host";
import AnnonceRate from "./Annonce_Rate";
import AnnonceTags from "./Annonce_Tags";
import AnnonceDetails from "./Annonce_Details";

export default function AnnonceRender() {
//   const { logementData } = useContext(AnnonceContext)
    // const data = Logements
  const { routeId } = useParams();
  const annonce = Logements.find((annonce)=> annonce.id === routeId)

  return (
    <>
        <div className="fiche-log-index" key={annonce.id}>
          <AnnonceCarrousel 
          cover={annonce.cover}
          pictures={annonce.pictures}
          />
          <div className="fiche-log-description">
            <div className="fiche-log__titre-tag">
              <AnnonceTitle 
                title={annonce.title}
                location={annonce.location}
              />
              <AnnonceTags
                tags={annonce.tags}
              />
            </div>
            <div className="fiche-log__host-rate">
              <AnnonceHost
                hostName={annonce.host.name}
                hostAvatar={annonce.host.picture}
              />
              <AnnonceRate 
              rate={annonce.rating} 
              />
            </div>
          </div>
          <AnnonceDetails
          description={annonce.description}
          equipement={annonce.equipments} />
        </div>
    </>
  );
}
