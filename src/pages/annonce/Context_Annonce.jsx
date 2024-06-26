import Logements from "../../datas/logements.json";
import { createContext } from "react";

export const AnnonceContext = createContext(null)

export const AnnonceContextProvider = (props) => {
    const logementData = {Logements}
    return (
        <AnnonceContext.Provider value={logementData}>
            {props.children}
        </AnnonceContext.Provider>
    )
}

// AnnonceContextProvider.propTypes = {
//     children: PropTypes.node.isRequired,
// }; 
