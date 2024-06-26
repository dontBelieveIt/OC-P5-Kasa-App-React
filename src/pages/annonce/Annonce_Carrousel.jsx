import arrowBack from "../../assets/collapsible/arrow_back.svg";
// import { useState } from "react";

export default function AnnonceCarrousel({cover, pictures}) {
  // const carrousel = pictures

  // let [carrouselSlide, setCarrouselSlide] = useState(1)

  // const previousSlide = () => {
  //   if (carrouselSlide > 1) {
  //     setCarrouselSlide(carrouselSlide - 1); 
  //   } else if (carrouselSlide === 1) {
  //     setCarrouselSlide(carrouselSlide = carrousel.length - 1)
  //   }
  // }
  // const nextSlide = () => {
  //   if (carrouselSlide < carrousel.length - 1) {
  //     setCarrouselSlide(carrouselSlide + 1); 
  //   } else if (carrouselSlide === carrousel.length - 1) {
  //     setCarrouselSlide(carrouselSlide = carrousel.length - 1)
  //       setCarrouselSlide(1)
  //   }
  // }

    return(
      <>
        <div className="fiche-log-carrousel">
           <div className="carrousel-slider">
            <div className="carrousel-btn carrousel-next">
              <img src={arrowBack} alt="Photo suivante" />
            </div>
            <div className="carrousel-btn carrousel-previous">
              <img src={arrowBack} alt="Photo précédentes" />
            </div>
            <img className="carrousel-img" src={cover} />
          </div>
        </div>
    </>
    )
  }
  