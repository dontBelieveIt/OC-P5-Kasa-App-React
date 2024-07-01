import { useState } from "react";
import arrowPrevious from "../../assets/carrousel/arrowPrevious.svg"; 
import arrowNext from "../../assets/carrousel/arrowNext.svg";
import "./Carrousel.scss"

export default function AnnonceCarrousel({cover, pictures}) {
  const [ count, setCount ] = useState(0); 
  const [ active, setActive ] = useState(false)
  const nbSlides = pictures.length; 
  console.log(nbSlides)

  const previousSlide = () => { 
    if (count > 0) {
      setCount(count - 1)
    } else {
      setCount(nbSlides - 1)
    }
    setActive(true)
    console.log()
  }
  const nextSlide = () => { 
    if (count < nbSlides - 1) {
      setCount(count + 1)
    } else {
      setCount(0)
    }
    setActive(true)
  } 

    return(
      <>
        <div className="carrousel">
          <div className="carrousel__slider">
              <div className="carrousel-btn">
              <div className="carrousel-previous" alt="Go to previous photo" onClick={previousSlide}>
                <img src={arrowPrevious} alt="Go to previous photo" />
              </div>
              <div href="#" className="carrousel-next" alt="Go to next photo" onClick={nextSlide}>
                <img src={arrowNext} alt="Go to next photo" />
              </div>
             </div>
            {pictures.map((slide, index) =>
              <img className={`carrousel-img ${index === count ? 'active' : 'none'}`} key={index + 1} src={slide} alt={`Image ${index +1}`} />
            )}
          
          </div>
        </div>
    </>
    )
  }
  