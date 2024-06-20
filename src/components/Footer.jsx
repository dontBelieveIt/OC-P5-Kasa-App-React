import "./Footer-NavBar.scss";
import logo2 from "../assets/Footer.svg";

export default function Footer() {
  return (
    <div className="kasa-footer">
      <img src={logo2} alt="Kasa Logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}
