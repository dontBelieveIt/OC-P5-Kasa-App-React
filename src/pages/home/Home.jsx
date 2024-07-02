import Banner from "../../components/Banner/Banner";
import BannerImage from "../../assets/banners/banner_home_img.png"
import Cards from "../../components/Cards/Cards"
import ScrollTopTopButton from "../../components/ScrollToTopButton";

export default function Home() {
  document.title = "Kasa - Location immobilière"
  
  return (
    <>
      <Banner 
      imgSrc={BannerImage}
      slogan={true}
      opacity={0.6}
      />
      <Cards />
      <ScrollTopTopButton />
    </>
  );
}
