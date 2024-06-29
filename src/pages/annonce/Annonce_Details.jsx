import Collapse from "../../components/Collapse/Collapse";

export default function AnnonceDetails({description, equipement}) {
  return (
    <div className="fiche-log-details">
      <Collapse 
      category="Description"
      content={description}
      />
      <Collapse 
      category="Equipement"
      content={<ul>{equipement.map((equip, index) =>
        <li key={index}>
          {equip}
        </li>
      )}</ul>}
      />
    </div>
  );
}
