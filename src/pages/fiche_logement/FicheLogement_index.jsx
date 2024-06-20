import "./FicheLog_Style.scss";
import FicheLogCarrousel from "./FicheLogCarrousel";
import FicheLogTitre from "./FicheLogTitre";
import FicheLogHost from "./FicheLogHost";
import FicheLogRate from "./FicheLogRate";
import FicheLogTag from "./FicheLogTag";
import FicheLogDetails from "./FicheLogDetails";

export default function FicheLogIndex() {
  return (
    <div className="fiche-log-index">
      <FicheLogCarrousel />
      <div className="fiche-log-description">
        <div className="fiche-log__titre-tag">
          <FicheLogTitre />
          <FicheLogTag />
        </div>
        <div className="fiche-log__host-rate">
          <FicheLogHost />
          <FicheLogRate />
        </div>
      </div>
      <FicheLogDetails />
    </div>
  );
}
