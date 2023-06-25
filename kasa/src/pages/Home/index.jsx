import Banner from "../../components/Banner";
import bannerImg from "../../asset/images/bannerHome.svg";
import Cards from "../../components/Cards";
import Tags from "../../components/Tags";
import Profil from "../../components/Profil";

function Home() {
  const banner = {
    img: bannerImg,
    style: "banner",
    text: "Chez vous, partout et ailleurs",
  };

  return (
    <div>
      {Banner(banner)}
      <Cards />
      <Tags />
      <Profil />
    </div>
  );
}

export default Home;
