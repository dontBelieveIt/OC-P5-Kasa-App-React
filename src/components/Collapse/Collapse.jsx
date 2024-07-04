import PropTypes from 'prop-types'
import { useState } from "react";

import "./Collapse.scss"; 
import arrow from "../../assets/collapsible/arrow_back.svg"; 

function Collapse({category, content}) {
    // useState used to toggle element
    const [toggle, setToggle] = useState(false);    

return (
    <>
        <div className="collapse__item">
            <div className="collapse" onClick={(event) => {event.preventDefault()
            setToggle(!toggle)
        }}>
            <h2>{category}</h2>
            <img src={arrow} alt="Open menu" className={toggle ? 'toggled' : null} /> 
            </div>
                <div className={`collapse__toggled ${toggle ? 'visible' : 'none'}`}>
                    {content}
                </div>
        </div>
    </>
    )
}

Collapse.propTypes = {
    category : PropTypes.string.isRequired, 
    content : PropTypes.node.isRequired, 
}

export default Collapse