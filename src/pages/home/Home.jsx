import { NavLink, useParams } from "react-router-dom";
import Logements from "../../datas/logements.json"

import "./Home.scss";
import Banner from "../../components/Banner/Banner";
import PropTypes from 'prop-types';
import BannerImage from "../../assets/banners/banner_home_img.png"

export default function Home() {
  const { routeId } = useParams();
  document.title = "Kasa - Location immobilière"
  
  return (
    <>
      <Banner 
      imgSrc={BannerImage}
      slogan={true}
      opacity={0.6}
      />
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
