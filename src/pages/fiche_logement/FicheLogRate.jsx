import StarActive from "../../assets/starActive.svg";
import StarInactive from "../../assets/starInactive.svg";

export default function FicheLogRate() {
  return (
    <div className="fiche-log-rate">
      <img src={StarActive} alt="One more star" />
      <img src={StarActive} alt="A star" />
      <img src={StarActive} alt="A star" />
      <img src={StarInactive} alt="No star" />
      <img src={StarInactive} alt="No star" />
    </div>
  );
}
