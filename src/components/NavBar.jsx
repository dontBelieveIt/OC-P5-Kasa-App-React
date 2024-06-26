import "./Footer-NavBar.scss";
import logo from "../assets/logo/LOGO.svg";
import React from "react";
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function NavBar() {
  const path = useLocation(); 
  const [underlined, setUnderlined] = useState(""); 
  useEffect(() => {
    if (path.pathname === "/") {
        setUnderlined("home")
    } else if (path.pathname === "/about") {
        setUnderlined("about")
    } else {
        setUnderlined("")
    }
  }, [path])

  return (
    <div className="nav-bar">
      <div className="kasa-logo">
        <NavLink to={`/`}>
          <img src={logo} alt="Logo Kasa" />
        </NavLink>
      </div>
      <div className="nav-btn">
        <button>
          <NavLink to={`/`} className={underlined === "home" ? "underlined" : null}>Accueil</NavLink>
        </button>
        <button>
          <NavLink to={`/about`} className={underlined === "about" ? "underlined" : null}>A propos</NavLink>
        </button>
      </div>
    </div>
  );
}
