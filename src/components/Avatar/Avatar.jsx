import PropTypes from 'prop-types';
import "./Avatar.scss"

function Avatar({name, photo}) {
    return(
        <div className='avatar'>
            <div className="avatar__name">
            {name}
            </div>
            <img className="avatar__photo" src={photo} alt="Avatar du posteur de l'annonce"/>
        </div>
    )
}
Avatar.propTypes = {
    name : PropTypes.string.isRequired, 
    photo : PropTypes.string.isRequired,
}
export default Avatar