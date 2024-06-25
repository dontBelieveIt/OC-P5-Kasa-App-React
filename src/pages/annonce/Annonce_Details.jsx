import arrowBack from "../../assets/collapsible/arrow_back.svg";

export default function AnnonceDetails() {
  return (
    <div className="fiche-log-details">
      <div className="fiche-log-details__collapsible">
        Description
        <img src={arrowBack} alt="Open description" />
      </div>
      <div className="fiche-log-details__collapsible">
        Equipement
        <img src={arrowBack} alt="Open description" />
      </div>
    </div>
  );
}
