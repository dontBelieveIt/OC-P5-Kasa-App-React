import arrowBack from "../../assets/collapsible/arrow_back.svg";
import { useState } from "react";

export default function AnnonceDetails({description, equipement}) {
  return (
    <div className="fiche-log-details">
      <div className="fiche-log-details__collapsible">
        Description 
        <img src={arrowBack} alt="Open description" />
          <div className="fiche-log-details__elements">
          {/* {description} */}
        </div>
      </div>
      <div className="fiche-log-details__collapsible" >
        Equipement 
        <img src={arrowBack} alt="Open description" />
          <div className="fiche-log-details__elements">
          {/* {equipement} */}
        </div>
      </div>
    </div>
  );
}
