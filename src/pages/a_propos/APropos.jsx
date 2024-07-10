import "./APropos.scss";
import Banner from '../../components/Banner/Banner'
import BannerAbout from "../../assets/banners/banner_about_img.png"
import Collapse from "../../components/Collapse/Collapse"

import AProposContent from "../../datas/AProposContent"; 

export default function AProposIndex() {
  document.title = "Kasa - A propos"

  return (   
    <div className="about">
      <Banner 
        imgSrc={BannerAbout}
        slogan={false}
        opacity={0.3}
        />
        <ul className="about__container">
          {/* collapse item are used here, and a list has been made in datas for the content */}
          {AProposContent.map((item =>
            <Collapse
              key={item.id}
              category={item.category}
              content={item.content}
              />
          ))}
        </ul>
    </div> 
  );
}
