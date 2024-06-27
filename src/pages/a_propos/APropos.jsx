import "./APropos_Style.scss";
import { useState } from "react";
import logo2 from "../../assets/banners/banner_about_img.png";
import arrowBack from "../../assets/collapsible/arrow_back.svg";

import AProposContent from "../../datas/AProposContent"

export default function AProposIndex() {
  document.title = "Kasa - A propos"
  let [toggle, setToggle] = useState(false)

  return (   
  <div className="a-propos-layout">
    <img
          src={logo2}
          className="banner-cover"
          alt="Chez vous, partout et ailleurs"
        />
    <ul className="ul-container">
      {AProposContent.map((item) => (
        <li key={item.id}>
          <div className="li-container">
            <div className="apropos-collapse__category" onClick={(item) => setToggle(!toggle)}>
              {item.category}
              <img src={arrowBack} alt="Open menu" /> 
              </div>
              {toggle && (
                <div className="apropos-menu-collapse__content">
                {item.content}
              </div>)}
          </div>
        </li>
      ))}
    </ul>
  </div>
  );
}
