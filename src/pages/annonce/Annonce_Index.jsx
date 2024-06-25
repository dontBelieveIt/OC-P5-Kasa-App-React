import "./Annonce_Style.scss";

import AnnonceCarrousel from "./Annonce_Carrousel";
import AnnonceTitle from "./Annonce_Title";
import AnnonceHost from "./Annonce_Host";
import AnnonceRate from "./Annonce_Rate";
import AnnonceTags from "./Annonce_Tags";
import AnnonceDetails from "./Annonce_Details";

export default function AnnonceIndex() {

  return (
    <div className="fiche-log-index">
      <AnnonceCarrousel />
      <div className="fiche-log-description">
        <div className="fiche-log__titre-tag">
          <AnnonceTitle />
          <AnnonceTags />
        </div>
        <div className="fiche-log__host-rate">
          <AnnonceHost />
          <AnnonceRate />
        </div>
      </div>
      <AnnonceDetails />
    </div>
  );
}
