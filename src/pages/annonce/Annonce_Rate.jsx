import StarActive from "../../assets/rates_stars/starActive.svg";
import StarInactive from "../../assets/rates_stars/starInactive.svg";

export default function AnnonceRate() {
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
