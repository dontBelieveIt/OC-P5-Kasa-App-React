import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SomethingWrongStyle = styled.div`
.error-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.25rem;
    padding: 2.25rem;
  }
  .error-title {
    font-size: 14rem;
    font-weight: 700;
    color: var(--primary);
  }
  .error-msg {
    font-size: 2.25rem;
    color: var(--primary);
  }
  .error-link {
    font-size: 1.125rem;
    text-decoration: underline;
    font-weight: 500;
  }
  .error-link a {
    color: unset;
  }
  .error-link a:hover {
    color: var(--primary);
    transition: 0.4s;
  }
  
`

export default function SomethingWrong() {
  return (
    <SomethingWrongStyle>
        <div className="error-div">
        <div className="error-title">Oups !</div>
        <div className="error-msg">
            Une erreur s'est produite.
        </div>
        <div className="error-link">
            <NavLink to={`/`}>Retourner sur la page d'accueil</NavLink>
        </div>
        </div>
    </SomethingWrongStyle>
  );
}
