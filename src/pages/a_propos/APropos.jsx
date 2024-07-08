import styled from "styled-components";
import Banner from '../../components/Banner/Banner'
import BannerAbout from "../../assets/banners/banner_about_img.png"
import Collapse from "../../components/Collapse/Collapse"

import AProposContent from "../../datas/AProposContent"; 

const AProposLayout = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .ul-container {
    display: flex;
    width: 60vw;
    margin-top: 2.25rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media screen and (max-width: 1250px) {
      width: 80vw;
    }

    @media screen and (max-width: 767.98px) {
      width: 100%;
    }
  }
`

export default function AProposIndex() {
  document.title = "Kasa - A propos"

  return (   
  <AProposLayout>
    <Banner 
      imgSrc={BannerAbout}
      slogan={false}
      opacity={0.3}
      />
      <ul className="ul-container">
        {/* collapse item are used here, and a list has been made in datas for the content */}
        {AProposContent.map((item =>
           <Collapse
            key={item.id}
            category={item.category}
            content={item.content}
            />
        ))}
      </ul>
      
  </AProposLayout>
  );
}
