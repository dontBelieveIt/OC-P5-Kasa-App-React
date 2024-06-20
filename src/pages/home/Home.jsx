import { NavLink, useParams } from "react-router-dom";
import Logements from "../../datas/logements.json";
// import useEffect from "./useEffect";
import "./Home.scss";
import Banner from "./Banner";

export default function Home() {
  const { routeId } = useParams();

  return (
    <>
      <Banner />
      <div className="article-layout">
        <ul className="article-list">
          {Logements.map((data) => (
            <li key={data.id}>
              <article className="article-log">
                <NavLink to={`logement/${data.id}`}>
                  <img
                    src={data.cover}
                    className="article-log__img"
                    alt="Logement"
                  />
                  <div className="article-log__title">
                    {data.title}
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
