import PropTypes from 'prop-types';

import "./Rate.scss";
import StarActive from "../../assets/rates_stars/starActive.svg";
import StarInactive from "../../assets/rates_stars/starInactive.svg";

function Rate({rate}) {
    const totalStars = 5
    const note = totalStars - rate

    return (
        <div className="fiche-log-rate" alt="Cette appartement a une note de {rate}/5">
        {Array.from({length: rate},(_,index) =>
            <img key={index} src={StarActive} alt="a good star" />
        )}
        {Array.from({length: note},(_,index) =>
            <img key={index} src={StarInactive} alt="" />
        )}
        </div>
    );
}
Rate.propTypes = {
    rate : PropTypes.number.isRequired
}

export default Rate
