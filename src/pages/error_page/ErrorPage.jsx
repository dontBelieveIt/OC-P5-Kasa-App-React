import { NavLink } from "react-router-dom";
import "./ErrorPage.scss";

export default function ErrorPage() {
  document.title = "Kasa - error 404";

  return (
    <div className="error-div">
      <div className="error-number">404</div>
      <div className="error-msg">
        Oups! La page que vous demandez n'existe pas.
      </div>
      <div className="error-link">
        <NavLink to={`/`}>Retourner sur la page d'accueil</NavLink>
      </div>
    </div>
  );
}
