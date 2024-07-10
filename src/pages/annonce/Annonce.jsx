import "./Annonce.scss";
import Logements from "../../datas/logements.json";

import { useParams } from "react-router-dom";
import ErrorPage from "../error_page/ErrorPage";

import Carrousel from "../../components/Carrousel/Carrousel";
import Avatar from "../../components/Avatar/Avatar";
import Button from "../../components/Button/Button";
import Rate from "../../components/Rate/Rate";
import Collapse from "../../components/Collapse/Collapse";

  
export default function Annonce() {
  const { routeId } = useParams(); 
  
  const annonce = Logements.find((annonce)=> annonce.id === routeId);
  if (!annonce) {
    return (
      <ErrorPage />
    )
  } else {
    document.title = `Kasa - ${annonce.title}`
  return (
    <>
      <div className="annonce" key={annonce.id}>
        <Carrousel 
        cover={annonce.cover}
        pictures={annonce.pictures}
        />
        <div className="annonce__description">
          <div className="annonce__titre-tag">
            <div className="annonce__titre">
              <h2>{annonce.title}</h2>
              <h3>{annonce.location}</h3>
            </div>
            <div className="annonce__tag">
              {annonce.tags.map(tag => (
              <Button 
              key={tag}
              content={tag}
              />
              ))}
            </div>
          </div>
          <div className="annonce__host-rate">
          <Avatar 
          name={annonce.host.name}
          photo={annonce.host.picture}
          />
          <Rate 
          rate={parseInt(annonce.rating)} 
          />
          </div>
        </div>
        <div className="annonce__details">
          <Collapse 
          category="Description"
          content={annonce.description}
          />
          <Collapse 
          category="Equipement"
          content={<ul>
          {annonce.equipments.map((obj, index) =>
          <li key={index}>{obj}</li>
          )}
          </ul>}
          />
        </div>
      </div>
    </>
  );
}
}
