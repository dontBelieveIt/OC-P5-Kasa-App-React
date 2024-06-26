import StarActive from "../../assets/rates_stars/starActive.svg";
import StarInactive from "../../assets/rates_stars/starInactive.svg";

export default function AnnonceRate({rate}) {
const totalStars = 5
const note = totalStars - rate
console.log(rate, totalStars, note)

  return (
    <div className="fiche-log-rate" alt="Cette appartement a une note de {rate}/5">
      {Array.from({length: rate},(_,index) =>
        <img key={index} src={StarActive} alt="a good star" />
      )}
      {Array.from({length: note},(_,index) =>
        <img key={index} src={StarInactive} alt="" />
      )}
    </div>
  );
}
