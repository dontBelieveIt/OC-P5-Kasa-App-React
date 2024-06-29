import PropTypes from 'prop-types'
import { useState } from "react";

import "./Collapse.scss"; 
import arrow from "../../assets/collapsible/arrow_back.svg"; 

function Collapse({category, content}) {
    const [toggle, setToggle] = useState(false);    

return (
    <>
        <div className="collapse__item">
            <div className="collapse" onClick={(event) => {event.preventDefault()
            setToggle(!toggle)
        }}>
            <h2>{category}</h2>
            <img src={arrow} alt="Open menu" className={toggle ? 'active' : null} /> 
            </div>
            {toggle && (
                <div className="collapse__toggled">
                    <p>{content}</p>
                </div>)}
        </div>
    </>
    )
}

Collapse.propTypes = {
    category : PropTypes.string.isRequired, 
    content : PropTypes.node.isRequired, 
}

export default Collapse