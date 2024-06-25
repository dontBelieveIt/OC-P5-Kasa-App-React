import "./Footer-NavBar.scss";
import FooterLogo from "../assets/logo/Footer.svg";

export default function Footer() {
  return (
    <div className="kasa-footer">
      <img src={FooterLogo} alt="Kasa Logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}
