import PropTypes from 'prop-types'
import "./Banner.scss"

function Banner({imgSrc, slogan, opacity}) {
  const overlayOpacity = {
    opacity : opacity
  }

  return (
      <div className="banner" alt="Chez vous, partout et ailleurs">
        <div className="banner__overlay" style={overlayOpacity}></div>
        <img className="banner__img" src={imgSrc} alt="Bannière représentant un paysage" />
        {slogan ? <h1>Chez vous, partout et ailleurs</h1> :  null}
      </div>
  );
}
 Banner.propTypes = {
    imgSrc : PropTypes.string.isRequired, 
    slogan : PropTypes.bool.isRequired, 
    opacity : PropTypes.number.isRequired
}
export default Banner