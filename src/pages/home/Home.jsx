import { NavLink, useParams } from "react-router-dom";
import "./Home.scss";
import Banner from "./Banner";
import Logements from "../../datas/logements.json"

export default function Home() {
  const { routeId } = useParams();
  
  return (
    <>
      <Banner />
      <div className="article-layout">
        <ul className="article-list">
          {Logements.map((item) => (
            <li key={item.id}>
              <article className="article-log">
                <NavLink to={`logement/${item.id}`}>
                  <img
                    src={item.cover}
                    className="article-log__img"
                    alt="Logement"
                  />
                  <div className="article-log__title">
                    {item.title}
                    {routeId}
                  </div>
                </NavLink>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
