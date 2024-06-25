import "./Footer-NavBar.scss";
import logo from "../assets/logo/LOGO.svg";
import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <div className="kasa-logo">
        <NavLink to={`/`}>
          <img src={logo} alt="Logo Kasa" />
        </NavLink>
      </div>
      <div className="nav-btn">
        <button>
          <NavLink to={`/`}>Accueil</NavLink>
        </button>
        <button>
          <NavLink to={`/about`}>A propos</NavLink>
        </button>
      </div>
    </div>
  );
}
