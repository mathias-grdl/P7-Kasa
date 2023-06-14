import Banner from "../../components/Banner";
import bannerImg from '../../asset/images/bannerHome.svg';
import Card from '../../components/Card';

function Home() {
  const banner = {
    img: bannerImg,
    style: "banner",
    text: "Chez vous, partout et ailleurs"
  }
  
  return (  
    <div>
     {Banner(banner)}
      <Card/>
    </div>
  )
}

export default Home;
