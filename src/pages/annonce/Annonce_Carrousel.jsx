import arrowBack from "../../assets/collapsible/arrow_back.svg";
import { useState } from "react";

export default function AnnonceCarrousel({cover, pictures}) {
 

    return(
      <>
        <div className="fiche-log-carrousel">
           <div className="carrousel-slider">
            <div className="carrousel-btn carrousel-next">
              <img src={arrowBack} alt="Voir la photo suivante" />
            </div>
            <div className="carrousel-btn carrousel-previous" >
              <img src={arrowBack} alt="Voir la photo précédentes" />
            </div>
            {pictures.map((slide, index) =>
              <img className="carrousel-img" key={index + 1} src={slide} alt={`Image ${index +1}`} />
            )}
            
          </div>
        </div>
    </>
    )
  }
  