import "./APropos_Style.scss";
import logo2 from "../../assets/Image2.png";
import arrowBack from "../../assets/arrowBack.png";

export default function AProposIndex() {
  return (
    <div className="apropos-div">
      <img
        src={logo2}
        className="banner-cover"
        alt="Chez vous, partout et ailleurs"
      />
      <div className="apropos-menu-collapse">
        <div className="apropos-menu-collapse__item">
          Fiabilité
          <img src={arrowBack} alt="Open menu" />
        </div>
        <div className="apropos-menu-collapse__content">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </div>

        <div className="apropos-menu-collapse__item">
          Respect
          <img src={arrowBack} alt="Open menu" />
        </div>
        <div className="apropos-menu-collapse__content">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </div>

        <div className="apropos-menu-collapse__item">
          Services
          <img src={arrowBack} alt="Open menu" />
        </div>
        <div className="apropos-menu-collapse__content">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînerai une exclusion de notre plateforme.
        </div>

        <div className="apropos-menu-collapse__item">
          Sécurité
          <img src={arrowBack} alt="Open menu" />
        </div>
        <div className="apropos-menu-collapse__content">
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis pour nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés/ Nous organisons également des ateliers
          sur la sécurité domestiques pour nos hôtes.
        </div>
      </div>
    </div>
  );
}
