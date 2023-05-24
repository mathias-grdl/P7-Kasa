import Banner from "../../components/Banner";
import bannerImg from '../../asset/images/bannerHome.svg';

function Home() {
  const banner = {
    img: bannerImg,
    style: "banner",
    text: "Chez vous, partout et ailleurs"
  }
  
  return (  
      Banner(banner)
  )
}

export default Home;
