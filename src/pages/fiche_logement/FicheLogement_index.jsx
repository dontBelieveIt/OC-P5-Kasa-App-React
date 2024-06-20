import "./FicheLog_Style.scss";
import Logements from "../../datas/logements.json";
import { useParams } from "react-router-dom";

import ErrorPage from "../error_page/ErrorPage";

import FicheLogCarrousel from "./FicheLogCarrousel";
import FicheLogTitre from "./FicheLogTitre";
import FicheLogHost from "./FicheLogHost";
import FicheLogRate from "./FicheLogRate";
import FicheLogTag from "./FicheLogTag";
import FicheLogDetails from "./FicheLogDetails";

export default function FicheLogIndex() {
  // const LogData = useParams(); 
  // console.log(useParams());
  // const apparts = Logements.filter(appart => appart.id === LogData);
  // console.log(apparts[0]);
  // if(apparts.length === 0){
  //   return      <ErrorPage />
  // } else {
  //   const appart = apparts[0];
  // }
  // // console.log(Apparts)

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
