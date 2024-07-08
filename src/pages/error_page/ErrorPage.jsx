import { NavLink } from "react-router-dom";
import "./ErrorPage.scss";

export default function ErrorPage() {
  document.title = "Kasa - Error 404";

  return (
    <div className="error">
      <div className="error__number">404</div>
      <div className="error__msg">
        Oups! La page que vous demandez n'existe pas.
      </div>
      <div className="error__link">
        <NavLink to={`/`}>Retourner sur la page d'accueil</NavLink>
      </div>
    </div>
  );
}
