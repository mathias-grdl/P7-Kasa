import Banner from "../../components/Banner";
import bannerImg from '../../asset/images/bannerHome.svg';

function Home(style, bannerText) {
  return (  
      Banner(bannerImg, style="", bannerText="Chez vous, partout et ailleurs")
  )
}

export default Home;
