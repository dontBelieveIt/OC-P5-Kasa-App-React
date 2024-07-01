import PropTypes from 'prop-types';
import "./Button.scss"

function Button({content}) {
    return(
        <>
            <button className='btn'>{content}</button>
        </>
    )
}
Button.propTypes = {
    content : PropTypes.string.isRequired
}
export default Button