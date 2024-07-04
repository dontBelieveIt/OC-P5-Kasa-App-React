import { useEffect, useState } from "react";
import arrowPrevious from "../../assets/carrousel/arrowPrevious.svg"; 
import arrowNext from "../../assets/carrousel/arrowNext.svg";
import "./Carrousel.scss"

export default function Carrousel({pictures}) {
  const [ count, setCount ] = useState(0); 
  const [ active, setActive ] = useState(false); 
  const nbSlides = pictures.length; 

  const previousSlide = () => { 
    if (count > 0) {
      setCount(count - 1)
    } else {
      setCount(nbSlides - 1)
    }
    setActive(true)
  }
  const nextSlide = () => { 
    if (count < nbSlides - 1) {
      setCount(count + 1)
    } else {
      setCount(0)
    }
    setActive(true)
  } 

  const [ one, setOne ] = useState(false); 
  useEffect(() => {
    if (nbSlides > 1) {
        setOne(false)
    } else {
        setOne(true)
    }
  }, [nbSlides])

  const scrollToCarrousel = () => {
    window.scrollTo({
        top: 0, 
        behaviour: "auto"
    })
}

    return(
      <>
        <div className="carrousel">
          {/* button gestion for the carrousel element */}
          <div className={`carrousel-btn ${one === true ? 'one' : 'none'}`} onClick={scrollToCarrousel}>
            <div className="carrousel-previous" alt="Go to previous photo" onClick={previousSlide}>
              <img src={arrowPrevious} alt="Go to previous photo" />
            </div>
            <span className="slides-number">{count + 1}/{nbSlides}</span>
            <div href="#" className="carrousel-next" alt="Go to next photo" onClick={nextSlide}>
              <img src={arrowNext} alt="Go to next photo" />
            </div>
          </div>
             {/* The carrousel's pictures are generated here  */}
            {pictures.map((slide, index) =>
              <img className={`carrousel-img ${index === count ? 'active' : 'none'}`} key={index + 1} src={slide} alt={`Image ${index +1}`} />
            )}
        </div>
    </>
    )
  }
  