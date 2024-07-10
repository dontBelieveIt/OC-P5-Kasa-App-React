import { NavLink, useParams } from "react-router-dom";
import Logements from "../../datas/logements.json"
import "./Cards.scss"
import { Suspense } from "react";

export default function Cards() {
    const { routeId } = useParams();

    return(
    <div className="cards__container">
        <ul className="cards__ul">

          {Logements.map((item) => (
            <li key={item.id}>
                
              <article className="cards">
                <NavLink to={`logement/${item.id}`}>

                <div className="cards__overlay"></div>
                
                  <img
                    src={item.cover}
                    className="cards__img"
                    alt="Logement"
                  />
                  <Suspense fallback="Titre de l'annonce">
                    <div className="cards__title">
                      {item.title}
                      {routeId}
                    </div>
                  </Suspense>
                </NavLink>
              </article>
            </li>
          ))}
        </ul>
      </div>
    )
}